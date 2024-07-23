import React, { useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBarElements, NavLogo } from "./NavBar";
import * as Tooltip from "@radix-ui/react-tooltip";
import "./footer.css";

const FooterData = [
  {
    title: "Quick Links",
    elements: NavBarElements,
  },
  {
    title: "Services",
    elements: [
      {
        name: "Web Development",
        to: "/services#web-development",
      },
      {
        name: "Mobile Development",
        to: "/services#mobile-development",
      },
      {
        name: "E-Commerce Solutions",
        to: "/services#e-commerce-solutions",
      },
    ],
    // elements: ["Web Development", "Mobile Development", "E-Commerce Solutions"],
  },
  {
    title: "Contact",
    elements: [
      {
        name: "contact@siddueswar.com",
        href: "mailto:contact@siddueswar.com",
        tooltipValue: "Click to send an email",
      },
      {
        name: "+91-95027 66882",
        href: "tel:+919502766882",
        tooltipValue: "Click to call me",
      },
      {
        name: "Contact Me",
        to: "/contact",
      },
    ],
  },
  //   {
  //     title: "Contact",
  //     elements: ["Email", "Phone"],
  //   },
];

const Footer = ({ footerRef, footerHeight, setFooterHeight }) => {
  useLayoutEffect(() => {
    setFooterHeight(footerRef.current.clientHeight);
  });
  return (
    <footer
      ref={footerRef}
      className=" background-patter bg-gradient-to-r bg-[#7932d936 from-[#00f1ff36] to-[#7932d936]"
      style={
        {
          // backgroundImage: `url(${FluidImg1})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          // "background-color": "#181818",
          // "background-image": "linear-gradient(45deg, #00f1ff, #7932d9)",
          // "background-size": "200px 200px",
          // "background-position": "center",
        }
      }
    >
      {/* <div className="flex justify-between container mx-auto px-4 md:px-6 border-b border-white border-opacity-30 py-6 mb-4">
        <p>Let's Stay connected</p>
        <div className="flex gap-4">
          <Link>Get In Touch</Link>
          <Link>View Work</Link>
        </div>
      </div> */}
      <div className=" flex justify-between flex-col gap-6 md:gap-0 md:flex-row container mx-auto px-4 md:px-6 border-b border-white border-opacity-30 py-6">
        <div>
          {/* <p>Siddu Eswar</p> */}
          <NavLogo />
        </div>
        {/* <div className="flex gap-10"> */}
        {FooterData.map((data) => (
          <MenuItems title={data.title} elements={data.elements} />
        ))}
        {/* </div> */}
      </div>
      <div className="pt-4 pb-12">
        <p className=" text-center">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

function MenuItems({ title, elements }) {
  const location = useLocation();
  return (
    <div className=" bg-blue-40">
      <p className="pb-2 opacity-50 font-bold">{title}</p>
      <ul className="flex flex-col gap-2 pe-4">
        {elements.map((element) => {
          const isActive = location.pathname == element.to;
          return (
            <li className="flex gap-1 items-center">
              {isActive ? (
                <span className="w-2 h-2 bg-[#00f1ff] bg-opacity-50 rounded-full"></span>
              ) : null}
              {isActive ? (
                <span className="text-[#00f1ff] text-opacity-50">
                  {element.name}
                </span>
              ) : element.href ? (
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      {/* <button className="text-violet11 shadow-blackA4 hover:bg-violet3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                      <PlusIcon />
                    </button> */}
                      <a
                        href={element.href}
                        className="hover:text-[#00f1ff] hover:underline"
                      >
                        {element.name}
                      </a>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        // className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                        className="bg-white text-[#7932d9] px-4 py-2 rounded"
                        sideOffset={5}
                      >
                        {element.tooltipValue}
                        <Tooltip.Arrow className="fill-white" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              ) : (
                <Link
                  className="group hover:text-[#00f1ff] flex items-center gap-1 "
                  to={element.to}
                >
                  <i class="fa-solid fa-angles-right opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                  <span className=" block -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    {element.name}
                  </span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Footer;
