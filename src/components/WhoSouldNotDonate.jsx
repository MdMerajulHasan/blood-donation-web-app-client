import React from "react";
import feverPhoto from "../assets/fever.jpg";
import pregnencyPhoto from "../assets/pregnency.jpg";
import surgeryPhoto from "../assets/surgery.webp";
import medicationPhoto from "../assets/medication.webp";

const WhoSouldNotDonate = () => {
  return (
    <div className="bg-base-200 md:px-2 text-red-600 text-center space-y-2 md:space-y-5 py-2 md:py-5 mt-5 md:mt-10 rounded-md">
      <h2 className="text-2xl md:text-4xl font-bold">Who Should Not Donate?</h2>
      <div className="grid w-11/12 md:w-full mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5">
        <div className="space-y-1 bg-base-300 px-1 py-2 rounded-md">
          <h3 className="text-2xl font-bold">Fever or Infection</h3>
          <img
            className="h-64 w-11/12 mx-auto rounded-md"
            src={feverPhoto}
            alt="one donate save 3 lives photo"
          />
          <p className="font-semibold">
            Anyone with a fever, flu, cold, or active infection should wait
            until fully recovered before donating blood.
          </p>
        </div>
        <div className="space-y-1 bg-base-300 px-1 py-2 rounded-md">
          <h3 className="text-2xl font-bold">Pregnancy & Childbirth</h3>
          <img
            className="h-64 w-11/12 mx-auto rounded-md"
            src={pregnencyPhoto}
            alt="one donate save 3 lives photo"
          />
          <p className="font-semibold">
            Women who are pregnant or have recently given birth should not
            donate until it is medically safe to do so.
          </p>
        </div>
        <div className="space-y-1 bg-base-300 px-1 py-2 rounded-md">
          <h3 className="text-2xl font-bold">Recent Surgery</h3>
          <img
            className="h-64 w-11/12 mx-auto rounded-md"
            src={surgeryPhoto}
            alt="one donate save 3 lives photo"
          />
          <p className="font-semibold">
            People who have had recent surgery, hospitalization, or major
            medical treatment should wait as advised by a doctor.
          </p>
        </div>
        <div className="space-y-1 bg-base-300 px-1 py-2 rounded-md">
          <h3 className="text-2xl font-bold">Medications</h3>
          <img
            className="h-64 w-11/12 mx-auto rounded-md"
            src={medicationPhoto}
            alt="one donate save 3 lives photo"
          />
          <p className="font-semibold">
            Donors taking certain medications may need to delay donation based
            on medical guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoSouldNotDonate;
