import React from "react";

const Button = ({ children, onClick, secondary = false }) => {
  return (
    <button
      className={
        "py-2 px-4 rounded-md group relative " +
        (secondary
          ? "bg-red-500 hover:bg-red-600"
          : // "bg-[#54e8f0] hover:bg-[#00f1ff] text-[#181818]"
            "bg-[#7932d9] hover:bg-[#6925c2]")
      }
      onClick={onClick}
    >
      <div className="z-20 w-full h-full">{children}</div>
      <span
        className={
          "block absolute w-full h-full rounded-md left-0 top-0 group-hover:left-1 group-hover:top-1 transition-all duration-100 ease-in -z-10 " +
          "group-hover:bg-[#00f1ff]"
        }
      ></span>
    </button>
  );
};

export default Button;
