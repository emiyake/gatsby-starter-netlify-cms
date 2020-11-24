import React from "react";
import { Hero } from "../components/sections/hero.component";
import { AboutUs } from "../components/sections/about-us.section";
import { GetInvestment } from "../components/sections/get-investor.section";
import { BeInvestor } from "../components/sections/be-investor.section";
import { Footer } from "../components/sections/footer.component";

import { GlobalStyle } from "../components/GlobalStyle";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";
import { PartnerSection } from "../components/sections/partner.section";
import { InvestedStartups } from "../components/sections/invested-startups";
import { Header } from "../components/sections/header.component";

const TweenStyled = styled(Grid)`
  height: 700vh;
  .section {
    height: 100vh;
    background-color: red;
  }

  .tween {
    width: 100px;
    height: 100px;
    background-color: red;
    margin: 0 !important;
    position: relative;
  }

  .stagger {
    width: 100px;
    height: 100px;
    left: 700px;
    background-color: #ddd;
    position: relative;
  }
`;

interface HomeProps {
  AboutUsNumbers: {
    angelInvestorsNumber: number;
    investedStartupNumbers: number;
    subscribedStartupsNumber: number;
  };
  investedStartupImages?: { startup: string }[];
}

const Home: React.FC<HomeProps> = ({ AboutUsNumbers, investedStartupImages }) => {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Header />
      <AboutUs AboutUsNumbers={AboutUsNumbers} />
      <GetInvestment />
      <InvestedStartups investedStartupImages={investedStartupImages}/>
      <BeInvestor />
      <PartnerSection />
      <Footer />
      

    </>
  );
};

export default Home;
