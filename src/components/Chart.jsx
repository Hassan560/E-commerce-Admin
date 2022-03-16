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
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5E1B9E" />
          <Line type="monotone" dataKey={datakey} stroke="#5E1B9E" />
          <Tooltip />
          {grid && <CartesianGrid strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
