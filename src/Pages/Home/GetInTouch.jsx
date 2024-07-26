import React from "react";
import Button from "../../CustomComponents/Button";

function GetInTouch() {
  return (
    <div className=" py-8  ">
      <div className=" container mx-auto ">
        <div className="flex items-center justify-center gap-8 w-full z-30">
          <h2 className=" text-nowrap font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-l from-[#7932d9] to-[#00f2ff98] ">
            Get In Touch
          </h2>
          <Button>
            <span className="text-sm xs:text-base font-bold">Contact Me</span>
          </Button>

          <Button secondary>
            <span className="text-sm xs:text-base font-bold">View My Work</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
