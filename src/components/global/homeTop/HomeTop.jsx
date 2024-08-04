import React from "react";
import "./homeTop.scss";
import Image from "../../ui/Image";

const HomeTop = ({ title, subTitile, icon, color }) => {
  return (
    <div className="top-wrapper" style={{ backgroundColor: color }}>
      <Image src={icon} alt="" />
      <div className="top-info">
        <h2 className="hh-2">{title}</h2>
        <p className="pp-1">{subTitile}</p>
      </div>
    </div>
  );
};

export default HomeTop;
