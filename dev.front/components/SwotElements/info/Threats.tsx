import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  modalThreatsSelector,
  threatsDataSelector,
} from "../../../redux/customerData/selectors";

const Threats: React.FC = () => {
  const threatsData = useSelector(threatsDataSelector);
  const modalSelector = useSelector(modalThreatsSelector);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [modalSelector]);

  return (
    <div className="info">
      {threatsData?.threats_0_description && (
        <p>{threatsData?.threats_0_description}</p>
      )}
      {threatsData?.threats_1_description && (
        <p>{threatsData?.threats_1_description}</p>
      )}
      {threatsData?.threats_2_description && (
        <p>{threatsData?.threats_2_description}</p>
      )}
      {threatsData?.threats_3_description && (
        <p>{threatsData?.threats_3_description}</p>
      )}
      {threatsData?.threats_4_description && (
        <p>{threatsData?.threats_4_description}</p>
      )}
    </div>
  );
};

export default Threats;
