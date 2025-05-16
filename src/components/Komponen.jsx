import React from "react";

const Komponen = (props) => {
  return (
    <div className="flex px-4 gap-1 items-center">
      <img src={progres} alt="" className="w-4 h-4 " />
      <a className="">{props.text}</a>
    </div>
  );
};

export default Komponen;
