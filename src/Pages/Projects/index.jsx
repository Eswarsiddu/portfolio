import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { ProjectCard } from "../Home/Projects";
import { RouteNames } from "../../Routes";

function Projects() {
  const { navBarHeight } = useOutletContext();
  useEffect(() => {
    document.title = "Siddu Eswar | Projects";
  }, []);
  return (
    <>
      {/* <h1
        className=" pb-8 text-center text-3xl font-bold"
        style={{
          paddingTop: `${navBarHeight}px`,
        }}
      >
        Projects
      </h1> */}
      <h1
        className=" bg-gradient-to-l from-[#7932d9] to-[#00f2ff98] text-center text-5xl font-bold mb-8"
        style={{ padding: `${navBarHeight}px 0` }}
      >
        <span className="block translate-y-1/2">My Work</span>
      </h1>
      <div className="py-6">
        <ProjectCard
          title={"Spear Security Force"}
          shortDescription={
            "A 5-page professional website showcasing their services and contact information to grow their business, featuring enhanced online availability and accessibility to reach and attract more clients effectively."
          }
          image={"/images/spearSecurityScreenshot.jpg"}
          siteLink={"https://www.spearsecurityforce.in/"}
          readMoreLink={RouteNames.SPEAR_SECURITY_FORCE}
        />
      </div>
    </>
  );
}

export default Projects;
