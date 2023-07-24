import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  modalThreats2OpportunitiesSelector,
  threats2OpportunitiesDataSelector,
} from "../../../redux/customerData/selectors";

const Threats2Opportunities: React.FC = () => {
  const threatsData = useSelector(threats2OpportunitiesDataSelector);
  const modalSelector = useSelector(modalThreats2OpportunitiesSelector);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [modalSelector]);

  return (
    <>
      {threatsData?.threats2Opportunities_0_description && (
        <p style={{ whiteSpace: "pre-wrap" }}>
          {threatsData?.threats2Opportunities_0_description}
        </p>
      )}
      {threatsData?.threats2Opportunities_1_description && (
        <p style={{ whiteSpace: "pre-wrap" }}>
          {threatsData?.threats2Opportunities_1_description}
        </p>
      )}
      {threatsData?.threats2Opportunities_2_description && (
        <p style={{ whiteSpace: "pre-wrap" }}>
          2{threatsData?.threats2Opportunities_2_description}
        </p>
      )}
      {threatsData?.threats2Opportunities_3_description && (
        <p style={{ whiteSpace: "pre-wrap" }}>
          3{threatsData?.threats2Opportunities_3_description}
        </p>
      )}
      {threatsData?.threats2Opportunities_4_description && (
        <p style={{ whiteSpace: "pre-wrap" }}>
          4{threatsData?.threats2Opportunities_4_description}
        </p>
      )}
    </>
  );
};

export default Threats2Opportunities;
