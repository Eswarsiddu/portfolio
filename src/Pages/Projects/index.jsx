import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Projects() {
  const { navBarHeight } = useOutletContext();
  useEffect(() => {
    document.title = "Siddu Eswar | Projects";
  }, []);
  return (
    <>
      <h1
        className=" pb-8 text-center text-3xl font-bold"
        style={{
          paddingTop: `${navBarHeight}px`,
        }}
      >
        Projects
      </h1>
    </>
  );
}

export default Projects;
