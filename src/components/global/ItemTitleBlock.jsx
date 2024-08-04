import React from "react";

const ItemTitleBlock = ({ title, subTitle }) => {
  return (
    <div className="main-title-sub">
      <p>{title}</p>
      <h2>{subTitle}</h2>
    </div>
  );
};

export default ItemTitleBlock;
