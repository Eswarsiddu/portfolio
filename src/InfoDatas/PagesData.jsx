import { RouteNames } from "../Routes";

export const HomePageData = {
  name: "Home",
  to: RouteNames.HOME,
};

export const ServicesPageData = {
  name: "Services",
  to: RouteNames.SERVICES,
  subPages: [
    {
      name: "Web Development",
      to: RouteNames.WEB_DEVELOPMENT,
    },
    {
      name: "Mobile Development",
      to: RouteNames.MOBILE_DEVELOPMENT,
    },
    {
      name: "E-Commerce Solutions",
      to: RouteNames.E_COMMERCE_SOLUTIONS,
    },
  ],
};
