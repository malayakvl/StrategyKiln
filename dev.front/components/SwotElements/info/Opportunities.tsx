import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  modalOpportunitiesSelector,
  opportunitiesDataSelector,
} from "../../../redux/customerData/selectors";

const Opportunities: React.FC = () => {
  const opportunitiesData = useSelector(opportunitiesDataSelector);
  const modalSelector = useSelector(modalOpportunitiesSelector);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [modalSelector]);

  return (
    <div className="info" style={{ whiteSpace: "pre-wrap" }}>
      {opportunitiesData?.opportunities_0_description && (
        <p>{opportunitiesData?.opportunities_0_description}</p>
      )}
      {opportunitiesData?.opportunities_1_description && (
        <p>{opportunitiesData?.opportunities_1_description}</p>
      )}
      {opportunitiesData?.opportunities_2_description && (
        <p>{opportunitiesData?.opportunities_2_description}</p>
      )}
      {opportunitiesData?.opportunities_3_description && (
        <p>{opportunitiesData?.opportunities_3_description}</p>
      )}
      {opportunitiesData?.opportunities_4_description && (
        <p>{opportunitiesData?.opportunities_4_description}</p>
      )}
    </div>
  );
};

export default Opportunities;
