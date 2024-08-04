import React from "react";
import "./ramUse.scss";
import ItemTitleBlock from "../ItemTitleBlock";
const RamUse = () => {
  return (
    <div className="ram-block home-block">
      <h2 className="hh-2">RAM Usage</h2>
      <hr style={{ backgroundColor: "#E8E9FF" }} />

      <div className="uses-bottom">
        <div className="grey-block">
          <ItemTitleBlock
            title={"Max RAM (Swap)"}
            subTitle={"2.84% (12.66%)"}
          />
        </div>
        <div className="row">
          <div className="col-6">
            <ItemTitleBlock
              title={"Current RAM (Swap)"}
              subTitle={"2.47% (12.66%)"}
            />
          </div>
          <div className="col-6">
            <ItemTitleBlock
              title={"Average RAM (Swap)"}
              subTitle={"2.62% (12.15%)"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RamUse;
