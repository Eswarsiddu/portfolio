import { Routes, Route, useLocation } from "react-router-dom";
import { GetPageTitle, ROUTE_NAMES } from "./Utils/RouteNames";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
function App() {
  const location = useLocation();
  document.title = GetPageTitle(location.pathname) + " | My Portfolio";
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path={ROUTE_NAMES.HOME} element={<Home />} />
        <Route path={ROUTE_NAMES.ABOUT} element={<div>About me</div>} />
      </Route>
    </Routes>
  );
}

export default App;
