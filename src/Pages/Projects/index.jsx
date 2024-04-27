import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    document.title = "Siddu Eswar | Projects";
  }, []);
  return <div>Projects</div>;
}

export default Projects;
