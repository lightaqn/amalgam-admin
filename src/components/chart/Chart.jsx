import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./chart.css";

export default function Chart({ title, data, grid, dataKey }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          data={data}
          width={500}
          height={300}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" stroke="#ff8c00" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#ff8c00"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#6200ff"
            activeDot={{ r: 8 }}
          />
          {grid && <CartesianGrid strokeDasharray="3 3" stroke="#D3D3D3" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
