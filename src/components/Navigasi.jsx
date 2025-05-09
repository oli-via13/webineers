import React from "react";
import aset1 from "../aset/aset1.png";

export const Navigasi = () => {
  return (
    <div className="fixed top-0 right-0 w-250">
      <div className="bg-sky-100 p-5 flex justify-between rounded-2xl">
        <div>
          <h1>Dashboard </h1>
          <h3>Monday, 22 Feb 2025</h3>
        </div>
        
        <div className="flex-row">
          <div className="bg-white w-40 flex justify-end">
            <img src={aset1} alt="" />
          </div>
          <div className="">
            <h1>Chelsea Maweikere</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
