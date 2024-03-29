import React from "react";
import { showModalThreats2OpportunitiesAction } from "../../../redux/customerData";
import { useDispatch, useSelector } from "react-redux";
import { modalThreats2OpportunitiesSelector } from "../../../redux/customerData/selectors";
import Step6 from "../threats2Opportunities";

export default function ThreatsOpportunitiesModal() {
  const dispatch = useDispatch();
  const showModal = useSelector(modalThreats2OpportunitiesSelector);

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
              <button
                type="button"
                onClick={() =>
                  dispatch(showModalThreats2OpportunitiesAction(false))
                }
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body relative px-10 pt-8">
              <Step6 />
            </div>
            <div className="flex items-center p-6 space-x-2 rounded-b"></div>
          </div>
        </div>
      </div>
    </>
  );
}
