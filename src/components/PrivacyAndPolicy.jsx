import React from "react";
import privacyPhoto from "../assets/privacy_and_policy-removebg-preview.png";

const PrivacyAndPolicy = () => {
  return (
    <div className="bg-base-200 md:px-2 text-red-600 text-center space-y-2 md:space-y-5 py-2 md:py-5 mt-5 md:mt-10 rounded-md">
      <h2 className="text-2xl md:text-4xl font-bold">
        Privacy & Safety Assurance
      </h2>
      <div className="w-11/12 md:w-full mx-auto flex flex-col-reverse md:flex-row items-center gap-2 md:gap-5 bg-base-300 py-2 rounded-md">
        <div className="mx-auto">
          <ul className="font-semibold text-left list-disc">
            <li>Email-based contact only</li>
            <li>No public phone numbers</li>
            <li>Data is protected</li>
          </ul>
        </div>
        <img
          className="h-64 w-11/12 md:w-[400px] mx-auto rounded-md"
          src={privacyPhoto}
          alt="one donate save 3 lives photo"
        />
      </div>
    </div>
  );
};

export default PrivacyAndPolicy;
