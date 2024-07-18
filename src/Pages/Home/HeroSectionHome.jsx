import { useEffect, useRef, useState } from "react";
import BG1 from "/images/svg.png";
// import BG2 from "/images/svg(1).png";
import Lottie from "lottie-react";
// import GIF from "/9xev5OKerr.gif";
// import GIF from "../../Assets/9xev5OKerr.json";
import GIF from "../../Assets/2TubWAO9Je.json";
import Typed from "typed.js";
import Packman from "/images/pacman.svg";

function HeroSection({ NavBarHeight }) {
  // const [HeroSectionHeight, setHeroSectionHeight] = useState(
  //   window.innerHeight - NavBarHeight
  // );

  // useEffect(() => {

  // }, []);
  const HeroSectionHeight = window.innerHeight - NavBarHeight;
  const typedRef = useRef(null);

  useEffect(() => {
    // setTimeout(() => {
    //   setHeroSectionHeight(window.innerHeight - NavBarHeight);
    // }, 500);
    // window.addEventListener("resize", () => {
    //   setHeroSectionHeight(window.innerHeight - NavBarHeight);
    // });
    // if (!typedRef.current) {
    //   return () => {
    //     window.removeEventListener("resize", () => {
    //       setHeroSectionHeight(window.innerHeight - NavBarHeight);
    //     });
    //   };
    // }
    if (!typedRef.current) return;
    const typed = new Typed(typedRef.current, {
      strings: ["A Web^800", "An App^500"],
      typeSpeed: 50,
      backSpeed: 20,
      // waitTime: 800,
      loop: true,
      cursorChar: "|",
    });
    return () => {
      typed.destroy();
      // window.removeEventListener("resize", () => {
      //   setHeroSectionHeight(window.innerHeight - NavBarHeight);
      // });
    };
  }, []);

  return (
    <section
      className=" container mx-auto text-white relative animate-bgChang"
      style={{
        height: `${HeroSectionHeight}px`,
      }}
    >
      <div className=" px-4 md:px-6 mx-auto h-full flex flex-col lg:flex-row justify-start md:justify-center gap-4 lg:justify-between items-center ">
        <div className="flex flex-col gap-4 h-full md:h-max justify-center bg-red-0">
          <div className="flex flex-col gap-5">
            <div className=" text-xl flex items-center gap-2">
              <span className="text-xl animate-handWave block origin-bottom-right">
                👋
              </span>
              <span className=" font-GaMaamli">
                Hi, I'm <span className="font-Playwrite font-bold">ESWAR</span>
              </span>
            </div>
            <p className=" text-3xl font-GaMaamli">
              Your{" "}
              <span className="text-[#00f1ff] text-4xl">Website & App</span>{" "}
              Superhero
            </p>
            <p className="text-lg">
              Stuck in website or app trouble? I'm here to save the day! Get a
              user-friendly website or powerful app that helps your business
              shine.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="py-2 px-4 bg-[#7932d9] rounded-md group text-white hover:bg-[#6925c2] font-mediu font-bold relative">
              <span>Contact Me</span>
              <span className="block absolute w-full h-full rounded-md left-0 top-0 group-hover:left-1 group-hover:top-1 -z-10 transition-all duration-100 ease-in group-hover:bg-[#00f1ff]"></span>
            </button>
            {/* <button className="p-2 bg-red-500 rounded text-white hover:bg-red-600 font-medium">
              Resume
            </button> */}
          </div>
        </div>
        <Lottie
          animationData={GIF}
          className="w-3/5 hidden md:block lg:w-2/5 bg-green-3"
          style={
            {
              // width: "50%",
              // height: "600px",
              // alignSelf: "center",
              // transform: "translateY(-25%)",
            }
          }
        />
        {/* <img src={GIF} alt="" className="w-full" /> */}
        {/* </div> */}
        {/* <div className="w-1/2"> */}
        {/* <img className=" w-[100px] h-[150px] " src="./images/eswar.jpg" /> */}
        {/* </div> */}
        {/* </div> */}
      </div>
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 opacity-20">
        {/* Scrool down to see more */}
        See What We Can Do
      </div>
      <button
        // href={"#about-me-section"}
        className=" bg-[#7932d9] w-12 h-12 rounded-full absolute bottom-3 left-1/2 -translate-x-1/2 flex justify-center items-center "
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight - NavBarHeight,
            behavior: "smooth",
          });
        }}
      >
        {/* <img src={AnglesDown} /> */}
        <i className="fa-solid fa-angles-down mt-3 text-white text-2xl animate-bounce"></i>
        {/* <ChevronsDown fill="#ffffff" stroke="1" /> */}
      </button>
    </section>
  );
}

export default HeroSection;
