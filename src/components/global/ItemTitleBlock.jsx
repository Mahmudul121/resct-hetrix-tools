import React from "react";

const ItemTitleBlock = ({ title, subTitle, info = "" }) => {
  return (
    <div className="main-title-sub">
      <p>{title}</p>
      <h2>
        {" "}
        {info ? <span>{info}</span> : null} {subTitle}
      </h2>
    </div>
  );
};

export default ItemTitleBlock;
