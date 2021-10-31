import { defaults } from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "components";
const Modal = (props) => {
  const { show } = props;

  React.useEffect(() => {
    const modal_overlay = document.querySelector("#modal_overlay");
    const modal = document.querySelector("#modal");
    const modalCl = modal.classList;
    const overlayCl = modal_overlay;
    if (show) {
      overlayCl.classList.remove("hidden");
      setTimeout(() => {
        modalCl.remove("opacity-0");
        modalCl.remove("-translate-y-full");
        modalCl.remove("scale-150");
      }, 100);
    } else {
      modalCl.add("-translate-y-full");
      setTimeout(() => {
        modalCl.add("opacity-0");
        modalCl.add("scale-150");
      }, 100);
      setTimeout(() => overlayCl.classList.add("hidden"), 300);
    }
  });

  return (
    <div
      id="modal_overlay"
      className="absolute inset-0 flex items-center justify-center hidden w-full h-screen pt-10 bg-black bg-opacity-30 md:items-center md:pt-0"
    >
      <div
        id="modal"
        className="flex flex-col min-h-0 p-4 transition-opacity transition-transform duration-300 transform scale-150 -translate-y-full bg-white rounded-lg shadow-lg xl:w-1/3 2xl:w-1/3 pacity-0 md:w-1/2 "
      >
        <div className="flex flex-col items-center px-6 m-4 text-center">
          <Logo width="50px" height="50px" />
          <label className="mt-6 font-sans text-base">
            Email has been sent.
          </label>
          <label className="font-sans text-base">
            Please check your inbox to reset a password.
          </label>
          <Link className="mt-4 font-medium text-blue-500" to="/auth/login">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
