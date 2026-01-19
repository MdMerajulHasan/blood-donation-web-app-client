import React from "react";
import Banner from "../../components/Banner";
import ContactUs from "../../components/ContactUs";
import WhyDonate from "../../components/WhyDonate";
import Network from "../../components/Network";
import { useLoaderData } from "react-router";
import SearchDonor from "./SearchDonor";
import HowCreateRequest from "../../components/HowCreateRequest";
import AboutSection from "../../components/AboutSection";
import Faq from "../../components/Faq";
import WhoEligibleToDonate from "../../components/WhoEligibleToDonate";
import WhoSouldNotDonate from "../../components/WhoSouldNotDonate";
import PrivacyAndPolicy from "../../components/PrivacyAndPolicy";

const Home = () => {
  const networkData = useLoaderData();
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Banner></Banner>
        <WhyDonate></WhyDonate>
        <Network data={networkData}></Network>
      </div>
      <SearchDonor></SearchDonor>
      <div className="w-11/12 mx-auto">
        <HowCreateRequest></HowCreateRequest>
        <WhoEligibleToDonate></WhoEligibleToDonate>
        <WhoSouldNotDonate></WhoSouldNotDonate>
        </div>
        <ContactUs></ContactUs>
        <div className="w-11/12 mx-auto">
        <AboutSection></AboutSection>
        <PrivacyAndPolicy></PrivacyAndPolicy>
        <Faq></Faq>
      </div>
    </div>
  );
};

export default Home;
