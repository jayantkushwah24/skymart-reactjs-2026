import React from "react";
import Navbar from "../components/Navbar";
import WelcomeBanner from "../components/WelcomeBanner";
import ActivitySummary from "../components/ActivitySummary";

const Home = () => {
  return (
    <div>
      <WelcomeBanner />
      <ActivitySummary />
    </div>
  );
};

export default Home;
