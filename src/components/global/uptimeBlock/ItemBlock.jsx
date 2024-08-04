import React from "react";
import Image from "../../ui/Image";

const ItemBlock = ({ title, subTitle, value, icon }) => {
  return (
    <div className="uptime-item">
      <p className="item-1">
        {title}
        <Image src={icon} alt="" />
      </p>
      <p className="item-2">
        {subTitle} <span>{value}</span>
      </p>
    </div>
  );
};

export default ItemBlock;
