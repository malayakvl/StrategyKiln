import React from "react";
import { useSelector } from "react-redux";
import { colorDataSelector } from "../../../redux/customerData/selectors";

const BorderRight: React.FC = () => {
  const colorDataPalette = useSelector(colorDataSelector);

  return (
    <>
      {/*Borders left block*/}
      <div
        className="bordered-top-right"
        style={{ borderColor: (colorDataPalette as any).threats_color }}
      ></div>
      <div
        className="bordered-top-right-side"
        style={{ borderColor: (colorDataPalette as any).threats_color }}
      ></div>

      <div
        className="bordered-bottom-right"
        style={{ borderColor: (colorDataPalette as any).opportunities_color }}
      ></div>
      <div
        className="bordered-bottom-right-side"
        style={{ borderColor: (colorDataPalette as any).opportunities_color }}
      ></div>
    </>
  );
};

export default BorderRight;
