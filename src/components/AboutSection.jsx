import React from "react";
import { Link } from "react-router";

const AboutSection = () => {
  return (
    <div className="bg-base-200 md:px-2 text-red-600 text-center space-y-2 md:space-y-5 py-2 md:py-5 mt-5 md:mt-10 rounded-md">
      <h2 className="text-2xl md:text-4xl font-bold">About Us</h2>
      <div className="w-11/12 md:w-full mx-auto">
        <div className="bg-base-300 py-2 rounded-md">
          <div className="space-y-1">
            <p className="font-semibold w-11/12 md:w-3/4 mx-auto">
              Red Help is an automated blood donation service that quickly
              connects people who need blood with voluntary blood donors through
              email. Our goal is to make blood searching fast, easy, and
              reliable during emergencies.
            </p>
            <p className="font-semibold w-11/12 md:w-3/4 mx-auto">
              Red Help is a not-for-profit initiative created to raise awareness
              about voluntary blood donation and to encourage people across
              Bangladesh to donate blood regularly and save lives.
            </p>
          </div>
        </div>
        <Link to="/about">
          <button className="bg-linear-to-br my-2 md:my-5 cursor-pointer hover:opacity-50 from-red-600 to-red-300 text-white py-1 w-11/12 md:w-40 lg:w-52 bg-transparent border font-bold text-base md:text-lg border-white rounded-md">
            About Red Help
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
