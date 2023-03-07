import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { OpportunitiesForm } from "./partials/OpportunitiesForm";
import {
  setOpportunitiesAction,
  showModalOpportunitiesAction,
} from "../../redux/customerData";
import { useDispatch, useSelector } from "react-redux";
import {
  opportunitiesDisplayDataSelector,
  opportunitiesDataSelector,
  modalOpportunitiesSelector,
} from "../../redux/customerData/selectors";

export default function Step4() {
  const router = useRouter();
  const dispatch = useDispatch();
  const stepData: any = useSelector(opportunitiesDataSelector);
  const opportunitiesDisplaySelector: any = useSelector(
    opportunitiesDisplayDataSelector
  );
  const opportunitiesModalSelector = useSelector(modalOpportunitiesSelector);
  const [customError, setCustomError] = useState<any[]>([]);
  const [serviceList, setServiceList] = useState<any[]>([
    { opportunities: "" },
  ]);

  const SubmitSchema = Yup.object().shape({
    company_data_opportunities: Yup.string().required("Required field"),
  });

  const handleServiceRemove = (index: number, props: any) => {
    const list = [...serviceList];
    const tmpServiceList = opportunitiesDisplaySelector;
    tmpServiceList[index] = !tmpServiceList[index];
    list.splice(index, 1);

    delete props.values[`opportunities_${index}_description`];
    for (let i = index; i < 5; i++) {
      if (props.values[`opportunities_${i + 1}_description`]) {
        props.values[`opportunities_${i}_description`] =
          props.values[`opportunities_${i + 1}_description`];
        tmpServiceList[i] = tmpServiceList[i + 1]
          ? tmpServiceList[i + 1]
          : false;
      } else {
        delete props.values[`opportunities_${i}_description`];
        tmpServiceList[i] = false;
      }
    }
    setServiceList(list);
    dispatch(setOpportunitiesAction(props.values));
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { opportunities: "" }]);
  };

  const checkFormData = (values: any, type: string) => {
    const tmpError = [];
    for (let i = 0; i < serviceList.length; i++) {
      if (values[`opportunities_${i}_description`]) {
        if (values[`opportunities_${i}_description`].length === 0) {
          tmpError[i] = true;
        }
      } else {
        tmpError[i] = true;
      }
    }
    setCustomError(tmpError);

    localStorage.setItem("step2Data_opportunities", JSON.stringify(values));
    localStorage.setItem(
      "step2Data_opportunitiesVisibility",
      JSON.stringify(opportunitiesDisplaySelector)
    );
    dispatch(setOpportunitiesAction(values));

    if (tmpError.length === 0 && type === "next") {
      router.push("/resources/threats");
    }
    if (tmpError.length === 0 && type === "modal") {
      dispatch(showModalOpportunitiesAction(false));
    }
    if (type === "prev") {
      router.push("/resources/weaknesses");
    }
  };

  const preSaveFormData = (values: any) => {
    localStorage.setItem("step2Data_opportunities", JSON.stringify(values));
    localStorage.setItem(
      "step2Data_opportunitiesVisibility",
      JSON.stringify(opportunitiesDisplaySelector)
    );

    dispatch(setOpportunitiesAction(values));
    router.push("/resources/weaknesses");
  };

  useEffect(() => {
    const stepStorageData = JSON.parse(
      window.localStorage.getItem("step2Data_opportunities") || "{}"
    );
    if (Object.keys(stepData).length) {
      const tmpServiceList = [];
      for (let i = 0; i < Object.keys(stepData).length; i++) {
        if (
          stepData[`opportunities_${i}_description`] ||
          (!stepData[`opportunities_${i}_description`] &&
            stepStorageData[`opportunities_${i}_description`])
        ) {
          tmpServiceList.push({ opportunities: "" });
        }
        if (
          !stepData[`opportunities_${i}_description`] &&
          stepStorageData[`opportunities_${i}_description`]
        ) {
          stepData[`opportunities_${i}_description`] =
            stepStorageData[`opportunities_${i}_description`];
        }
      }
      if (tmpServiceList.length === 0) {
        tmpServiceList.push({ opportunities: "" });
      }
      setServiceList(tmpServiceList);
    }
  }, [stepData]);

  return (
    <div>
      <div className="row no-gutters">
        <h3 className="resource-head">Opportunities</h3>
        <div className="clearfix"></div>
        <span className="page-description">
          Let move on to external factors, like opportunities and opportunities.
          What are the greatest opportunities in your industry? Is your industry
          growing? Are there new trends emerging that you can take part in? Are
          new technologies becoming available to help you do business more
          efficiently?
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
                    <OpportunitiesForm
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
                <span>Add Opportunities</span>
              </h4>
            )}
            <div className="clearfix"></div>
            <div className="row no-gutters">
              {!opportunitiesModalSelector && (
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
              {opportunitiesModalSelector && (
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
