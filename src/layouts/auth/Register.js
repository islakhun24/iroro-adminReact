import React from "react";
// import {} from "assets/images/svg";
import { Link } from "react-router-dom";
import { Logo, Input } from "components";
import { Button } from "antd";
const Register = (props) => {
  return (
    <div className="flex items-center justify-center w-screen h-full bg-gray-100">
      <div className="flex flex-col p-4 my-16 overflow-y-auto bg-white rounded-lg">
        <div className="mt-4 text-center">
          <Logo width="70px" height="70px" />
        </div>
        <div className="flex flex-col m-12 bg-white">
          <div className="flex flex-col">
            <label className="mb-1 font-sans font-medium">
              ID NUMBER<small className="text-blue-500">*</small>
            </label>
            <Input placeholder="Enter Your ID" />
          </div>
          <div className="flex flex-col mt-6">
            <label className="mb-1 font-sans font-medium">NAME</label>
            <Input placeholder="Enter name" />
          </div>
          <div className="flex flex-col mt-6">
            <label className="mb-1 font-sans font-medium">E-MAIL</label>
            <Input placeholder="Enter e-mail" />
          </div>
          <div className="flex flex-col mt-6">
            <label className="mb-1 font-sans font-medium">USERNAME</label>
            <Input placeholder="Enter username" />
          </div>
          <div className="flex flex-col mt-6">
            <label className="mb-1 font-sans font-medium">
              PASSWORD<small className="text-blue-500">*</small>
            </label>
            <Input placeholder="Enter password" />
          </div>
          <div className="flex flex-col mt-6">
            <label className="mb-1 font-sans font-medium">
              REPEAT PASSWORD<small className="text-blue-500">*</small>
            </label>
            <Input placeholder="Re-enter password" />
          </div>
          <div className="flex flex-col mt-6">
            <label className="mb-1 font-sans font-medium">
              DEPARTEMENT*<small className="text-blue-500">*</small>
            </label>
            <Input placeholder="Choose Department" />
          </div>
          <div className="flex flex-col mt-2">
            <Input placeholder="Enter new department" />
          </div>
          <Button
            style={{
              height: "40px",
            }}
            className="mt-8 font-sans font-bold text-white bg-blue-500 rounded-lg hover:text-white hover:bg-blue-600"
          >
            CREATE ACCOUNT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
