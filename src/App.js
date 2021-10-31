import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Button, Layout, Result } from "antd";
import { Loading } from "components";
import Routes from "./routes";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <Routes />
      </Layout>
    </Suspense>
  );
};

export default App;
