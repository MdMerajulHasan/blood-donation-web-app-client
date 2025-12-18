import React from "react";
import useRole from "../hooks/useRole";

const Dashboard = () => {
  const { role } = useRole();
  console.log(role);
  return <div>Dashboard</div>;
};

export default Dashboard;
