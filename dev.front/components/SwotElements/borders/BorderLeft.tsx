import React from "react";
import { useSelector } from "react-redux";
import { colorDataSelector } from "../../../redux/customerData/selectors";

const BorderLeft: React.FC = () => {
  const colorDataPalette = useSelector(colorDataSelector);

  return (
    <>
      {/*Borders left block*/}
      <div
        className="bordered-top-left"
        style={{ borderColor: (colorDataPalette as any).strengths_color }}
      ></div>
      <div
        className="bordered-top-left-side"
        style={{ borderColor: (colorDataPalette as any).strengths_color }}
      ></div>

      <div
        className="bordered-bottom-left"
        style={{ borderColor: (colorDataPalette as any).weaknesses_color }}
      ></div>
      <div
        className="bordered-bottom-left-side"
        style={{ borderColor: (colorDataPalette as any).weaknesses_color }}
      ></div>
    </>
  );
};

export default BorderLeft;
