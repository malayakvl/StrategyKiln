import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { submitFormAction } from "../../redux/customerData";

const ButtonDownload: React.FC = () => {
  const dispatch = useDispatch();
  const nodeDropdown = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const setDropdownData = (opt: string) => {
    setOpen(false);
  };

  return (
    <div className="dropdown position-relative">
      <div ref={nodeDropdown} style={{ display: "inline" }}>
        <button
          className="btn red-button btn-dropdown"
          onClick={() => setOpen(!open)}
        >
          <span>Download as</span>
        </button>
        {open && (
          <ul className="dropdown-menu">
            <li>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <span
                className="dropdown-item"
                onClick={() => {
                  setDropdownData("pdf");
                  dispatch(submitFormAction("pdf"));
                }}
              >
                PDF
              </span>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <span
                className="dropdown-item"
                onClick={() => {
                  setDropdownData("pdf");
                  dispatch(submitFormAction("ppt"));
                }}
              >
                PPTX
              </span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ButtonDownload;
