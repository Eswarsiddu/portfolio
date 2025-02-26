import React from "react";
import Button from "../../CustomComponents/Button";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../Routes";

function GetInTouch() {
  const navigate = useNavigate();
  return (
    <div className=" py-8  ">
      <div className=" container mx-auto ">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full z-30">
          <h2 className=" text-nowrap font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-l from-[#7932d9] to-[#00f2ff98] ">
            Get In Touch
          </h2>
          <Button
            onClick={() => {
              navigate(RouteNames.CONTACT_ME);
            }}
          >
            <span className="text-sm xs:text-base font-bold">Contact Me</span>
          </Button>

          <Button
            secondary
            onClick={() => {
              navigate(RouteNames.PROJECTS);
            }}
          >
            <span className="text-sm xs:text-base font-bold">
              View My Works
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
