import { useRoutes } from "react-router-dom";

// routes
import routes from "./router";
import pageRoutes from "./pageRoutes";

// ===========================|| ROUTING RENDER ||=========================== //

export default function ThemeRoutes() {
  return useRoutes([pageRoutes, routes]);
}
