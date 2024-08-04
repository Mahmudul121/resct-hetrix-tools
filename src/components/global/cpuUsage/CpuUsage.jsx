import React from "react";
import "./cpuUsage.scss";
import FilterList from "../FilterList";
import ItemTitleBlock from "../ItemTitleBlock";

const CpuUsage = () => {
  return (
    <div className="home-block">
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="hh-2">CPU Usage</h2>
        <FilterList />
      </div>

      <ul className="data-list-show">
        <li>
          <ItemTitleBlock
            title={"Current CPU (IOWait)"}
            subTitle={"5.42% (0.00%)"}
          />
        </li>
        <li>
          <ItemTitleBlock
            title={"Average CPU (IOWait)"}
            subTitle={"7.77% (0.00%)"}
          />
        </li>
        <li>
          <ItemTitleBlock
            title={"Max CPU (IOWait)"}
            subTitle={"10.42% (0.00%)"}
          />
        </li>
      </ul>
    </div>
  );
};

export default CpuUsage;
