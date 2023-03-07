import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputColor } from "../_form";
import { showColorsPopupSelector } from "../../redux/layouts/selectors";
import { showColorPopupAction } from "../../redux/layouts";
import { setColorAction } from "../../redux/customerData";

export default function ModalColor() {
  const dispatch = useDispatch();
  const showModal = useSelector(showColorsPopupSelector);

  return (
    <>
      <div
        className={`modal ${
          showModal ? "show-modal" : ""
        } fixed top-20 left-0  w-full h-full outline-none overflow-x-hidden overflow-y-auto`}
        id="selectColorModal"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 className="modal-title">Change Color Palette</h5>
              <button
                type="button"
                onClick={() => dispatch(showColorPopupAction(false))}
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body relative px-10 pt-8">
              <div className="row">
                <div className="col-lg-6">
                  <InputColor
                    defaultColor={`#ED5829`}
                    style={`mb-4`}
                    icon={null}
                    name={"strengths_color"}
                    label={"Strengths"}
                    placeholder={null}
                    tips={null}
                  />
                </div>
                <div className="col-lg-6">
                  <InputColor
                    defaultColor={`#FCAB32`}
                    style={`mb-4`}
                    icon={null}
                    name={"threats_color"}
                    label={"Threats"}
                    placeholder={null}
                    tips={null}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <InputColor
                    defaultColor={`#ED5829`}
                    style={`mb-4`}
                    icon={null}
                    name={"weaknesses_color"}
                    label={"Weaknesses"}
                    placeholder={null}
                    tips={null}
                  />
                </div>
                <div className="col-lg-6">
                  <InputColor
                    defaultColor={`#FCAB32`}
                    style={`mb-4`}
                    icon={null}
                    name={"threats2opportunities_color"}
                    label={"Threats to Opportunities"}
                    placeholder={null}
                    tips={null}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <InputColor
                    defaultColor={`#ED5829`}
                    style={`mb-4`}
                    icon={null}
                    name={"opportunities_color"}
                    label={"Opportunities"}
                    placeholder={null}
                    tips={null}
                  />
                </div>
                <div className="col-lg-6">
                  <InputColor
                    defaultColor={`#FCAB32`}
                    style={`mb-4`}
                    icon={null}
                    name={"weaknesses2strengths_color"}
                    label={"Weaknesses to Strengths"}
                    placeholder={null}
                    tips={null}
                  />
                </div>
              </div>
            </div>
            <div
              className="modal-footer flex flex-shrink-0 flex-wrap
                                        items-center justify-end py-4 px-10"
            >
              <div className="col-12 d-flex justify-content-between">
                <button
                  className="gray-medium-button"
                  onClick={() => dispatch(showColorPopupAction(false))}
                >
                  Close
                </button>
                <button
                  className="red-medium-button"
                  onClick={() => {
                    dispatch(setColorAction());
                    dispatch(showColorPopupAction(false));
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
