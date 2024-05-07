import React from "react";
import Icon from "/clienticons/SpearSecurityForce.png";
import LandingPage from "/images/spearSecurityScreenshot.jpg";

const HeroSection = ({ NavBarHeight }) => {
  const HeroSectionHeight = window.innerHeight - NavBarHeight;
  console.log("HeroSectionHeight", HeroSectionHeight);
  return (
    <div
      className=" flex items-center text-white w-100"
      style={{
        height: `${HeroSectionHeight}px`,
        // minHeight
        maxHeight: `${HeroSectionHeight}px`,
      }}
    >
      <div className=" flex flex-col justify-center h-100 self-stretch w-1/2 px-10">
        <img src={Icon} className=" w-52" alt="Spear security force logo" />
        <h1 className=" ps-2">UI/UX Case Study</h1>
        <p className="ps-2">
          Spear Security Force, a leading provider of security solutions in
          India, lacked an online presence to match their physical prowess. As a
          UI/UX designer, I was tasked with crafting a website that not only
          reflected their professionalism but also prioritized the user
          experience. This case study delves into the challenges and strategies
          employed to create a website that empowers potential clients,
          showcases Spear's expertise, and ultimately positions them as the
          trusted guardians of security in India.
        </p>
      </div>
      <div className="w-1/2">
        {/* "https://via.placeholder.com/500"   */}
        <img src={LandingPage} alt="placeholder" />
      </div>
    </div>
  );
};

export default HeroSection;
