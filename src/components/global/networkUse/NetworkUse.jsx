import React from "react";
import "./networkUse.scss";
import FilterList from "../FilterList";
import ItemTitleBlock from "../ItemTitleBlock";

const NetworkUse = () => {
  return (
    <div className="network-block home-block">
      <h2 className="hh-2">Network Usage</h2>
      <hr style={{ backgroundColor: "#E8E9FF" }} />
      <FilterList />

      <div className="uses-bottom">
        <div className="grey-block">
          <ItemTitleBlock
            title={"Current Network Usage"}
            subTitle={" Out: 1.98Gbps"}
            info="In: 48.90Mbps"
          />
        </div>
        <div className="row">
          <div className="col-6">
            <ItemTitleBlock
              title={"Average Network Usage"}
              subTitle={" Out: 1.98Gbps"}
              info="In: 48.90Mbps"
            />
          </div>
          <div className="col-6">
            <ItemTitleBlock
              title={"Max Network Usage"}
              subTitle={" Out: 1.98Gbps"}
              info="In: 48.90Mbps"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkUse;
