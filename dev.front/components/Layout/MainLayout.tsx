import React, { useEffect } from "react";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { showLoaderAction } from "../../redux/layouts/actions";
import {
  reloadSelector,
  showColorsPopupSelector,
} from "../../redux/layouts/selectors";
import {
  modalStrengthSelector,
  modalWeaknessesSelector,
  modalOpportunitiesSelector,
  modalThreatsSelector,
  modalThreats2OpportunitiesSelector,
  modalWeaknesses2StrengthsSelector,
} from "../../redux/customerData/selectors";
import { isDataLoadingSelector } from "../../redux/layouts/selectors";
import { setupStorageData } from "../../lib/functions";
import { changeReloadAction } from "../../redux/layouts";

export default function MainLayout({ children }: { children: any }) {
  const dispatch = useDispatch();
  const backdropSelector = useSelector(showColorsPopupSelector);
  const editStrengthModalSelector = useSelector(modalStrengthSelector);
  const editWeaknessesModalSelector = useSelector(modalWeaknessesSelector);
  const editThreatsModalSelector = useSelector(modalThreatsSelector);
  const editOpportunitiesModalSelector = useSelector(
    modalOpportunitiesSelector
  );
  const editWeaknesses2StrengthsModalSelector = useSelector(
    modalWeaknesses2StrengthsSelector
  );
  const editThreats2OpportunitiesModalSelector = useSelector(
    modalThreats2OpportunitiesSelector
  );
  const showLoader = useSelector(isDataLoadingSelector);
  const reloadState = useSelector(reloadSelector);

  useEffect(() => {
    if (reloadState) {
      setupStorageData(dispatch);
    }
    dispatch(changeReloadAction(false));
    dispatch(showLoaderAction);
  }, [reloadState, dispatch]);

  // useEffect(() => {
  //     if (reloadState) {
  //         setupStorageData(dispatch);
  //     }
  //     dispatch(changeReloadAction(false));
  // }, [reloadState, dispatch]);

  return (
    <>
      {showLoader && (
        <div className="loader">
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      <Header />
      <main>{children}</main>
      <div
        className="modal-backdrop"
        style={{
          display:
            backdropSelector ||
            editStrengthModalSelector ||
            editWeaknessesModalSelector ||
            editThreatsModalSelector ||
            editOpportunitiesModalSelector ||
            editWeaknesses2StrengthsModalSelector ||
            editThreats2OpportunitiesModalSelector
              ? "block"
              : "none",
        }}
      />
    </>
  );
}
