import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { showColorPopupAction } from "../../redux/layouts";

const ButtonColor: React.FC = () => {
  const dispatch = useDispatch();
  const node = useRef<HTMLDivElement>(null);

  return (
    <div ref={node} style={{ display: "inline" }}>
      <button
        className="btn orange-button btn-change-colors"
        onClick={() => dispatch(showColorPopupAction(true))}
      >
        Change Colors
      </button>
    </div>
  );
};

export default ButtonColor;
