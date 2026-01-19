import React from "react";

const About = () => {
  return (
    <div className="bg-base-200 w-11/12 mx-auto md:px-2 text-red-600 text-center space-y-2 md:space-y-5 py-2 md:py-5 mt-5 md:mt-10 rounded-md">
      <h2 className="text-2xl md:text-4xl font-bold">About Red Help</h2>
      <div className="w-11/12 md:w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          <div className="bg-base-300 px-1 py-2 rounded-md space-y-1">
            <h3 className="font-bold text-lg">Who We Are</h3>
            <p className="font-semibold">
              Red Help is an automated blood donation platform that connects
              blood seekers with voluntary donors through secure email-based
              communication.
            </p>
          </div>
          <div className="bg-base-300 px-1 py-2 rounded-md space-y-1">
            <h3 className="font-bold text-lg">What We Do</h3>
            <p className="font-semibold">
              We help people search for blood by group and location, making the
              process fast, simple, and reliable during emergencies.
            </p>
          </div>
          <div className="bg-base-300 px-1 py-2 rounded-md space-y-1">
            <h3 className="font-bold text-lg">Our Mission</h3>
            <p className="font-semibold">
              Our mission is to raise awareness about voluntary blood donation
              and build a trusted donor network across Bangladesh.
            </p>
          </div>
          <div className="bg-base-300 px-1 py-2 rounded-md space-y-1">
            <h3 className="font-bold text-lg">Our Vision</h3>
            <p className="font-semibold">
              We envision a future where no life is lost due to blood shortage
              and people donate blood regularly with confidence.
            </p>
          </div>
          <div className="bg-base-300 px-1 py-2 rounded-md space-y-1">
            <h3 className="font-bold text-lg">Why Red Help</h3>
            <p className="font-semibold">
              Red Help is a 100% free and non-profit platform focused on
              privacy, speed, and community-driven blood support.
            </p>
          </div>
          <div className="bg-base-300 px-1 py-2 rounded-md space-y-1">
            <h3 className="font-bold text-lg">Privacy & Safety</h3>
            <p className="font-semibold">
              Donor contact is email-based only. Personal phone numbers are not
              publicly displayed to protect user privacy.
            </p>
          </div>
          <div className="bg-base-300 px-1 py-2 rounded-md space-y-1">
            <h3 className="font-bold text-lg">Technology</h3>
            <p className="font-semibold">
              Red Help is built using the MERN stack with Firebase
              authentication to ensure performance, security, and scalability.
            </p>
          </div>
          <div className="bg-base-300 px-1 py-2 rounded-md space-y-1">
            <h3 className="font-bold text-lg">Community Impact</h3>
            <p className="font-semibold px-1">
              By connecting donors and seekers, Red Help helps save lives and
              builds a strong blood donation community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
