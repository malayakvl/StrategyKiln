import React, { useEffect } from "react";
import "./../../styles/global-backend.scss";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import {
  isDataLoadingSelector,
  toastsSelector,
} from "../../redux/layouts/selectors";
import { fetchUserAction, setUserAction } from "../../redux/user";
import { userSelector } from "../../redux/user/selectors";
import Sidebar from "../Navbars/Sidebar";
import AdminNavbar from "../Navbars/TopNavbar";
import HeaderStats from "../Header/HeaderStats";
import FooterAdmin from "../Footers/FooterAdmin";
import { ToastContainer, toast } from "react-toastify";
import { deleteToastAction } from "../../redux/layouts";
import { ConfirmationModal } from "../_common";
import { showPreviewPopupSelector } from "../../redux/userRequests/selectors";

export default function BackendLayout({ children }: { children: any }) {
  const showLoader = useSelector(isDataLoadingSelector);
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const toastSelector = useSelector(toastsSelector);
  const modalSelector = useSelector(showPreviewPopupSelector);

  useEffect(
    function () {
      if (session?.user?.email && !window.localStorage.getItem("user")) {
        dispatch(setUserAction(session.user));
      } else {
        const localUser = JSON.parse(
          window.localStorage.getItem("user") || "{}"
        );
        if (session?.user?.email !== localUser.email) {
          window.localStorage.setItem("user", JSON.stringify({}));
          dispatch(fetchUserAction(session?.user?.email));
        } else {
          dispatch(
            setUserAction(
              JSON.parse(window.localStorage.getItem("user") || "{}")
            )
          );
        }
      }
    },
    [dispatch, session?.user, session?.user?.email]
  );

  useEffect(
    function () {
      if (user && Object.keys(user).length) {
        const storeUser = window.localStorage.getItem("user")
          ? JSON.parse(window.localStorage.getItem("user") || "")
          : {};
        if (storeUser.id !== user.id || storeUser.status !== user.status) {
          window.localStorage.setItem("user", JSON.stringify(user));
        }
      } else {
        dispatch(setUserAction(session?.user));
      }
    },
    [dispatch, user, session?.user]
  );

  useEffect(() => {
    if (toastSelector.length > 0) {
      // @ts-ignore
      const message: string =
        toastSelector[0].message || "Data has been updated";
      if (toastSelector[0].type === "success") {
        // @ts-ignore
        toast.success(message);
        setTimeout(() => dispatch(deleteToastAction()), 9000);
      }
    }
  }, [toastSelector, toastSelector.length, session?.user, dispatch]);

  return (
    <>
      {showLoader && (
        <div className="loader">
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      {session?.user?.email ? (
        <>
          <Sidebar />
          <div className="relative md:ml-64 bg-blueGray-100">
            <ToastContainer />

            <AdminNavbar />
            {/* Header */}
            <HeaderStats session={session} />
            <div className="px-4 md:px-10 mx-auto w-full -m-24">
              {children}
              <FooterAdmin />
            </div>
          </div>
          <ConfirmationModal />
        </>
      ) : (
        <div>{children}</div>
      )}
      <div
        className="modal-backdrop"
        style={{
          display: modalSelector ? "block" : "none",
        }}
      />
    </>
  );
}
