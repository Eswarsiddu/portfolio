import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { ProjectCard } from "../Home/Projects";
import { RouteNames } from "../../Routes";

function Projects() {
  const { navBarHeight } = useOutletContext();
  useEffect(() => {
    document.title = "Siddu Eswar | Projects";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1
        className=" bg-gradient-to-l from-[#7932d9] to-[#00f2ff98] text-center text-5xl font-bold mb-8"
        style={{ padding: `${navBarHeight}px 0` }}
      >
        <span className="block translate-y-1/2">My Work</span>
      </h1>
      <div className="py-6 space-y-12">
        <ProjectCard
          title="Spear Security Force"
          shortDescription={
            "A professional 5-page website that highlights their security services, designed to enhance online presence and accessibility, enabling them to effectively reach and attract more clients."
          }
          image={"/images/spearSecurityScreenshot.jpg"}
          // siteLink={"https://www.spearsecurityforce.in/"}
          readMoreLink={RouteNames.SPEAR_SECURITY_FORCE}
        />
        <ProjectCard
          title={"Smart Techs HR Services"}
          shortDescription={
            "A professional website focused on showcasing HR services, designed to strengthen business growth through improved online presence and accessibility, making it easier to connect with potential clients."
          }
          image={"/images/smartTechsScreenshot.png"}
          // siteLink={"https://www.spearsecurityforce.in/"}
          readMoreLink={RouteNames.SMART_TECHS_HR_SERVICES}
        />
      </div>
    </>
  );
}

export default Projects;
