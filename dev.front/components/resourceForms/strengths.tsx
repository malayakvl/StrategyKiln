import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { StrengthForm } from "./partials/StrengthForm";
import {
  setStrengthsAction,
  showModalStrengthsAction,
} from "../../redux/customerData";
import {
  modalStrengthSelector,
  strengthsDataSelector,
  strengthsDisplayDataSelector,
} from "../../redux/customerData/selectors";
import { useTranslations } from "next-intl";

export default function Step2() {
  const router = useRouter();
  const t = useTranslations();
  const dispatch = useDispatch();
  const stepData: any = useSelector(strengthsDataSelector);
  const strengthDisplaySelector = useSelector(strengthsDisplayDataSelector);
  const strengthModalSelector = useSelector(modalStrengthSelector);
  const [customError, setCustomError] = useState<any[]>([]);
  const [serviceList, setServiceList] = useState<any[]>([{ strength: "" }]);

  const SubmitSchema = Yup.object().shape({
    company_data_strengths: Yup.string().required("Required field"),
  });

  const handleServiceRemove = (index: number, props: any) => {
    const list = [...serviceList];
    const tmpServiceList = strengthDisplaySelector;
    tmpServiceList[index] = !tmpServiceList[index];
    list.splice(index, 1);
    delete props.values[`strengths_${index}_description`];
    for (let i = index; i < 5; i++) {
      if (props.values[`strengths_${i + 1}_description`]) {
        props.values[`strengths_${i}_description`] =
          props.values[`strengths_${i + 1}_description`];
        tmpServiceList[i] = tmpServiceList[i + 1]
          ? tmpServiceList[i + 1]
          : false;
      } else {
        delete props.values[`strengths_${i}_description`];
        tmpServiceList[i] = false;
      }
    }
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { strength: "" }]);
  };

  const checkFormData = (values: any, type: string) => {
    const tmpError = [];
    for (let i = 0; i < serviceList.length; i++) {
      if (values[`strengths_${i}_description`]) {
        if (values[`strengths_${i}_description`].length === 0) {
          tmpError[i] = true;
        }
      } else {
        tmpError[i] = true;
      }
    }
    setCustomError(tmpError);
    localStorage.setItem("step2Data_strength", JSON.stringify(values));
    localStorage.setItem(
      "step2Data_strengthVisibility",
      JSON.stringify(strengthDisplaySelector)
    );
    dispatch(setStrengthsAction(values));

    if (tmpError.length === 0 && type === "next") {
      router.push("/resources/weaknesses");
    }
    if (tmpError.length === 0 && type === "modal") {
      dispatch(showModalStrengthsAction(false));
    }
    if (type === "prev") {
      router.push("/resources/company");
    }
  };

  const preSaveFormData = (values: any) => {
    localStorage.setItem("step2Data_strength", JSON.stringify(values));
    localStorage.setItem(
      "step2Data_strengthVisibility",
      JSON.stringify(strengthDisplaySelector)
    );
    dispatch(setStrengthsAction(values));
    router.push("/resources/company");
  };

  useEffect(() => {
    const stepStorageData = JSON.parse(
      window.localStorage.getItem("step2Data_strength") || "{}"
    );
    if (Object.keys(stepData).length) {
      const tmpServiceList = [];
      for (let i = 0; i < Object.keys(stepData).length; i++) {
        if (
          stepData[`strengths_${i}_description`] ||
          (!stepData[`strengths_${i}_description`] &&
            stepStorageData[`strengths_${i}_description`])
        ) {
          tmpServiceList.push({ strength: "" });
        }
        if (
          !stepData[`strengths_${i}_description`] &&
          stepStorageData[`strengths_${i}_description`]
        ) {
          stepData[`strengths_${i}_description`] =
            stepStorageData[`strengths_${i}_description`];
        }
      }
      if (tmpServiceList.length === 0) {
        tmpServiceList.push({ strength: "" });
      }
      setServiceList(tmpServiceList);
    }
  }, [stepData]);

  return (
    <div>
      <div className="row no-gutters">
        <h3 className="resource-head">{t("Strengths")}</h3>
        <div className="clearfix"></div>
        <span className="page-description">{t("strengths_descr_form")}</span>
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
                    <StrengthForm
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
                <span>{t("Add Strengths")}</span>
              </h4>
            )}
            <div className="clearfix"></div>

            <div className="row no-gutters">
              {!strengthModalSelector && (
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
              {strengthModalSelector && (
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
