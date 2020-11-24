import React from "react";
import { Hero } from "../components/sections/hero.component";
import { AboutUs } from "../components/sections/about-us.section";
import { GetInvestment } from "../components/sections/get-investor.section";
import { BeInvestor } from "../components/sections/be-investor.section";
import { Footer } from "../components/sections/footer.component";

import { GlobalStyle } from "../components/GlobalStyle";
import { PartnerSection } from "../components/sections/partner.section";
import { InvestedStartups } from "../components/sections/invested-startups";
import { Header } from "../components/sections/header.component";


const MOCKED_ABOUT_US_NUMBERS = {
  investedStartupNumbers: 7,
  angelInvestorsNumber: 130,
  subscribedStartupsNumber: 842,
}

interface HomeProps {
  AboutUsNumbers: {
    angelInvestorsNumber: number;
    investedStartupNumbers: number;
    subscribedStartupsNumber: number;
  };
}
  

const Home: React.FC<HomeProps> = ({ AboutUsNumbers }) => {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Header />
      <AboutUs AboutUsNumbers={MOCKED_ABOUT_US_NUMBERS} />
      <GetInvestment />
      <InvestedStartups />
      <BeInvestor />
      <PartnerSection />
      <Footer />
    </>
  );
};

export default Home;
