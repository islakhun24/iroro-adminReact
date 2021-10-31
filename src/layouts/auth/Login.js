import React from "react";
// import {} from "assets/images/svg";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Logo, Input } from "components";
import { Button } from "antd";
const Login = (props) => {
  // const history = useHistory();
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
      <div className="flex flex-col p-4 bg-white rounded-lg">
        <div className="mt-4 text-center">
          <Logo width="70px" height="70px" />
        </div>
        <div className="flex flex-col m-12 bg-white">
          <div className="flex flex-col">
            <label className="font-sans font-medium">ID NUMBER</label>
            <Input placeholder="Enter Your ID" />
          </div>
          <div className="flex flex-col mt-6">
            <label className="font-sans font-medium">PASSWORD</label>
            <Input placeholder="Enter Your Password" />
          </div>
          <Button
            onClick={() => {
              //
            }}
            style={{
              height: "40px",
            }}
            className="mt-8 font-sans font-bold text-white bg-blue-500 rounded-lg hover:text-white hover:bg-blue-600"
          >
            SIGN IN
          </Button>
          <label className="mt-6 text-base text-center">
            Didn’t have an account?{" "}
            <Link className="font-medium text-blue-500" to="/auth/register">
              Sign up
            </Link>{" "}
            now!
          </label>
          <label className="mt-2 text-base text-center">
            <Link
              className="font-medium text-blue-500"
              to="/auth/forgot-password"
            >
              Forgot Password?
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
