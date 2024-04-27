import { useEffect, useRef } from "react";
import BG1 from "/images/svg.png";
// import BG2 from "/images/svg(1).png";
import Lottie from "lottie-react";
// import GIF from "/9xev5OKerr.gif";
// import GIF from "../../Assets/9xev5OKerr.json";
import GIF from "../../Assets/2TubWAO9Je.json";
import Typed from "typed.js";

function HeroSection({ NavBarHeight }) {
  const HeroSectionHeight = window.innerHeight - NavBarHeight;
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["A Full Stack^800", "An App^500", "A Game^500"],
      typeSpeed: 50,
      backSpeed: 20,
      // waitTime: 2000,
      loop: true,
      cursorChar: "|",
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      className=" text-white relative"
      style={{
        height: `${HeroSectionHeight}px`,
        // backgroundImage: `url("https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        // backgroundColor: "lineargradient(red,green)",
        // backgroundPosition: "center",
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        // filter: "blur(2px)",
        // backgroundFilter: "blur(10px)",
        // backgroundOpacity: "0.1",
        // backgroundBlendMode: "overlay",
      }}
      // style={{
      //   backgroundImage: `url("https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
      //   // backgroundColor: "lineargradient(red,green)",
      //   // backgroundPosition: "center",
      //   // backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   // filter: "blur(2px)",
      //   // backgroundFilter: "blur(10px)",
      //   // backgroundOpacity: "0.1",
      //   // backgroundBlendMode: "overlay",
      // }}
    >
      {/* <div className=" absolute w-full h-full flex items-end">
        <img src={BG1} alt="" className="w-full" />
      </div> */}
      <div
        className="container px-6 mx-auto h-full flex flex-col-reverse md:flex-row justify-evenly md:justify-between items-center "
        // style={{ paddingTop: `${NavBarHeight + 15}px` }}
      >
        <div className="flex flex-col gap-4 h-1/2 justify-center ">
          <h1 className="flex flex-col gap-5">
            <span className=" opacity-50">Hi there, I am</span>
            <span className=" block text-5xl md:text-6xl lg:text-7xl font-medium ">
              Siddu Eswar
            </span>
            <span className=" text-2xl lg:text-4xl opacity-75 text-nowrap">
              <span ref={typedRef}></span>Developer
            </span>
          </h1>
          <div className="flex gap-4">
            <button className="p-2 bg-[#7932d9] rounded text-white hover:bg-[#6925c2] font-medium">
              Contact Me
            </button>
            <button className="p-2 bg-red-500 rounded text-white hover:bg-red-600 font-medium">
              Resume
            </button>
          </div>
        </div>
        <Lottie
          animationData={GIF}
          className="w-2/3 md:w-1/2"
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
    </section>
  );
}

export default HeroSection;
