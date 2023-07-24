import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  modalWeaknessesSelector,
  weaknessesDataSelector,
} from "../../../redux/customerData/selectors";

const Weaknesses: React.FC = () => {
  const weaknessesData = useSelector(weaknessesDataSelector);
  const modalSelector = useSelector(modalWeaknessesSelector);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [modalSelector]);

  return (
    <div className="info" style={{ whiteSpace: "pre-wrap" }}>
      {weaknessesData?.weaknesses_0_description && (
        <p>{weaknessesData?.weaknesses_0_description}</p>
      )}
      {weaknessesData?.weaknesses_1_description && (
        <p>{weaknessesData?.weaknesses_1_description}</p>
      )}
      {weaknessesData?.weaknesses_2_description && (
        <p>{weaknessesData?.weaknesses_2_description}</p>
      )}
      {weaknessesData?.weaknesses_3_description && (
        <p>{weaknessesData?.weaknesses_3_description}</p>
      )}
      {weaknessesData?.weaknesses_4_description && (
        <p>{weaknessesData?.weaknesses_4_description}</p>
      )}
    </div>
  );
};

export default Weaknesses;
