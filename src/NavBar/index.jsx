import { useEffect, useLayoutEffect, useRef, useState } from "react";
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

const NavBarElements = [
  {
    name: "Home",
    to: RouteNames.HOME,
  },
  {
    name: "Services",
    to: RouteNames.SERVICES,
  },
  {
    name: "About me",
    to: RouteNames.ABOUT_ME,
  },
  {
    name: "Projects",
    to: RouteNames.PROJECTS,
  },
  {
    name: "Blogs",
    to: RouteNames.BLOGS,
  },
  {
    name: "Contact me",
    to: RouteNames.CONTACT_ME,
  },
];

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
        <nav className="flex py-2 px-2 md:px-4 items-center relative">
          <NavLogo />
          <div className="h-full flex-grow flex">
            <div className="flex-grow">
              {/* Place holder to keep items end */}
            </div>
            <ul className=" items-center py-0 hidden md:flex">
              {NavBarElements.map((element, index) => (
                <li key={index}>
                  <NavElement name={element.name} to={element.to} />
                </li>
              ))}
            </ul>
            <MenuItems NavElements={NavBarElements} />
            {/* <div className="block md:hidden">
              <MenuIcon />
            </div> */}
          </div>
        </nav>
      </header>

      <Outlet context={{ navBarHeight }} />
    </>
  );
}

function MenuItems({ NavElements }) {
  const [isOpen, setIsOpen] = useState(false);
  const [revealedElements, setRevealedElements] = useState([]);
  const [isRevealing, setIsRevealing] = useState(false);

  return (
    <div className="flex md:hidden items-center">
      <button onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon isOpen={isOpen} />
      </button>
      <ul
        className={
          // TODO: animate the menu reveal
          "absolute top-full w-full left-0 bg-gray-800 overflow-y-auto flex-col gap-4 py-4 " +
          (isOpen ? "flex" : "hidden")
        }
      >
        {NavElements.map((element, index) => (
          <li key={index} className="w-full">
            <NavElement
              name={element.name}
              to={element.to}
              parentClick={() => {
                setIsOpen(false);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function MenuIcon({ isOpen }) {
  // create animation for menu icon based on is open or not
  return (
    <div className="w-6 h-6 flex flex-col gap-1 justify-center">
      <div className="w-full rounded h-0.5 xs:h-1 bg-white"></div>
      <div className="w-full rounded h-0.5 xs:h-1 bg-white"></div>
      <div className="w-full rounded h-0.5 xs:h-1 bg-white"></div>
    </div>
  );
}

function NavLogo() {
  const location = useLocation();
  const isHome = location.pathname === RouteNames.HOME;
  const navigate = useNavigate();
  return (
    <div
      className={
        "flex gap-4 items-center " + (isHome ? "" : " hover:cursor-pointer")
      }
      onClick={() => {
        if (!isHome) {
          navigate(RouteNames.HOME);
        }
      }}
    >
      <img
        src={LOGO}
        alt=""
        className={" w-9 h-9 md:w-10 lg:w-12 aspect-[1/1] "}
      />
      <div className="flex flex-row md:flex-col font-Playwrite text-white font-medium xs:font-bold">
        <span>Siddu</span>
        <span className="ps-2">Eswar</span>
      </div>
    </div>
  );
}

function NavElement({ name, to, parentClick = () => {} }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  if (isActive) {
    return (
      <span className="py-0.5 px-3 font-semibold hover:cursor-default w-ful text-[#8af9ff] block text-center">
        {name}
      </span>
    );
  }
  return (
    <Link
      className=" py-0.5 px-3 font-semibold border-[#00f1ff text-white w-ful block text-center after:border-[#00f1ff] after:block after:border-b after:transition-transform after duration-300 after:ease-in-out after:scale-0 hover:after:scale-100"
      to={to}
      onClick={parentClick}
    >
      {name}
    </Link>
  );
}

export default NavBar;
