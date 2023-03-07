import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  modalWeaknesses2StrengthsSelector,
  weaknesses2StrengthsDataSelector,
} from "../../../redux/customerData/selectors";

const Weaknesses2Strengths: React.FC = () => {
  const threatsData = useSelector(weaknesses2StrengthsDataSelector);
  const modalSelector = useSelector(modalWeaknesses2StrengthsSelector);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [modalSelector]);

  return (
    <>
      {threatsData?.weaknesses2Strengths_0_description && (
        <p>{threatsData?.weaknesses2Strengths_0_description}</p>
      )}
      {threatsData?.weaknesses2Strengths_1_description && (
        <p>{threatsData?.weaknesses2Strengths_1_description}</p>
      )}
      {threatsData?.weaknesses2Strengths_2_description && (
        <p>{threatsData?.weaknesses2Strengths_2_description}</p>
      )}
      {threatsData?.weaknesses2Strengths_3_description && (
        <p>{threatsData?.weaknesses2Strengths_3_description}</p>
      )}
      {threatsData?.weaknesses2Strengths_4_description && (
        <p>{threatsData?.weaknesses2Strengths_4_description}</p>
      )}
    </>
  );
};

export default Weaknesses2Strengths;
