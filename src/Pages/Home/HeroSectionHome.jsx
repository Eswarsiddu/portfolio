import Lottie from "lottie-react";
import GIF from "../../Assets/2TubWAO9Je.json";
import Button from "../../CustomComponents/Button";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../Routes";

function HeroSection({ NavBarHeight }) {
  // const HeroSectionHeight = window.innerHeight - NavBarHeight;
  const navigate = useNavigate();

  return (
    <section
      className=" container mx-auto relative animate-bgChang flex flex-col pb-4"
      style={{
        // height: "100vh",
        height: "100svh",
        // height: "100vh",
        // paddingTop: `${NavBarHeight}px`,
        // height: `${HeroSectionHeight}px`,
      }}
    >
      <div className=" px-2 md:px-6 mx-auto flex flex-col lg:flex-row justify-start md:justify-center gap-4 lg:justify-between items-center flex-grow ">
        <div className="flex flex-col gap-1 xs:gap-3 md:gap-4 h-full md:h-max justify-center bg-red-0">
          <div className=" text-xl flex items-center gap-2">
            <span className="text-xl animate-handWave block origin-bottom-right">
              👋
            </span>
            <span className=" font-GaMaamli">
              Hi, I'm <span className="font-Playwrite font-bold">ESWAR</span>
            </span>
          </div>
          <p className=" text-lg xs:text-3xl font-GaMaaml font-Playwrit">
            Your{" "}
            <span className="text-[#00f1ff] text-2xl xs:text-4xl font-GaMaamli font-Playwrit">
              Website & App
            </span>{" "}
            Superhero
          </p>
          <p className="xs:text-lg">
            Stuck in website or app trouble? I'm here to save the day! Get a
            user-friendly website or powerful app that helps your business
            shine.
          </p>
          <div className="flex gap-4">
            {/* <button className="py-2 px-4 bg-[#7932d9] rounded-md group hover:bg-[#6925c2] text-sm xs:text-base font-bold relative">
              <span className="text-sm xs:text-base font-bold">Contact Me</span>
              <span className="block absolute w-full h-full rounded-md left-0 top-0 group-hover:left-1 group-hover:top-1 -z-10 transition-all duration-100 ease-in group-hover:bg-[#00f1ff]"></span>
            </button> */}
            <Button
              onClick={() => {
                navigate(RouteNames.CONTACT_ME);
              }}
            >
              <span className="text-sm xs:text-base font-bold">Contact Me</span>
            </Button>

            <Button
              secondary
              onClick={() => {
                navigate(RouteNames.PROJECTS);
              }}
            >
              <span className="text-sm xs:text-base font-bold">
                View My Work
              </span>
            </Button>
          </div>
        </div>
        <Lottie
          animationData={GIF}
          className="w-3/5 hidden md:block lg:w-2/5 bg-green-3"
        />
      </div>
      <div className=" flex flex-col items-center w-full gap-0 xs:gap-1">
        <div className=" opacity-20">
          {/* Scrool down to see more */}
          {/* See What We Can Do */}
          Scroll down to explore
        </div>
        <button
          className=" bg-[#7932d9] w-10 h-10 xs:w-12 xs:h-12 rounded-full flex justify-center items-center "
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight - NavBarHeight,
              behavior: "smooth",
            });
          }}
        >
          <i className="fa-solid fa-angles-down mt-3 text-white text-lg xs:text-2xl animate-bounce"></i>
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
