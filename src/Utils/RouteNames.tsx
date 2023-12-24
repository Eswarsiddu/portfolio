export const ROUTE_NAMES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT_US: "/contact-us",
};

export function GetPageTitle(path: string) {
  switch (path) {
    case ROUTE_NAMES.HOME:
      return "Home";
    case ROUTE_NAMES.ABOUT:
      return "About me";
    case ROUTE_NAMES.CONTACT_US:
      return "Contact me";
    default:
      return "404";
  }
}

export function GetRouteName(path: string) {
  switch (path) {
    case ROUTE_NAMES.HOME:
      return "Home";
    case ROUTE_NAMES.ABOUT:
      return "About me";
    case ROUTE_NAMES.CONTACT_US:
      return "Contact me";
    default:
      return "404 Page";
  }
}
