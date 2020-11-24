import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Content,{ HTMLContent } from "../components/old/Content";
import Home from "../pages/home-backglog";

export const HomePageTemplate = ({
  angelInvestorsNumber,
  investedStartupNumbers,
  subscribedStartupsNumber,
  content
}) => {
  const AboutUsNumbers = {
    angelInvestorsNumber: angelInvestorsNumber,
    investedStartupNumbers: investedStartupNumbers,
    subscribedStartupsNumber: subscribedStartupsNumber,
  };

  return (
    <>
      <Home
        AboutUsNumbers={AboutUsNumbers}
      />
    </>
  );
};

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  investedStartupNumbers: PropTypes.number.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const HomePage = ({ data }) => {
  const { markdownRemark: info } = data;

  return (
    <>
      <HomePageTemplate
        contentComponent={HTMLContent}
        title={info.frontmatter.title}
        investedStartupNumbers={info.frontmatter.investedStartupNumbers}
        angelInvestorsNumber={info.frontmatter.angelInvestorsNumber}
        subscribedStartupsNumber={info.frontmatter.subscribedStartupsNumber}
        content={info.html}
      />
    </>
  );
};

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomePage;

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        investedStartupNumbers
        angelInvestorsNumber
        subscribedStartupsNumber
      }
    }
  }
`;
