import React from "react";

const Navlink = (props) => {
  return (
    <div className="flex px-4 gap-1 items-center">
      <img src={props.image} className="w-4 h-4 " alt="" />
      <a href="#">{props.namaLink} </a>
    </div>
  );
};

export default Navlink;
