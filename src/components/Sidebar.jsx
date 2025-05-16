import React from "react";

const Sidebar = () => {
  return (
    <div className="">
      <div className="bg-[#2D336B] max-w-[233px] h-screen ">
        <h1 className="font-bold text-amber-200 "></h1>
        <nav className="text-white  px-10">
          <div className="py-5">
            <h1 className="">Webineers</h1>
          </div>
          <div className="flex flex-col gap-5">
            <a className="">Home</a>
            <a className="">Progress</a>
            <a className="">Calender</a>
            <a className="">Study Room</a>
            <a className="">Match up</a>
            <a className="">setting</a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
