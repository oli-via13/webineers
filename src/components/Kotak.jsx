import React from "react";
import aset2 from "../aset/aset2.png";

const Kotak = () => {
  return (
    <>
      <div className="bg-[#2d336b] rounded-2xl pt-10 pb-10 mb-10 ">
        <div className="flex flex-col relative">
          <h1 className="text-white text-xl font-bold  pl-5">
            Hi, Chelsea Maweikere{" "}
          </h1>
          <p className="pt-0 pl-5 pb-3 text-white">How are you today?</p>

          <img
            src={aset2}
            className="absolute w-60 h-50 right-5 -top-20 "
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Kotak;
