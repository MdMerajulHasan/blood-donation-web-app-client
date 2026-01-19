import React from "react";
import { FaAngleDown } from "react-icons/fa";

const FAQ = () => {
  return (
    <div className="w-11/12 mx-auto mt-5 md:mt-10 space-y-5">
      <div className="bg-base-200 text-red-600 text-center py-4 md:py-8 rounded-md">
        <h1 className="text-3xl md:text-5xl font-bold">
          Frequently Asked Questions
        </h1>
        <p className="font-semibold mt-2 text-sm md:text-lg">
          Find answers to common questions about Red Help
        </p>
      </div>
      <div className="bg-base-200 p-3 md:p-6 rounded-md space-y-2 text-red-600">
        <details className="collapse bg-base-300" open>
          <summary className="collapse-title font-semibold flex justify-between">
            What is Red Help?
            <FaAngleDown />
          </summary>
          <div className="collapse-content text-sm md:text-base">
            Red Help is an online blood donation platform that connects blood
            seekers with voluntary donors through email-based communication.
          </div>
        </details>
        <details className="collapse bg-base-300">
          <summary className="collapse-title font-semibold flex justify-between">
            Is Red Help free to use?
            <FaAngleDown />
          </summary>
          <div className="collapse-content text-sm md:text-base">
            Yes, Red Help is completely free. It is a non-profit initiative
            created to help people during medical emergencies.
          </div>
        </details>
        <details className="collapse bg-base-300">
          <summary className="collapse-title font-semibold flex justify-between">
            Who can use Red Help?
            <FaAngleDown />
          </summary>
          <div className="collapse-content text-sm md:text-base">
            Anyone can use Red Help—people who need blood, voluntary blood
            donors, and those who want to help save lives.
          </div>
        </details>
        <details className="collapse bg-base-300">
          <summary className="collapse-title font-semibold flex justify-between">
            How does Red Help work?
            <FaAngleDown />
          </summary>
          <div className="collapse-content text-sm md:text-base">
            Users search for blood by blood group and location. Donor
            information is displayed, and seekers can contact donors via email.
          </div>
        </details>
        <details className="collapse bg-base-300">
          <summary className="collapse-title font-semibold flex justify-between">
            How can I become a blood donor?
            <FaAngleDown />
          </summary>
          <div className="collapse-content text-sm md:text-base">
            You can register as a donor by creating an account and providing
            your blood group and location details.
          </div>
        </details>
        <details className="collapse bg-base-300">
          <summary className="collapse-title font-semibold flex justify-between">
            Is my personal information safe?
            <FaAngleDown />
          </summary>
          <div className="collapse-content text-sm md:text-base">
            Yes. Red Help prioritizes privacy. Contact is email-based, and
            personal phone numbers are not publicly displayed.
          </div>
        </details>
        <details className="collapse bg-base-300">
          <summary className="collapse-title font-semibold flex justify-between">
            How do I contact a blood donor?
            <FaAngleDown />
          </summary>
          <div className="collapse-content text-sm md:text-base">
            Blood seekers can contact donors directly through email using the
            information provided on the platform.
          </div>
        </details>
        <details className="collapse bg-base-300">
          <summary className="collapse-title font-semibold flex justify-between">
            How often can I donate blood?
            <FaAngleDown />
          </summary>
          <div className="collapse-content text-sm md:text-base">
            A donor should wait at least 3 to 4 months between two blood
            donations, as advised by medical professionals.
          </div>
        </details>
        <details className="collapse bg-base-300">
          <summary className="collapse-title font-semibold flex justify-between">
            Can I update my donor information?
            <FaAngleDown />
          </summary>
          <div className="collapse-content text-sm md:text-base">
            Yes. Registered users can update their profile information to keep
            donor data accurate and up to date.
          </div>
        </details>
        <details className="collapse bg-base-300">
          <summary className="collapse-title font-semibold flex justify-between">
            What technologies are used to build Red Help?
            <FaAngleDown />
          </summary>
          <div className="collapse-content text-sm md:text-base">
            Red Help is built using the MERN stack (MongoDB, Express, React,
            Node.js) along with Firebase for authentication and email-based
            services.
          </div>
        </details>
        <details className="collapse bg-base-300">
          <summary className="collapse-title font-semibold flex justify-between">
            Is Red Help available across Bangladesh?
            <FaAngleDown />
          </summary>
          <div className="collapse-content text-sm md:text-base">
            Yes. Red Help supports blood searching by district and upazila
            across Bangladesh.
          </div>
        </details>
        <details className="collapse bg-base-300">
          <summary className="collapse-title font-semibold flex justify-between">
            What should I do in an emergency?
            <FaAngleDown />
          </summary>
          <div className="collapse-content text-sm md:text-base">
            In an emergency, search for the required blood group immediately and
            contact available donors through email as soon as possible.
          </div>
        </details>
      </div>
    </div>
  );
};

export default FAQ;
