import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router";

const Faq = () => {
  return (
    <div className="bg-base-200 md:px-2 text-red-600 text-center space-y-2 md:space-y-5 py-2 md:py-5 mt-5 md:mt-10 rounded-md">
      <h2 className="text-2xl md:text-4xl font-bold">FAQ</h2>
      <div className="w-11/12 md:w-full mx-auto">
        <div className="space-y-1">
          <details
            className="collapse bg-base-300 border border-base-300"
            name="my-accordion-det-1"
            open
          >
            <summary className="collapse-title font-semibold flex justify-between">
              What is Red Help?
              <FaAngleDown />
            </summary>
            <div className="collapse-content text-sm">
              Red Help is an online blood donation platform that helps people
              find blood donors quickly. It connects blood seekers and voluntary
              donors through email.
            </div>
          </details>
          <details
            className="collapse bg-base-300 border border-base-300"
            name="my-accordion-det-1"
          >
            <summary className="collapse-title font-semibold flex justify-between">
              Who can use Red Help? <FaAngleDown />
            </summary>
            <div className="collapse-content text-sm">
              Anyone can use Red Help—people who need blood, voluntary blood
              donors, and those who want to help others.
            </div>
          </details>
          <details
            className="collapse bg-base-300 border border-base-300"
            name="my-accordion-det-1"
          >
            <summary className="collapse-title font-semibold flex justify-between">
              How does Red Help work? <FaAngleDown />
            </summary>
            <div className="collapse-content text-sm">
              Users can search for blood by selecting district and upazila.
              Donor information is shown in a table, and blood seekers can
              contact donors using email.
            </div>
          </details>
        </div>
        <Link to="/faq">
          <button className="bg-linear-to-br my-2 md:my-5 cursor-pointer hover:opacity-50 from-red-600 to-red-300 text-white py-1 w-11/12 md:w-40 lg:w-52 bg-transparent border font-bold text-base md:text-lg border-white rounded-md">
            View FAQs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Faq;
