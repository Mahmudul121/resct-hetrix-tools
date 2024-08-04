import React from "react";
import "./uptime.scss";
import ItemBlock from "./ItemBlock";

const Uptime = () => {
  return (
    <div className="home-block">
      <h2 className="hh-2 mb-3">Recent Uptime</h2>
      <div className="uptime-block">
        <ItemBlock
          title={"9th July"}
          subTitle={"Uptime"}
          value={"100.0000%"}
          icon={"./assets/arrow_grow.svg"}
        />
        <ItemBlock
          title={"9th July"}
          subTitle={"Uptime"}
          value={"100.0000%"}
          icon={"./assets/arrow_grow.svg"}
        />
        <ItemBlock
          title={"9th July"}
          subTitle={"Uptime"}
          value={"100.0000%"}
          icon={"./assets/arrow_grow.svg"}
        />
        <ItemBlock
          title={"9th July"}
          subTitle={"Uptime"}
          value={"100.0000%"}
          icon={"./assets/arrow_down.svg"}
        />
        <ItemBlock
          title={"9th July"}
          subTitle={"Uptime"}
          value={"100.0000%"}
          icon={"./assets/arrow_grow.svg"}
        />
      </div>
    </div>
  );
};

export default Uptime;
