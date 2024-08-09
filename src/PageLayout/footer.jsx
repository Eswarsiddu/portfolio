import React, { useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBarElements, NavLogo } from "./NavBar";
import * as Tooltip from "@radix-ui/react-tooltip";
import "./footer.css";
import { ServicesData } from "../InfoDatas/ServicesData";
import { RouteNames } from "../Routes";

const FooterData = [
  {
    title: "Quick Links",
    elements: NavBarElements,
  },
  {
    title: "Services",
    elements: ServicesData.map((service) => {
      return {
        name: service.title,
        to: RouteNames.SERVICES,
        subService: true,
      };
    }),
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
    ],
  },
];

const Footer = ({ footerRef, footerHeight, setFooterHeight }) => {
  useLayoutEffect(() => {
    setFooterHeight(footerRef.current.clientHeight);
  });
  return (
    <footer
      ref={footerRef}
      className=" background-patter bg-gradient-to-r bg-[#7932d936 from-[#00f1ff36] to-[#7932d936]"
    >
      <div className=" flex justify-between flex-col gap-6 md:gap-0 md:flex-row container mx-auto px-4 md:px-6 border-b border-white border-opacity-30 py-6">
        <div>
          <NavLogo />
        </div>
        {FooterData.map((data) => (
          <MenuItems title={data.title} elements={data.elements} />
        ))}
      </div>
      <div className="py-4">
        <p className=" text-center">
          Copyright © {new Date().getFullYear()} All rights reserved
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
          let isActive = location.pathname == element.to && !element.subService;
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
                      <a
                        href={element.href}
                        className="hover:text-[#00f1ff] hover:underline"
                      >
                        {element.name}
                      </a>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
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
                  state={{ title: element.name }}
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
