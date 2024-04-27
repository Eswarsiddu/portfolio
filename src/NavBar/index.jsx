import { useLayoutEffect, useRef, useState } from "react";
import {
  Link,
  // Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { RouteNames } from "../Routes";
import LOGO from "/icons/android-chrome-192x192.png";
// import LOGO from "/icons/favicon-16x192.png"

function NavBar() {
  const navRef = useRef(null);
  const [navBarHeight, setNavBarHeight] = useState(0);
  useLayoutEffect(() => {
    setNavBarHeight(navRef.current.clientHeight);
  });
  // forwardRef();
  return (
    <>
      {/* 3d426b */}
      <header className=" sticky top-0 w-full z-20 bg-[#212121]" ref={navRef}>
        <nav className="flex py-4 px-2 md:px-4">
          <NavLogo />
          {/* <h1
            className={
              "my-0 py-0 mr-auto font-bold text-5xl NavBrandFont text-red-900"
            }
          >
            ESWAR
          </h1> */}
          <ul className="flex py-0 text-white">
            <li className="py-0">
              <NavElement name="Home" to={RouteNames.HOME} />
            </li>
            {/* <li>
              <NavElement name="Blogs" to={RouteNames.BLOGS} />
            </li> */}
            <li>
              <NavElement name="Projects" to={RouteNames.PROJECTS} />
            </li>
            <li>
              <NavElement name="Contact me" to={RouteNames.CONTACT_ME} />
            </li>
          </ul>
        </nav>
      </header>

      <Outlet context={{ navBarHeight }} />

      {/* <OutletFun ref={navRef} /> */}
      {/* <Outlet context={{ NavRef: navRef }} /> */}
    </>
  );
}

// const OutletFun = forwardRef((props, ref) => (
//   <Outlet {...props} context={{ NavRef: ref }} />
// ));

function NavLogo() {
  const location = useLocation();
  const isHome = location.pathname === RouteNames.HOME;
  const navigate = useNavigate();
  return (
    <h1
      className={
        "my-0 py-0 mr-auto font-bold text-5xl NavBrandFont text-white flex gap-2" +
        (isHome ? "" : " hover:cursor-pointer")
      }
      onClick={() => {
        if (!isHome) {
          navigate(RouteNames.HOME);
        }
      }}
    >
      <img src={LOGO} alt="" className=" w-14 aspect-square" />
      {/* ESWAR */}
    </h1>
  );
}

function NavElement({ name, to }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  if (isActive) {
    return (
      <span className="py-0.5 px-3 font-semibold text-red-700 hover:cursor-default">
        {name}
      </span>
    );
  }
  return (
    <Link
      className=" py-0.5 px-3 font-semibold hover:border-t-2 hover:border-b-2 hover:border-red-300"
      to={to}
    >
      {name}
    </Link>
  );
}

export default NavBar;
