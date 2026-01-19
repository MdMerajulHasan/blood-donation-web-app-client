import React from "react";
import ageAndWeight from "../assets/weight and height measuring.webp";
import goodHealth from "../assets/healthy and physicaly well.jpeg";
import hemoglobin1 from "../assets/himoglobin range1.jpg";
import interval from "../assets/blood donation interval.png";

const WhoEligibleToDonate = () => {
  return (
    <div className="bg-base-200 md:px-2 text-red-600 text-center space-y-2 md:space-y-5 py-2 md:py-5 mt-5 md:mt-10 rounded-md">
      <h2 className="text-2xl md:text-4xl font-bold">
        Who Can Donate Blood?
      </h2>
      <div className="grid w-11/12 md:w-full mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5">
        <div className="space-y-1 bg-base-300 px-1 py-2 rounded-md">
          <h3 className="text-2xl font-bold">Age & Weight</h3>
          <img
            className="h-64 w-11/12 mx-auto rounded-md"
            src={ageAndWeight}
            alt="one donate save 3 lives photo"
          />
          <p className="font-semibold">
            Donors must be 18 years or older and weigh at least 50 kg (110 lbs)
            to safely donate blood.
          </p>
        </div>
        <div className="space-y-1 bg-base-300 px-1 py-2 rounded-md">
          <h3 className="text-2xl font-bold">Good Health</h3>
          <img
            className="h-64 w-11/12 mx-auto rounded-md"
            src={goodHealth}
            alt="one donate save 3 lives photo"
          />
          <p className="font-semibold">
            Donors should be physically well, free from fever, infections, or
            serious illnesses at the time of donation.
          </p>
        </div>
        <div className="space-y-1 bg-base-300 px-1 py-2 rounded-md">
          <h3 className="text-2xl font-bold">Hemoglobin Level</h3>
          <img
            className="h-64 w-11/12 mx-auto rounded-md"
            src={hemoglobin1}
            alt="one donate save 3 lives photo"
          />
          <p className="font-semibold">
            A normal hemoglobin level is required to ensure the donation is safe
            for both donor and recipient.
          </p>
        </div>
        <div className="space-y-1 bg-base-300 px-1 py-2 rounded-md">
          <h3 className="text-2xl font-bold">Donation Interval</h3>
          <img
            className="h-64 w-11/12 mx-auto rounded-md"
            src={interval}
            alt="one donate save 3 lives photo"
          />
          <p className="font-semibold">
            There should be a minimum gap of 3–4 months since the last blood
            donation before donating again.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoEligibleToDonate;
