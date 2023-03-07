import React from "react";
import { useSelector } from "react-redux";
import { colorDataSelector } from "../../../redux/customerData/selectors";

const ArrowDown: React.FC = () => {
  const colorDataPalette = useSelector(colorDataSelector);

  return (
    <div className="arrow-down">
      <svg
        width="16"
        height="41"
        viewBox="0 0 16 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.70711 40.7071C8.31658 41.0976 7.68342 41.0976 7.29289 40.7071L0.928932
                            34.3431C0.538408 33.9526 0.538408 33.3195 0.928932 32.9289C1.31946
                            32.5384 1.95262 32.5384 2.34315 32.9289L8 38.5858L13.6569
                            32.9289C14.0474 32.5384 14.6805 32.5384 15.0711
                            32.9289C15.4616 33.3195 15.4616 33.9526
                            15.0711 34.3431L8.70711 40.7071ZM9 0V40H7V0H9Z"
          fill={`${colorDataPalette.threats2opportunities_color}`}
        />
      </svg>
    </div>
  );
};

export default ArrowDown;
