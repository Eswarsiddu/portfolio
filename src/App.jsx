import { Route, Routes } from "react-router-dom";
import { RouteNames } from "./Routes";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Blogs from "./Pages/Blogs";
import ContactMe from "./Pages/ContactMe";
import SpearSecurityForce from "./Pages/Projects/SpearSecurityForce";
import ColourPalletChecker from "./Pages/ColourPalletChecker";
import PageLayout from "./PageLayout";
import AboutMe from "./Pages/AboutMe";
import Services from "./Pages/Services";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path={RouteNames.HOME} element={<Home />} />
          <Route path={RouteNames.PROJECTS} element={<Projects />} />
          <Route path={RouteNames.ABOUT_ME} element={<AboutMe />} />
          <Route path={RouteNames.BLOGS} element={<Blogs />} />
          <Route path={RouteNames.SERVICES} element={<Services />} />
          <Route path={RouteNames.CONTACT_ME} element={<ContactMe />} />
          <Route
            path={RouteNames.SPEAR_SECURITY_FORCE}
            element={<SpearSecurityForce />}
          />
        </Route>
        <Route path="/pallet" element={<ColourPalletChecker />} />
      </Routes>
    </>
  );
}

export default App;
