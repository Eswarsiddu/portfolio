import { useEffect } from "react";
import HeroSection from "./HeroSectionHome";
import { useOutletContext } from "react-router-dom";
// import Capabilities from "./Capabilities";
// import GetInTouch from "./GetInTouch";
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
  }, []);
  return (
    <>
      <HeroSection NavBarHeight={navBarHeight ?? 0} />
      {/* <AboutMe NavBarHeight={navBarHeight ?? 0} /> */}
      <Services NavBarHeight={navBarHeight ?? 0} />
      {/* <Experience NavBarHeight={navBarHeight ?? 0} /> */}
      <Projects NavBarHeight={navBarHeight ?? 0} />

      {/* { */}

      {/* <div className="my-52 flex gap-16 mx-24">
        <div className=" flex flex-col">
          <div className=" w-48 h-10 flex justify-center items-center bg-[#fdf6fb] text-black">
            <span>#fdf6fb</span>
          </div>
          <div className=" w-48 h-10 flex justify-center items-center bg-[#fbecf8] text-black">
            <span>#fbecf8</span>
          </div>
          <div className=" w-48 h-10 flex justify-center items-center bg-[#f7d7f1] text-black">
            <span>#f7d7f1</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#efb8e2]">
            <span>#efb8e2</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#e58dd0]">
            <span>#e58dd0</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#d461b7]">
            <span>#d461b7</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#b34094]">
            <span>#b34094</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#98337b]">
            <span>#98337b</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#7c2c64]">
            <span>#7c2c64</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#662952]">
            <span>#662952</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#421032]">
            <span>#421032</span>
          </div>
        </div>
        <div className=" flex flex-col">
          <div className=" w-48 h-10 text-black flex justify-center items-center bg-[#edfefd]">
            <span>#edfefd</span>
          </div>
          <div className=" w-48 h-10 text-black flex justify-center items-center bg-[#d2fbfa]">
            <span>#d2fbfa</span>
          </div>
          <div className=" w-48 h-10 text-black flex justify-center items-center bg-[#abf6f4]">
            <span>#abf6f4</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#72eeec]">
            <span>#72eeec</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#31dfdf]">
            <span>#31dfdf</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#15c2c5]">
            <span>#15c2c5</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#16a8b2]">
            <span>#16a8b2</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#187d86]">
            <span>#187d86</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#1c656e]">
            <span>#1c656e</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#1c535d]">
            <span>#1c535d</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#0c3840]">
            <span>#0c3840</span>
          </div>
        </div>

        <div className=" flex flex-col">
          <div className=" w-48 h-10 text-black flex justify-center items-center bg-[#fff8eb]">
            <span>#fff8eb</span>
          </div>
          <div className=" w-48 h-10 text-black flex justify-center items-center bg-[#fde9c8]">
            <span>#fde9c8</span>
          </div>
          <div className=" w-48 h-10 text-black flex justify-center items-center bg-[#fbd38c]">
            <span>#fbd38c</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#f9b650]">
            <span>#f9b650</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#f79c28]">
            <span>#f79c28</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#f1790f]">
            <span>#f1790f</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#d5560a]">
            <span>#d5560a</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#b1390c]">
            <span>#b1390c</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#902c10]">
            <span>#902c10</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#762611]">
            <span>#762611</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#441004]">
            <span>#441004</span>
          </div>
        </div>

        <div className=" flex flex-col">
          <div className=" w-48 h-10 text-black flex justify-center items-center bg-[#f2f8fd]">
            <span>#f2f8fd</span>
          </div>
          <div className=" w-48 h-10 text-black flex justify-center items-center bg-[#e3effb]">
            <span>#e3effb</span>
          </div>
          <div className=" w-48 h-10 text-black flex justify-center items-center bg-[#c2dff5]">
            <span>#c2dff5</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#8bc4ee]">
            <span>#8bc4ee</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#4ea6e2]">
            <span>#4ea6e2</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#2584c6]">
            <span>#2584c6</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#186eb1]">
            <span>#186eb1</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#15588f]">
            <span>#15588f</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#154b77]">
            <span>#154b77</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#173f63]">
            <span>#173f63</span>
          </div>
          <div className=" w-48 h-10 text-white flex justify-center items-center bg-[#0f2942]">
            <span>#0f2942</span>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
