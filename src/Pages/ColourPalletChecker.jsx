import React from "react";

const ColourPalletChecker = () => {
  return (
    <div>
      <h1 className="text-white">Colour Pallet Checker</h1>
      <p className="text-white">Check the colour pallet of your website</p>
      <div className=" bg-[#1B1B1B]  p-4">
        <p className=" text-[#BB86FC] text-xl py-3">Test Primary</p>
        <p className=" text-[#03DAC6] text-xl py-3">Test Secondary</p>

        <p className=" text-[#E0E0E0] text-xl border-l-4 border-[#FFD700] py-3">
          Test primary accest
        </p>
        <p className=" text-[#757575] text-xl border-l-4 border-[#B8860B] py-3">
          Test Secondary accest
        </p>
      </div>
    </div>
  );
};

export default ColourPalletChecker;
