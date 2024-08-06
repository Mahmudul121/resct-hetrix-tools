import React from "react";
import FilterList from "../FilterList";
import ItemTitleBlock from "../ItemTitleBlock";
import SeriesChart from "../charts/SeriesChart";
import "./diskUses.scss";

const DiskUses = () => {
  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 80, 60],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
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
    colors: ["#DBA5FF", "#FF8F6DCC"],
  };
  return (
    <div className="home-block">
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="hh-2">Disk Usage</h2>
        <FilterList />
      </div>
      <SeriesChart series={series} options={options} />
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
