import { Outlet, Link } from "react-router-dom";
import { ROUTE_NAMES } from "../Utils/RouteNames";
function NavBar() {
  return (
    <header>
      <nav>
        <menu>
          <li>
            <Link to={ROUTE_NAMES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTE_NAMES.ABOUT}>About Us</Link>
          </li>
          <li>Contact Me</li>
        </menu>
      </nav>
      <Outlet />
    </header>
  );
}

export default NavBar;
