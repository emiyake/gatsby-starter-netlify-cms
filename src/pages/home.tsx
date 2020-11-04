import React from "react";
import Layout from "../components/Layout";
import { Hero } from "../components/sections/hero.component";
import { H2 } from "../components/typography";
import { AboutUs } from "../components/sections/about-us.section";
import { GetInvestment } from "../components/sections/get-investor.section";
import { BeInvestor } from "../components/sections/be-investor.section";
import { OurNumbers } from "../components/sections/our-numbers-section";


const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <GetInvestment />
      <BeInvestor />
      <OurNumbers />
    </>
  );
};

export default Home;

