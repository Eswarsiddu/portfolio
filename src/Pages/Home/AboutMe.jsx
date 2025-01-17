import React, { useEffect, useState } from "react";

const AboutMe = () => {
  // const [bgGradient, setBgGradient] = useState("bg-gradient-to-r");
  // useEffect(() => {
  //   // document.title = "Siddu Eswar | Portfolio";

  //   const interval = setInterval(() => {
  //     setBgGradient((prev) => {
  //       if (prev === "bg-gradient-to-r") {
  //         return "bg-gradient-to-l";
  //       }
  //       return "bg-gradient-to-r";
  //     });
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div
      id="about-me-section"
      className={` py-16 bg-[#1B1B1B from-[#7932d9] to-[#00f1ff] bg-gradient-to-r animate-gradinetMove`}
    >
      <div
        className={` mx-auto px-4 md:px-6  flex items-center flex-col lg:flex-ro container space-y-8`}
      >
        <h1 className=" text-cente text-3xl font-bold ">About Me</h1>
        {/* <div className=""> */}
        <p className="text-lg">
          I’m Siddu Eswar, a dedicated web and mobile app developer with a
          passion for delivering high-quality, innovative digital solutions.
          With extensive experience in crafting responsive websites, dynamic
          mobile apps, and custom software, I focus on creating user-centric
          designs that drive results. Whether it’s building a modern website,
          developing a cross-platform mobile app, or providing tailored business
          solutions, I bring your ideas to life with security, scalability, and
          a keen attention to detail.
        </p>
        <p className="text-lg">
          My mission is to empower businesses by transforming their digital
          presence with cutting-edge technologies. I pride myself on a
          transparent, quality-driven approach, ensuring clear communication and
          effective collaboration every step of the way. By choosing to work
          with me, you’ll have a technology partner committed to your success,
          delivering results that help your business grow and thrive in the
          digital world.
        </p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default AboutMe;
