import React from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const Dashboard = () => {
  const data = [
    { name: "Installed", value: 700, fill: "#0088FE" },
    { name: "Unstalled", value: 200, fill: "#00C49F" },
  ];
  return (
    <div className="my-10 shadow p-10 rounded-md border border-slate-300 container mx-auto">
      <h2 className=" font-semibold text-3xl text-center mb-4">
        Installed and Uninstalled Apps
      </h2>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          margin: "auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />

        <Legend> </Legend>
        <Tooltip> </Tooltip>
      </PieChart>
    </div>
  );
};

export default Dashboard;
