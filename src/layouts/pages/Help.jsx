import React from "react";
import { Link } from "react-router";

const Help = () => {
  return (
    <div className="bg-base-200 w-11/12 mx-auto md:px-2 text-red-600 text-center space-y-2 md:space-y-5 py-2 md:py-5 mt-5 md:mt-10 rounded-md">
      <h2 className="text-2xl md:text-4xl font-bold">Help & Support</h2>

      <div className="w-11/12 md:w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          <div className="bg-base-300 py-3 rounded-md space-y-1">
            <h3 className="font-bold text-lg">Getting Started</h3>
            <p className="font-semibold px-1">
              Create an account, complete your profile, and start searching or
              donating blood using Red Help in just a few steps.
            </p>
          </div>
          <div className="bg-base-300 py-3 rounded-md space-y-1">
            <h3 className="font-bold text-lg">Finding Blood</h3>
            <p className="font-semibold px-1">
              Use district and upazila filters to quickly find available blood
              donors. Contact donors securely via email.
            </p>
          </div>
          <div className="bg-base-300 py-3 rounded-md space-y-1">
            <h3 className="font-bold text-lg">Becoming a Donor</h3>
            <p className="font-semibold px-1">
              Register as a voluntary donor, keep your information updated, and
              help save lives when someone needs blood urgently.
            </p>
          </div>
          <div className="bg-base-300 py-3 rounded-md space-y-1">
            <h3 className="font-bold text-lg">Account Issues</h3>
            <p className="font-semibold px-1">
              If you face login or profile issues, try resetting your password
              or updating your information from the dashboard.
            </p>
          </div>
          <div className="bg-base-300 py-3 rounded-md space-y-1">
            <h3 className="font-bold text-lg">Email Not Working?</h3>
            <p className="font-semibold px-1">
              Make sure your email address is correct and check spam folders.
              Red Help uses email-based communication only.
            </p>
          </div>
          <div className="bg-base-300 py-3 rounded-md space-y-1">
            <h3 className="font-bold text-lg">Privacy & Safety</h3>
            <p className="font-semibold px-1">
              Your personal information is protected. Phone numbers are hidden,
              and only verified users can contact donors.
            </p>
          </div>
          <div className="bg-base-300 py-3 rounded-md space-y-1">
            <h3 className="font-bold text-lg">Report a Problem</h3>
            <p className="font-semibold px-1">
              Found incorrect donor data or misuse? Please report it so we can
              keep the platform safe and reliable.
            </p>
          </div>
          <div className="bg-base-300 py-3 rounded-md space-y-1">
            <h3 className="font-bold text-lg">Need More Help?</h3>
            <p className="font-semibold px-1">
              Visit our FAQ section or contact our support team for additional
              assistance and guidance.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-3 mt-5">
          <Link to="/faq">
            <button className="bg-linear-to-br from-red-600 to-red-300 text-white py-1 px-6 border border-white font-bold rounded-md hover:opacity-50">
              View FAQ
            </button>
          </Link>

          <Link to="/contact">
            <button className="bg-linear-to-br from-red-600 to-red-300 text-white py-1 px-6 border border-white font-bold rounded-md hover:opacity-50">
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Help;
