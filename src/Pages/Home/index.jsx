import { useEffect } from "react";
import HeroSection from "./HeroSectionHome";
import { useOutletContext } from "react-router-dom";
// import Capabilities from "./Capabilities";
import GetInTouch from "./GetInTouch";
import Projects from "./Projects";
import Experience from "./Experience";
import AboutMe from "./AboutMe";
import Services from "./Services";

function Home() {
  const { navBarHeight } = useOutletContext();
  // console.log("name from nav", name, NavRef.current.offsetHeight);
  // const navBarHeight = NavRef.current?.offsetHeight;
  useEffect(() => {
    document.title = "Siddu Eswar | Portfolio";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection NavBarHeight={navBarHeight ?? 0} />
      <Services NavBarHeight={navBarHeight ?? 0} />
      {/* <Experience NavBarHeight={navBarHeight ?? 0} /> */}
      <AboutMe NavBarHeight={navBarHeight ?? 0} />
      <Projects NavBarHeight={navBarHeight ?? 0} />
      {/* <GetInTouch /> */}
    </>
  );
}

export default Home;
