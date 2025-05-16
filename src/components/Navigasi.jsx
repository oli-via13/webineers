import React from "react";
import aset1 from "../aset/aset1.png";
import bel from "../aset/bel.png";

export const Navigasi = () => {
  return (
    <div className="">
      <div className="bg-[#2d336b] p-5 flex justify-between rounded-2xl">
        <div className="text-white">
          <h1 className="font-bold">Dashboard </h1>
          <h3>Monday, 22 Feb 2025</h3>
        </div>

        <div className="flex flex-row gap-2">
          <img src={bel} className="bg-white w-6 h-6 rounded-2xl p-1" alt="" />
          <div className="bg-white flex flex-row w-40 h-6 mb- p-1 rounded-2xl">
            <img src={aset1} alt="" />
          </div>
          <div className="text-white flex flex-row gap-1">
            <h1 className="font-bold text-sm text-blue-950 bg-white rounded-full w-6 h-6">
              CM
            </h1>
            <h1>Chelsea Maweikere</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
