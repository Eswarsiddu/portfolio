import React from "react";

const AboutMe = () => {
  return (
    <div className=" my-16">
      <div className=" mx-auto px-4 text-white  flex items-center container max-w-[1140px">
        <h1 className=" text-cente text-4xl font-bold mb-5 text-[#00f1ff] w-2/12">
          About Me
        </h1>
        <p className=" text-lg leading-10 w-10/12 ">
          {/* I am a software engineer with more than two years of experience.
          Recognized as a practical and effective developer, experienced in
          leading cross-functional teams. */}
          Highly motivated and skilled Full Stack Web Developer with over 2
          years of experience. Proficient in creating dynamic and responsive web
          applications and possess experience developing Android apps and games.
          I am a software engineer with a strong track record of success.
          Recognized as a practical and effective developer, passionate about
          writing clean and maintainable code to deliver outstanding user
          experiences. Additionally, I possess experience leading
          cross-functional teams.
          {/* Add content to this about me */}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
