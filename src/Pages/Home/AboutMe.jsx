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
        className={` mx-auto px-4 md:px-6 text-white  flex items-center flex-col lg:flex-ro container max-w-[1140px`}
      >
        <h1 className=" text-cente text-2xl font-bold mb-5 text-[#00f1ff]">
          About Me
        </h1>
        {/* <div className=""> */}
        <p className="">
          {/* I am a software engineer with more than two years of experience.
          Recognized as a practical and effective developer, experienced in
          leading cross-functional teams. */}
          {/* Highly motivated and skilled Full Stack Web Developer with over 2
          years of experience. Proficient in creating dynamic and responsive web
          applications and possess experience developing Android apps and games.
          I am a software engineer with a strong track record of success.
          Recognized as a practical and effective developer, passionate about
          writing clean and maintainable code to deliver outstanding user
          experiences. Additionally, I possess experience leading
          cross-functional teams. */}
          I specialize in crafting user-friendly websites and apps that look
          great. With two years of experience, I've honed my skills in building
          dynamic web applications and mobile apps. I'm skilled at creating
          websites for businesses of all sizes, from small stores to large
          organizations. My focus is on delivering high-quality digital
          solutions that meet the needs of my clients.
          {/* I create websites and apps that are easy to use and look great. With
          two years of building websites and apps, I can handle projects for any
          sized business, big or small. I focus on making sure my work looks
          good and works well for my clients. */}
          {/* Add content to this about me */}
          {/* I am a dedicated designer and
            developer committed to crafting exceptional user experiences. By
            closely collaborating with clients, I identify challenges and
            implement innovative solutions. */}
        </p>
        {/* <p>
            With a strong foundation in user-centered design, I specialize in
            creating intuitive and visually appealing websites and applications.
            Leveraging two years of industry experience, I have honed my skills
            in developing dynamic web and mobile solutions. My expertise extends
            to serving businesses of all scales, from startups to established
            enterprises. I am passionate about delivering high-quality digital
            products that exceed client expectations.
          </p> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default AboutMe;
