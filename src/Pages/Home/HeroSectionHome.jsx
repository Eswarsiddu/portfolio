import Lottie from "lottie-react";
import GIF from "../../Assets/2TubWAO9Je.json";

function HeroSection({ NavBarHeight }) {
  const HeroSectionHeight = window.innerHeight - NavBarHeight;

  return (
    <section
      className=" container mx-auto relative animate-bgChang"
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
            <button className="py-2 px-4 bg-[#7932d9] rounded-md group hover:bg-[#6925c2] font-mediu font-bold relative">
              <span>Contact Me</span>
              <span className="block absolute w-full h-full rounded-md left-0 top-0 group-hover:left-1 group-hover:top-1 -z-10 transition-all duration-100 ease-in group-hover:bg-[#00f1ff]"></span>
            </button>
          </div>
        </div>
        <Lottie
          animationData={GIF}
          className="w-3/5 hidden md:block lg:w-2/5 bg-green-3"
        />
      </div>
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 opacity-20">
        {/* Scrool down to see more */}
        See What We Can Do
      </div>
      <button
        className=" bg-[#7932d9] w-12 h-12 rounded-full absolute bottom-3 left-1/2 -translate-x-1/2 flex justify-center items-center "
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight - NavBarHeight,
            behavior: "smooth",
          });
        }}
      >
        <i className="fa-solid fa-angles-down mt-3 text-white text-2xl animate-bounce"></i>
      </button>
    </section>
  );
}

export default HeroSection;
