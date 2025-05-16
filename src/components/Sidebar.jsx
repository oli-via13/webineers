import React from "react";
import calender from "../aset/calender.png";
import matchUp from "../aset/match-up.png";
import progres from "../aset/progres.png";
import study from "../aset/study-room.png";
import settings from "../aset/settings.png";
import home from "../aset/home.png";
import Navlink from "./Navlink";

const Sidebar = () => {
  return (
    <div className="pt-0 h-full">
      <div className="bg-[#2d336b] max-w-[233px] h-full justify-center">
        <h1 className="font-bold text-amber-200 "></h1>
        <nav className="text-white left-5">
          <div className="py-5 pl-5">
            <h1 className="m-1 font-bold">Webineers.</h1>
          </div>
          <div className="flex flex-col gap-5 pl-10">
            <div className="flex px-4 gap-1 items-center bg-white w-31 text-black rounded-l-xl py-1">
              <img src={home} alt="" className="w-4 h-4  " />
              <a className="">Home</a>
            </div>
            <Navlink namaLink="Calender" image={calender} />
            <Navlink namaLink="Study room" image={study} />
            <Navlink namaLink="Match up" image={matchUp} />
            <Navlink namaLink="Setting" image={settings} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
