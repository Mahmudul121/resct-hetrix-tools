import React from "react";

const MonitItem = ({ title, value, value2 }) => {
  return (
    <div className="monit-list-item">
      <p className="text-1">{title}</p>
      <p className="text-2">
        {value} <span>{value2}</span>
      </p>
    </div>
  );
};

export default MonitItem;
