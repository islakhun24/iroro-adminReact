import { lazy } from "react";
import MainLayout from "layout/MainLayout";

const Inventory = lazy(() => import("../views/warehouses/inventory/inventory"));
const Question = lazy(() => import("../views/contact-us/question/question"));
const pageRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/warehouse/inventory",
      element: <Inventory />,
    },
    {
      path: "/contact-us/question",
      element: <Question />,
    },
  ],
};

export default pageRoutes;
