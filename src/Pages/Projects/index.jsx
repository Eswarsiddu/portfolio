import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

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
        My Work
      </h1>
    </>
  );
}

export default Projects;
