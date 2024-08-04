import React from "react";
import "./serverInfo.scss";

const ListItemShow = ({
  title,
  value,
  color = "#2C2C2C",
  textColor = "#2C2C2C",
}) => {
  return (
    <div className="server-info-block">
      <p>{title}</p>
      <h3 style={{ backgroundColor: color, color: textColor }}>{value}</h3>
    </div>
  );
};

export default ListItemShow;
