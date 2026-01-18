import React from "react";
import { BiUser } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { PiCityBold } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";

const Network = ({ data }) => {
  return (
    <div className="bg-base-200 md:px-2 text-red-600 text-center space-y-2 md:space-y-5 py-2 md:py-5 mt-5 md:mt-10 rounded-md">
      <h2 className="text-2xl md:text-4xl font-bold">Our Network Has</h2>
      <div className="grid w-11/12 md:w-full mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5">
        <div className="space-y-1 bg-base-300 py-2 rounded-md">
          <h3 className="text-2xl font-bold">Total Donors</h3>
          <div className="flex flex-col justify-center items-center">
            <BiUser size={60}></BiUser>
            <p className="text-4xl font-bold">{data.donorCount || 0}</p>
          </div>
        </div>
        <div className="space-y-1 bg-base-300 py-2 rounded-md">
          <h3 className="text-2xl font-bold">Total Volunteers</h3>
          <div className="flex flex-col justify-center items-center">
            <FaRegHandshake size={60} />
            <p className="text-4xl font-bold">{data.volunteerCount || 0}</p>
          </div>
        </div>
        <div className="space-y-1 bg-base-300 py-2 rounded-md">
          <h3 className="text-2xl font-bold">Districts</h3>
          <div className="flex flex-col justify-center items-center">
            <PiCityBold size={60} />
            <p className="text-4xl font-bold">{data.districtCount || 0}</p>
          </div>
        </div>
        <div className="space-y-1 bg-base-300 py-2 rounded-md">
          <h3 className="text-2xl font-bold">Countries</h3>
          <div className="flex flex-col justify-center items-center">
            <GrLocation size={60} />
            <p className="text-4xl font-bold">{data.countryCount || 1}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
