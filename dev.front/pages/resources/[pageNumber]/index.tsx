import { useRouter } from "next/router";
import Link from "next/link";
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
import { useDispatch, useSelector } from "react-redux";
import { fileNameSelector } from "../../../redux/layouts/selectors";
import { useTranslations } from "next-intl";

export default function ResultPage() {
  const router = useRouter();
  const t = useTranslations();
  const stepName = router.query.pageNumber;
  const dispatch = useDispatch();
  const fileName = useSelector(fileNameSelector);

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
  };
  return (
    <div className="container">
      {stepName === "result" ? (
        <div className="mx-auto mt-10">
          <div className="result-bg-slide"></div>
          <div className="result-title">
            Your SWOT Analysis has been downloaded successfully!
            <small className="block mt-2 text-sm">
              If download do not starting automatically click to «Download File»
              button
            </small>
          </div>
          <div className="result-btn-block">
            <Link legacyBehavior href={`${fileName}`}>
              <a
                target="_blank"
                className="btn orange-button btn-swot-download"
                rel="noreferrer"
              >
                {t("Download File")}
              </a>
            </Link>
            <button
              className="btn red-button btn-swot-another"
              onClick={() => clearHandler()}
            >
              {t("Create another SWOT")}
            </button>
            <button
              className="btn orange-button btn-swot-back-edit"
              onClick={() => {
                router.push("/resources-preview");
                dispatch(setupFileNameAction(null));
              }}
            >
              {t("Go Back and Edit")}
            </button>
          </div>
        </div>
      ) : (
        <>
          <Breadcrumb />
          <div className="clearfix" />
          <div className="form-step-1">
            {stepName == "company" && <Step1 />}
            {stepName == "strengths" && <Step2 />}
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
export async function getServerSideProps() {
  const locale = "en";

  return {
    props: {
      locale,
      messages: {
        ...require(`../../../messages/${locale}.json`),
      },
    },
  };
}
