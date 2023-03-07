import { useRouter } from "next/router";
import React from "react";
import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
} from "../../../components/resourceForms";
import { setupFileNameAction } from "../../../redux/layouts";
import Breadcrumb from "../../../components/Breadcrumb";
import { useDispatch } from "react-redux";

export default function ResultPage() {
  const router = useRouter();
  const stepName = router.query.pageNumber;
  const dispatch = useDispatch();

  const clearHandler = () => {
    // clear local storage
    localStorage.removeItem("step2Data_company");
    localStorage.removeItem("step2Data_strength");
    localStorage.removeItem("step2Data_strengthVisibility");
    localStorage.removeItem("step2Data_weaknesses");
    localStorage.removeItem("step2Data_weaknessesVisibility");
    localStorage.removeItem("step2Data_opportunities");
    localStorage.removeItem("step2Data_opportunitiesVisibility");
    localStorage.removeItem("step2Data_threats");
    localStorage.removeItem("step2Data_threatsVisibility");
    localStorage.removeItem("step2Data_threats2Opportunities");
    localStorage.removeItem("step2Data_threats2OpportunitiesVisibility");
    localStorage.removeItem("step2Data_weaknesses2Strengths");
    localStorage.removeItem("step2Data_weaknesses2StrengthsVisibility");
    window.location.href = "/resources/company";
    // router.push("/resources/company");
  };

  return (
    <div className="container">
      {stepName === "result" ? (
        <div className="mx-auto mt-10">
          <div className="result-bg-slide"></div>
          <div className="result-title">
            Your SWOT Analysis has been downloaded successfully!
          </div>
          <div className="result-btn-block">
            <button className="btn red-button" onClick={() => clearHandler()}>
              Create another SWOT
            </button>
            <button
              className="btn orange-button"
              onClick={() => {
                router.push("/resources-preview");
                dispatch(setupFileNameAction(null));
              }}
            >
              Go Back and Edit
            </button>
          </div>
        </div>
      ) : (
        <>
          <Breadcrumb />
          <div className="clearfix" />
          <div className="form-step-1">
            {stepName == "company" && <Step1 />}
            {stepName == "strengths-step1" && <Step2 />}
            {stepName == "weaknesses" && <Step3 />}
            {stepName == "opportunities" && <Step4 />}
            {stepName == "threats" && <Step5 />}
            {stepName == "threats2opportunities" && <Step6 />}
            {stepName == "weaknesses2strengths" && <Step7 />}
          </div>
        </>
      )}
    </div>
  );
}
