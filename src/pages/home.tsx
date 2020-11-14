import React from "react";
import Layout from "../components/Layout";
import { Hero } from "../components/sections/hero.component";
import { H2 } from "../components/typography";
import { AboutUs } from "../components/sections/about-us.section";
import { GetInvestment } from "../components/sections/get-investor.section";
import { BeInvestor } from "../components/sections/be-investor.section";
import { OurNumbers } from "../components/sections/our-numbers-section";
import { GlobalStyle } from "../components/GlobalStyle";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";


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


const Home: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <AboutUs />
      <GetInvestment />
      <BeInvestor />
      <OurNumbers />
    </>
  );
};

export default Home;
