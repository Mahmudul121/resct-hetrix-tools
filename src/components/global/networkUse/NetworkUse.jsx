import React from "react";
import "./networkUse.scss";
import FilterList from "../FilterList";
import ItemTitleBlock from "../ItemTitleBlock";
import SeriesChart from "../charts/SeriesChart";

const NetworkUse = () => {
  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 80, 60],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    colors: ["#c1b0ed"],
  };
  return (
    <div className="network-block home-block">
      <h2 className="hh-2">Network Usage</h2>
      <hr style={{ backgroundColor: "#E8E9FF" }} />
      <FilterList />
      <SeriesChart series={series} options={options} />
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
