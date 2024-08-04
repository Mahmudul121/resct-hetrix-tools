import React from "react";
import FilterList from "../FilterList";
import ItemTitleBlock from "../ItemTitleBlock";
import "./diskUses.scss";

const DiskUses = () => {
  return (
    <div className="home-block">
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="hh-2">RAM Usage</h2>
        <FilterList />
      </div>

      <ul className="data-list-show">
        <li>
          <ItemTitleBlock title={"Current Disk Usage"} subTitle={"97.07%"} />
        </li>
        <li>
          <ItemTitleBlock title={"Average Disk Usage"} subTitle={"97.55%"} />
        </li>
        <li>
          <ItemTitleBlock title={"Max Disk Usage"} subTitle={"98.57%"} />
        </li>
      </ul>
    </div>
  );
};

export default DiskUses;
