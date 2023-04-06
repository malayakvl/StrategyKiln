import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ThreatsForm } from "./partials/ThreatsForm";
import {
  setStrengthsAction,
  setThreatsAction,
  showModalThreatsAction,
} from "../../redux/customerData";
import { useDispatch, useSelector } from "react-redux";
import {
  threatsDisplayDataSelector,
  threatsDataSelector,
  modalThreatsSelector,
} from "../../redux/customerData/selectors";
import { useTranslations } from "next-intl";

export default function Step4() {
  const router = useRouter();
  const dispatch = useDispatch();
  const t = useTranslations();
  const stepData: any = useSelector(threatsDataSelector);
  const threatsDisplaySelector = useSelector(threatsDisplayDataSelector);
  const threatsModalSelector = useSelector(modalThreatsSelector);
  const [customError, setCustomError] = useState<any[]>([]);
  const [serviceList, setServiceList] = useState<any[]>([{ threats: "" }]);

  const SubmitSchema = Yup.object().shape({
    company_data_threats: Yup.string().required(t("Required field")),
  });

  const handleServiceRemove = (index: number, props: any) => {
    const list = [...serviceList];
    const tmpServiceList = threatsDisplaySelector;
    tmpServiceList[index] = !tmpServiceList[index];
    list.splice(index, 1);

    delete props.values[`threats_${index}_description`];
    for (let i = index; i < 5; i++) {
      if (props.values[`threats_${i + 1}_description`]) {
        props.values[`threats_${i}_description`] =
          props.values[`threats_${i + 1}_description`];
        tmpServiceList[i] = tmpServiceList[i + 1]
          ? tmpServiceList[i + 1]
          : false;
      } else {
        delete props.values[`threats_${i}_description`];
        tmpServiceList[i] = false;
      }
    }
    setServiceList(list);
    dispatch(setThreatsAction(props.values));
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { threats: "" }]);
  };

  const checkFormData = (values: any, type: string) => {
    const tmpError = [];
    for (let i = 0; i < serviceList.length; i++) {
      if (values[`threats_${i}_description`]) {
        if (values[`threats_${i}_description`].length === 0) {
          tmpError[i] = true;
        }
      } else {
        tmpError[i] = true;
      }
    }
    setCustomError(tmpError);
    localStorage.setItem("step2Data_threats", JSON.stringify(values));
    localStorage.setItem(
      "step2Data_threatsVisibility",
      JSON.stringify(threatsDisplaySelector)
    );
    dispatch(setThreatsAction(values));
    if (tmpError.length === 0 && type === "next") {
      router.push("/resources/threats2opportunities");
    }
    if (tmpError.length === 0 && type === "modal") {
      dispatch(showModalThreatsAction(false));
    }
    if (type === "prev") {
      router.push("resources/opportunities");
    }
  };

  const preSaveFormData = (values: any) => {
    localStorage.setItem("step2Data_threats", JSON.stringify(values));
    localStorage.setItem(
      "step2Data_threatsVisibility",
      JSON.stringify(threatsDisplaySelector)
    );
    dispatch(setStrengthsAction(values));
    router.push("/resources/opportunities");
  };

  useEffect(() => {
    const stepStorageData = JSON.parse(
      window.localStorage.getItem("step2Data_threats") || "{}"
    );
    if (Object.keys(stepData).length) {
      const tmpServiceList = [];
      for (let i = 0; i < Object.keys(stepData).length; i++) {
        if (
          stepData[`threats_${i}_description`] ||
          (!stepData[`threats_${i}_description`] &&
            stepStorageData[`threats_${i}_description`])
        ) {
          tmpServiceList.push({ threats: "" });
        }
        if (
          !stepData[`threats_${i}_description`] &&
          stepStorageData[`threats_${i}_description`]
        ) {
          stepData[`threats_${i}_description`] =
            stepStorageData[`threats_${i}_description`];
        }
      }
      if (tmpServiceList.length === 0) {
        tmpServiceList.push({ threats: "" });
      }
      setServiceList(tmpServiceList);
    }
  }, [stepData]);

  return (
    <div>
      <div className="row no-gutters">
        <h3 className="resource-head">{t("Threats")}</h3>
        <div className="clearfix"></div>
        <span className="page-description">{t("threat_form_descr")}</span>
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
                    <ThreatsForm
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
            {serviceList.length < 5 && (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
              <h4 className="form-header" onClick={handleServiceAdd}>
                <span>Add Threats</span>
              </h4>
            )}
            <div className="clearfix"></div>
            <div className="row no-gutters">
              {!threatsModalSelector && (
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
              {threatsModalSelector && (
                <div className="col-12">
                  <button
                    className="red-medium-button float-right"
                    onClick={() => checkFormData(props.values, "modal")}
                  >
                    Update
                  </button>
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
