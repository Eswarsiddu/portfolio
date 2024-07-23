import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  const navRef = useRef(null);
  const footerRef = useRef(null);
  const [navBarHeight, setNavBarHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const mainMinHeight = `calc(100vh - ${navBarHeight + footerHeight}px)`;
  return (
    <>
      <NavBar
        navRef={navRef}
        navBarHeight={navBarHeight}
        setNavBarHeight={setNavBarHeight}
      />
      {/* <Outlet /> */}
      <main
        style={{
          minHeight: mainMinHeight,
        }}
      >
        {/* <Outlet /> */}
        <Outlet context={{ navBarHeight }} />
      </main>
      <Footer
        footerRef={footerRef}
        footerHeight={footerHeight}
        setFooterHeight={setFooterHeight}
      />
    </>
  );
};

export default PageLayout;
