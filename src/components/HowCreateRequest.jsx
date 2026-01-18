import React from "react";

const HowCreateRequest = () => {
  return (
    <div className="bg-base-200 md:px-2 text-red-600 text-center space-y-2 md:space-y-5 py-2 md:py-5 mt-5 md:mt-10 rounded-md">
      <h2 className="text-2xl md:text-4xl font-bold">How To Request Blood?</h2>
      <div className="grid w-11/12 md:w-full mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5">
        <div className="space-y-1 bg-base-300 px-1 py-2 rounded-md">
          <h3 className="text-2xl font-bold">Register</h3>
          <p className="font-semibold">To request blood you should register first. Click join as a donor button in the banner to register.</p>
        </div>
        <div className="space-y-1 px-1 bg-base-300 py-2 rounded-md">
          <h3 className="text-2xl font-bold">Login</h3>
          <p className="font-semibold">After registration login your account. To go login page click login button in the navbar.</p>
        </div>
        <div className="space-y-1 bg-base-300 px-1 py-2 rounded-md">
          <h3 className="text-2xl font-bold">Go To dashboard</h3>
          <p className="font-semibold">
            At the right corner of navbar click user icon/photo. Then select dashboard button.
          </p>
        </div>
        <div className="space-y-1 bg-base-300 px-1 py-2 rounded-md">
          <h3 className="text-2xl font-bold">Go To Create Page</h3>
          <p className="font-semibold">
            Click create option in the sidebar of the dashboard. Which has blood drop plus icon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowCreateRequest;
