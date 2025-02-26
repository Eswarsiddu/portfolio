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
  // const mainMinHeight = `calc(100vh - ${footerHeight}px)`;
  const [isScrooled, setIsScrolled] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavBar
        navRef={navRef}
        navBarHeight={navBarHeight}
        setNavBarHeight={setNavBarHeight}
        isScrooled={isScrooled}
      />
      {/* <Outlet /> */}
      <main
        // className=""
        style={
          {
            // paddingTop: navBarHeight,
            // minHeight: mainMinHeight,
          }
        }
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
