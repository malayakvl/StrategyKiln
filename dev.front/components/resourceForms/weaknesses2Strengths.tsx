import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Weaknesses2StrengthForm } from "./partials/Weknesses2StrengthForm";
import {
  setStrengthsAction,
  setWeaknesses2StrengthAction,
  showModalWeaknesses2StrengthsAction,
} from "../../redux/customerData";
import { useDispatch, useSelector } from "react-redux";
import {
  modalWeaknesses2StrengthsSelector,
  weaknesses2StrengthsDataSelector,
  weaknesses2StrengthsDisplayDataSelector,
} from "../../redux/customerData/selectors";
import { useTranslations } from "next-intl";

export default function Step7() {
  const router = useRouter();
  const dispatch = useDispatch();
  const t = useTranslations();
  const stepData: any = useSelector(weaknesses2StrengthsDataSelector);
  const weaknesses2StrengthsDisplaySelector: any = useSelector(
    weaknesses2StrengthsDisplayDataSelector
  );
  const weaknesses2StrengthsModalSelector = useSelector(
    modalWeaknesses2StrengthsSelector
  );
  const [customError, setCustomError] = useState<any[]>([]);
  const [serviceList, setServiceList] = useState<any[]>([
    { weaknesses2Strengths: "" },
  ]);

  const SubmitSchema = Yup.object().shape({
    company_data_weaknesses2Strengths: Yup.string().required("Required field"),
  });

  const handleServiceRemove = (index: number, props: any) => {
    const list = [...serviceList];
    const tmpServiceList = weaknesses2StrengthsDisplaySelector;
    tmpServiceList[index] = !tmpServiceList[index];
    list.splice(index, 1);

    delete props.values[`weaknesses2Strengths_${index}_description`];
    for (let i = index; i < 3; i++) {
      if (props.values[`weaknesses2Strengths_${i + 1}_description`]) {
        props.values[`weaknesses2Strengths_${i}_description`] =
          props.values[`weaknesses2Strengths_${i + 1}_description`];
        tmpServiceList[i] = tmpServiceList[i + 1]
          ? tmpServiceList[i + 1]
          : false;
      } else {
        delete props.values[`weaknesses2Strengths_${i}_description`];
        tmpServiceList[i] = false;
      }
    }
    setServiceList(list);
    dispatch(setStrengthsAction(props.values));
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { weaknesses2Strengths: "" }]);
  };

  const checkFormData = (values: any, type: string) => {
    const tmpError = [];
    for (let i = 0; i < serviceList.length; i++) {
      if (values[`weaknesses2Strengths_${i}_description`]) {
        if (values[`weaknesses2Strengths_${i}_description`].length === 0) {
          tmpError[i] = true;
        }
      } else {
        tmpError[i] = true;
      }
    }
    setCustomError(tmpError);
    localStorage.setItem(
      "step2Data_weaknesses2Strengths",
      JSON.stringify(values)
    );
    localStorage.setItem(
      "step2Data_weaknesses2StrengthsVisibility",
      JSON.stringify(weaknesses2StrengthsDisplaySelector)
    );
    dispatch(setWeaknesses2StrengthAction(values));

    if (tmpError.length === 0 && type === "next") {
      router.push("/resources-preview");
    }
    if (tmpError.length === 0 && type === "modal") {
      dispatch(showModalWeaknesses2StrengthsAction(false));
    }
    if (type === "prev") {
      router.push("/resources/weaknesses2Strengths");
    }
  };

  const preSaveFormData = (values: any) => {
    localStorage.setItem(
      "step2Data_weaknesses2Strengths",
      JSON.stringify(values)
    );
    dispatch(setWeaknesses2StrengthAction(values));
    router.push("/resources/threats2opportunities");
  };

  useEffect(() => {
    const stepStorageData = JSON.parse(
      window.localStorage.getItem("step2Data_weaknesses2Strengths") || "{}"
    );
    if (Object.keys(stepData).length) {
      const tmpServiceList = [];
      for (let i = 0; i < Object.keys(stepData).length; i++) {
        if (
          stepData[`weaknesses2Strengths_${i}_description`] ||
          (!stepData[`weaknesses2Strengths_${i}_description`] &&
            stepStorageData[`weaknesses2Strengths_${i}_description`])
        ) {
          tmpServiceList.push({ strength: "" });
        }
        if (
          !stepData[`weaknesses2Strengths_${i}_description`] &&
          stepStorageData[`weaknesses2Strengths_${i}_description`]
        ) {
          stepData[`weaknesses2Strengths_${i}_description`] =
            stepStorageData[`weaknesses2Strengths_${i}_description`];
        }
      }
      if (tmpServiceList.length === 0) {
        tmpServiceList.push({ weaknesses2Strengths: "" });
      }
      setServiceList(tmpServiceList);
    }
  }, [stepData]);

  return (
    <div>
      <div className="row no-gutters">
        <h3 className="resource-head">{t("Weaknesses to Strengths")}</h3>
        <div className="clearfix"></div>
        <span className="page-description">{t("weak_descr_form")}</span>
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
                    <Weaknesses2StrengthForm
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
                <span>Add Weaknesses to Strengths</span>
              </h4>
            )}
            <div className="clearfix"></div>
            <div className="row no-gutters">
              {!weaknesses2StrengthsModalSelector && (
                <div className="col-12 d-flex justify-content-between">
                  <button
                    className="gray-medium-button"
                    onClick={() => preSaveFormData(props.values)}
                  >
                    {t("Back")}
                  </button>
                  <button
                    className="red-medium-button"
                    onClick={() => checkFormData(props.values, "next")}
                  >
                    {t("Next")}
                  </button>
                </div>
              )}
              {weaknesses2StrengthsModalSelector && (
                <div className="col-12">
                  <button
                    className="red-medium-button float-right"
                    onClick={() => checkFormData(props.values, "modal")}
                  >
                    {t("Update")}
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
