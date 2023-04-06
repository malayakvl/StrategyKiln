import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Threats2OpportunitiesForm } from "./partials/Threats2OpportunitiesForm";
import {
  setThreats2OpportunitiesAction,
  showModalThreats2OpportunitiesAction,
} from "../../redux/customerData";
import { useDispatch, useSelector } from "react-redux";
import {
  threats2OpportunitiesDisplayDataSelector,
  threats2OpportunitiesDataSelector,
  modalThreats2OpportunitiesSelector,
} from "../../redux/customerData/selectors";
import { useTranslations } from "next-intl";

export default function Step6() {
  const router = useRouter();
  const dispatch = useDispatch();
  const t = useTranslations();
  const stepData: any = useSelector(threats2OpportunitiesDataSelector);
  const threats2OpportunitiesDisplaySelector = useSelector(
    threats2OpportunitiesDisplayDataSelector
  );
  const threats2OpportunitiesModalSelector = useSelector(
    modalThreats2OpportunitiesSelector
  );
  const [customError, setCustomError] = useState<any[]>([]);
  const [serviceList, setServiceList] = useState<any[]>([
    { threats2Opportunities: "" },
  ]);

  const SubmitSchema = Yup.object().shape({
    company_data_threats2Opportunities: Yup.string().required(
      t("Required field")
    ),
  });

  const handleServiceRemove = (index: number, props: any) => {
    const list = [...serviceList];
    const tmpServiceList = threats2OpportunitiesDisplaySelector;
    tmpServiceList[index] = !tmpServiceList[index];
    list.splice(index, 1);

    delete props.values[`threats2Opportunities_${index}_description`];
    for (let i = index; i < 3; i++) {
      if (props.values[`threats2Opportunities_${i + 1}_description`]) {
        props.values[`threats2Opportunities_${i}_description`] =
          props.values[`threats2Opportunities_${i + 1}_description`];
        tmpServiceList[i] = tmpServiceList[i + 1]
          ? tmpServiceList[i + 1]
          : false;
      } else {
        delete props.values[`threats2Opportunities_${i}_description`];
        tmpServiceList[i] = false;
      }
    }
    setServiceList(list);
    dispatch(setThreats2OpportunitiesAction(props.values));
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { threats2Opportunities: "" }]);
  };

  const checkFormData = (values: any, type: string) => {
    const tmpError = [];
    for (let i = 0; i < serviceList.length; i++) {
      if (values[`threats2Opportunities_${i}_description`]) {
        if (values[`threats2Opportunities_${i}_description`].length === 0) {
          tmpError[i] = true;
        }
      } else {
        tmpError[i] = true;
      }
    }
    setCustomError(tmpError);
    localStorage.setItem(
      "step2Data_threats2Opportunities",
      JSON.stringify(values)
    );
    localStorage.setItem(
      "step2Data_threats2OpportunitiesVisibility",
      JSON.stringify(threats2OpportunitiesDisplaySelector)
    );
    dispatch(setThreats2OpportunitiesAction(values));

    if (tmpError.length === 0 && type === "next") {
      router.push("/resources/weaknesses2strengths");
    }
    if (tmpError.length === 0 && type === "modal") {
      dispatch(showModalThreats2OpportunitiesAction(false));
    }
    if (type === "prev") {
      router.push("/resources/threats");
    }
  };

  const preSaveFormData = (values: any) => {
    localStorage.setItem(
      "step2Data_threats2Opportunities",
      JSON.stringify(values)
    );
    localStorage.setItem(
      "step2Data_threats2OpportunitiesVisibility",
      JSON.stringify(threats2OpportunitiesDisplaySelector)
    );
    dispatch(setThreats2OpportunitiesAction(values));
    router.push("/resources/threats");
  };

  useEffect(() => {
    const stepStorageData = JSON.parse(
      window.localStorage.getItem("step2Data_threats2Opportunities") || "{}"
    );
    if (Object.keys(stepData).length) {
      const tmpServiceList = [];
      for (let i = 0; i < Object.keys(stepData).length; i++) {
        if (
          stepData[`threats2Opportunities_${i}_description`] ||
          (!stepData[`threats2Opportunities_${i}_description`] &&
            stepStorageData[`threats2Opportunities_${i}_description`])
        ) {
          tmpServiceList.push({ strength: "" });
        }
        if (
          !stepData[`threats2Opportunities_${i}_description`] &&
          stepStorageData[`threats2Opportunities_${i}_description`]
        ) {
          stepData[`threats2Opportunities_${i}_description`] =
            stepStorageData[`threats2Opportunities_${i}_description`];
        }
      }
      if (tmpServiceList.length === 0) {
        tmpServiceList.push({ threats2Opportunities: "" });
      }
      setServiceList(tmpServiceList);
    }
  }, [stepData]);

  return (
    <div>
      <div className="row no-gutters">
        <h3 className="resource-head">{t("Threats to Opportunities")}</h3>
        <div className="clearfix"></div>
        <span className="page-description">{t("thread_form_descr")}</span>
      </div>
      <Formik
        initialValues={stepData}
        enableReinitialize
        validationSchema={SubmitSchema}
        onSubmit={() => {
          // console.log(values);
        }}
      >
        {(props: any) => (
          <Form>
            <div className="form-field">
              {serviceList.map((singleService, index) => (
                <div key={index} className="services">
                  <div className="first-division">
                    <Threats2OpportunitiesForm
                      props={props}
                      num={index}
                      counter={index}
                      customError={customError[index]}
                      handleRemoveTextarea={() =>
                        handleServiceRemove(index, props)
                      }
                    />
                    <div className="clearfix"></div>
                  </div>
                </div>
              ))}
            </div>
            {serviceList.length < 3 && (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
              <h4 className="form-header" onClick={handleServiceAdd}>
                <span>{t("Add Threats to Opportunities")}</span>
              </h4>
            )}
            <div className="clearfix"></div>
            <div className="row no-gutters">
              {!threats2OpportunitiesModalSelector && (
                <div className="col-12 d-flex justify-content-between">
                  <button
                    className="gray-medium-button"
                    onClick={() => preSaveFormData(props.values)}
                  >
                    Back
                  </button>
                  <button
                    className="red-medium-button"
                    onClick={() => checkFormData(props.values, "next")}
                  >
                    Next
                  </button>
                </div>
              )}
              {threats2OpportunitiesModalSelector && (
                <div className="col-12">
                  <button
                    className="red-medium-button float-right"
                    onClick={() => checkFormData(props.values, "modal")}
                  >
                    Update
                  </button>
                </div>
              )}
              {/*<div className="col-12 d-flex justify-content-between">*/}
              {/*    <button className="gray-medium-button" onClick={() => preSaveFormData(props.values, 'next')}>Back</button>*/}
              {/*    <button className="red-medium-button" onClick={() => checkFormData(props.values, 'next')}>Next</button>*/}
              {/*</div>*/}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
