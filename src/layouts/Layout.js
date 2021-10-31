import React, { cloneElement, useState, lazy, useRef, useEffect } from "react";
import { Layout, ConfigProvider } from "antd";
// import handleLogout from 'utils/logout'
import idID from "antd/es/locale/id_ID";
import enUS from "antd/es/locale/en_US";
// import ls from 'utils/secureLocalStorage'
// import encryption from 'utils/encryption'
import { includes } from "lodash";
import { COLORS } from "constants/globalVariables";

// const Header = lazy(() => import('./header/Header'))

const { Content } = Layout;

const langs = {
  id: idID,
  en: enUS,
};

const LayoutContainer = (props) => {
  // const pathname = window.location.pathname

  const { history, children } = props;

  const [provider, setProvider] = useState(idID);
  const headerRef = useRef(null);

  const handleRedirect = (path) => () => {
    history.push(path);
  };

  const handleChangeProvider = (lang) => setProvider(langs[lang]);

  // handle scroll event
  useEffect(() => {
    let left = document.getElementById("header");
    let stop = 550;

    window.onscroll = function (e) {
      let scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;

      if (scrollTop > stop) {
        left.className = "ant-header-container-sticky";
      } else if (window.location.pathname !== "/") {
        //   left.className = "ant-header-container-sticky";
      } else {
        left.className = "ant-header-container";
      }
    };
  }, []);

  return (
    <Layout
      className="layout-container"
      style={{
        backgroundColor:
          includes(
            ["/register", "/assist-request", "/filter-requestor"],
            window.location.pathname
          ) && COLORS.basegrey,
      }}
    >
      <Content
        className="site-layout"
        style={{
          backgroundColor:
            includes(["/profile"], window.location.pathname) && "#FBFBFB",
        }}
      >
        <div>
          <ConfigProvider locale={provider}>
            {cloneElement(children)}
          </ConfigProvider>
        </div>
      </Content>
    </Layout>
  );
};

export default LayoutContainer;
