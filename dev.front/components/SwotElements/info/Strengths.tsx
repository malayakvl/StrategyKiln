import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  modalStrengthSelector,
  strengthsDataSelector,
} from "../../../redux/customerData/selectors";

const Strengths: React.FC = () => {
  const strengthsData = useSelector(strengthsDataSelector);
  const modalSelector = useSelector(modalStrengthSelector);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [modalSelector]);

  return (
    <div className="info" style={{ whiteSpace: "pre-wrap" }}>
      {strengthsData?.strengths_0_description && (
        <p>{strengthsData?.strengths_0_description}</p>
      )}
      {strengthsData?.strengths_1_description && (
        <p>{strengthsData?.strengths_1_description}</p>
      )}
      {strengthsData?.strengths_2_description && (
        <p>{strengthsData?.strengths_2_description}</p>
      )}
      {strengthsData?.strengths_3_description && (
        <p>{strengthsData?.strengths_3_description}</p>
      )}
      {strengthsData?.strengths_4_description && (
        <p>{strengthsData?.strengths_4_description}</p>
      )}
    </div>
  );
};

export default Strengths;
