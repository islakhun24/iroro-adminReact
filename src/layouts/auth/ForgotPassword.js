import React from "react";
// import {} from "assets/images/svg";
import { Link } from "react-router-dom";
import { Logo, Input, ForgotPasswordModalSuccess } from "components";
import { Button } from "antd";
const ForgotPassword = (props) => {
  const [show, setShow] = React.useState(false);
  const handleClick = (e) => {
    console.log("====================================");
    console.log(show);
    console.log("====================================");
    setShow(!show);
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
      <div className="flex flex-col p-4 bg-white rounded-lg">
        <div className="mx-12 my-4 text-left">
          <label className="text-2xl font-bold text-blue-500">
            FORGOT YOUR PASSWORD?
          </label>
        </div>
        <div className="flex flex-col mx-12 bg-white">
          <div className="flex flex-col">
            <label className="font-sans font-medium">
              Please enter your registered e-mail
            </label>
            <Input placeholder="Enter your e-mail" />
          </div>

          <Button
            style={{
              height: "40px",
            }}
            onClick={() => {
              handleClick(true);
            }}
            className="mt-8 font-sans font-bold text-white bg-blue-500 rounded-lg hover:text-white hover:bg-blue-600"
          >
            SEND
          </Button>
        </div>
      </div>
      <ForgotPasswordModalSuccess show={show} />
    </div>
  );
};

export default ForgotPassword;
