import { lazy } from "react";

import MinimalLayout from "layout/MinimalLayout";
const Login = lazy(() => import("../layouts/auth/Login"));
const Register = lazy(() => import("../layouts/auth/Register"));
const ForgotPassword = lazy(() => import("../layouts/auth/ForgotPassword"));
const router = {
  path: "/auth",
  element: <MinimalLayout />,
  children: [
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ],
};

export default router;
