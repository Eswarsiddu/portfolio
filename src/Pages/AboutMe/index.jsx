import React from "react";
import { useOutletContext } from "react-router-dom";

const AboutMe = () => {
  const { navBarHeight } = useOutletContext();
  return (
    <div
      style={{
        paddingTop: `${navBarHeight}px`,
      }}
    >
      About me
    </div>
  );
};

export default AboutMe;
