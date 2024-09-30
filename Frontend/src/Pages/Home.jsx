import React from "react";
import Header from "../Component/Header";
import SpecilityDoctors from "../Component/SpecilityDoctors";
import TopDoctors from "../Component/TopDoctors";
import Banner from "../Component/Banner";

const Home = () => {
  return (
    <div>
      <Header />
      <SpecilityDoctors />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
