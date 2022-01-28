import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
    const valueArray = props.datapoints.map(datapoints=> datapoints.value)
    const maxValue = Math.max(...valueArray);
    console.log(maxValue);
  return (
    <div className="chart">
      {props.datapoints.map((datapoints) => (
        <ChartBar
          key={datapoints.label}
          value={datapoints.value}
          max={maxValue}
          label={datapoints.label}
        />
      ))}
    </div>
  );
};

export default Chart;
