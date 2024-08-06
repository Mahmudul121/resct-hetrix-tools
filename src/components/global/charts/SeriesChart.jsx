import React from "react";
import ReactApexChart from "react-apexcharts";

const SeriesChart = ({ options, series }) => {
  return (
    <div className="mt-4">
      <div id="chart-timeline-2">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default SeriesChart;
