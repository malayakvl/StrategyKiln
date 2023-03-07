import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { WeaknessesForm } from "./partials/WeaknessesForm";
import {
  setWeaknessesAction,
  showModalWeaknessesAction,
} from "../../redux/customerData";
import { useDispatch, useSelector } from "react-redux";
import {
  weaknessesDisplayDataSelector,
  weaknessesDataSelector,
  modalWeaknessesSelector,
} from "../../redux/customerData/selectors";

export default function Step3() {
  const router = useRouter();
  const dispatch = useDispatch();
  const stepData: any = useSelector(weaknessesDataSelector);
  const weaknessesDisplaySelector: any = useSelector(
    weaknessesDisplayDataSelector
  );
  const weaknessesModalSelector = useSelector(modalWeaknessesSelector);
  const [customError, setCustomError] = useState<any[]>([]);
  const [serviceList, setServiceList] = useState<any[]>([{ weaknesses: "" }]);

  const SubmitSchema = Yup.object().shape({
    company_data_weaknesses: Yup.string().required("Required field"),
  });

  const handleServiceRemove = (index: number, props: any) => {
    const list = [...serviceList];
    const tmpServiceList = weaknessesDisplaySelector;
    tmpServiceList[index] = !tmpServiceList[index];
    list.splice(index, 1);

    delete props.values[`weaknesses_${index}_description`];
    for (let i = index; i < 5; i++) {
      if (props.values[`weaknesses_${i + 1}_description`]) {
        props.values[`weaknesses_${i}_description`] =
          props.values[`weaknesses_${i + 1}_description`];
        tmpServiceList[i] = tmpServiceList[i + 1]
          ? tmpServiceList[i + 1]
          : false;
      } else {
        delete props.values[`weaknesses_${i}_description`];
        tmpServiceList[i] = false;
      }
    }
    setServiceList(list);
    dispatch(setWeaknessesAction(props.values));
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { weaknesses: "" }]);
  };

  const checkFormData = (values: any, type: string) => {
    const tmpError = [];
    for (let i = 0; i < serviceList.length; i++) {
      if (values[`weaknesses_${i}_description`]) {
        if (values[`weaknesses_${i}_description`].length === 0) {
          tmpError[i] = true;
        }
      } else {
        tmpError[i] = true;
      }
    }
    setCustomError(tmpError);
    localStorage.setItem("step2Data_weaknesses", JSON.stringify(values));
    localStorage.setItem(
      "step2Data_weaknessesVisibility",
      JSON.stringify(weaknessesDisplaySelector)
    );
    dispatch(setWeaknessesAction(values));

    if (tmpError.length === 0 && type === "next") {
      router.push("/resources/opportunities");
    }
    if (tmpError.length === 0 && type === "modal") {
      dispatch(showModalWeaknessesAction(false));
    }
    if (type === "prev") {
      router.push("/resources/weaknesses");
    }
  };

  const preSaveFormData = (values: any) => {
    localStorage.setItem("step2Data_weaknesses", JSON.stringify(values));
    localStorage.setItem(
      "step2Data_weaknessesVisibility",
      JSON.stringify(weaknessesDisplaySelector)
    );
    dispatch(setWeaknessesAction(values));
    router.push("/resources/strengths");
  };

  useEffect(() => {
    const stepStorageData = JSON.parse(
      window.localStorage.getItem("step2Data_weaknesses") || "{}"
    );
    if (Object.keys(stepData).length) {
      const tmpServiceList = [];
      for (let i = 0; i < Object.keys(stepData).length; i++) {
        if (
          stepData[`weaknesses_${i}_description`] ||
          (!stepData[`weaknesses_${i}_description`] &&
            stepStorageData[`weaknesses_${i}_description`])
        ) {
          tmpServiceList.push({ weaknesses: "" });
        }
        if (
          !stepData[`weaknesses_${i}_description`] &&
          stepStorageData[`weaknesses_${i}_description`]
        ) {
          stepData[`weaknesses_${i}_description`] =
            stepStorageData[`weaknesses_${i}_description`];
        }
      }
      if (tmpServiceList.length === 0) {
        tmpServiceList.push({ weaknesses: "" });
      }
      setServiceList(tmpServiceList);
    }
  }, [stepData]);

  return (
    <div>
      <div className="row no-gutters">
        <h3 className="resource-head">Weaknesses</h3>
        <div className="clearfix"></div>
        <span className="page-description">
          What are your company or brand’s weaknesses?
        </span>
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
                    <WeaknessesForm
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
                <span>Add weaknesses</span>
              </h4>
            )}
            <div className="clearfix"></div>
            <div className="row no-gutters">
              {!weaknessesModalSelector && (
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
              {weaknessesModalSelector && (
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
