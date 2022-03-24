import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import "../App.css";

const Chart = ({ data, datakey, grid }) => {
  return (
    <div className="chartContainer">
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="name" stroke="#5E1B9E" />
          <Tooltip />
          <Line type="monotone" dataKey={datakey} stroke="#5E1B9E" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
