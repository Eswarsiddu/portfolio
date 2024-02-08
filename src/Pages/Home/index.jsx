import { useEffect } from "react";
import HeroSection from "./HeroSectionHome";
import { useOutletContext } from "react-router-dom";
import Capabilities from "./Capabilities";
import GetInTouch from "./GetInTouch";

function Home() {
  const { navBarHeight } = useOutletContext();
  // console.log("name from nav", name, NavRef.current.offsetHeight);
  // const navBarHeight = NavRef.current?.offsetHeight;
  useEffect(() => {
    document.title = "Siddu Eswar | Portfolio";
  }, []);
  return (
    <>
      <HeroSection NavBarHeight={navBarHeight ?? 0} />

      <GetInTouch />
    </>
  );
}

export default Home;
