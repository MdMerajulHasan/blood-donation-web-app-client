import React from "react";
import useRole from "../hooks/useRole";
import useAuth from "../hooks/useAuth";
import Logo from "../components/Logo";

const Dashboard = () => {
  const { user } = useAuth();
  const { role } = useRole();
  console.log(role);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1 h-screen bg-linear-to-tr from-red-600 to-red-300">
        <Logo></Logo>
      </div>
      <div className="col-span-11">Dashboard</div>
    </div>
  );
};

export default Dashboard;
