import React from "react";
import { ClockLoader } from "react-spinners";
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClockLoader size={100} color="#DC2626" />
    </div>
  );
};

export default Loading;
