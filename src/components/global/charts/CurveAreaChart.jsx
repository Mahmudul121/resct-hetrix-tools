import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const CurveAreaChart = ({ options, series }) => {
  return (
    <div className="mt-4">
      <div id="chart-timeline">
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

export default CurveAreaChart;
