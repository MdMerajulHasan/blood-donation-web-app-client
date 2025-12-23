import React from "react";
import useRole from "../hooks/useRole";
import Loading from "../components/Loading";
import Forbidden from "../layouts/pages/Forbidden";

const VolunteerRoutes = ({ children }) => {
  const { role, roleLoading } = useRole();

  if (roleLoading) {
    return <Loading></Loading>;
  }

  if (role !== "volunteer") {
    return <Forbidden></Forbidden>;
  }
  return children;
};

export default VolunteerRoutes;
