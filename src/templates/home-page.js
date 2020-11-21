import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Content, { HTMLContent } from "../components/old/Content";
import Home from "../pages/home-backglog";

export const HomePageTemplate = ({title, content, contentComponent, startupsNumber,investedStartupNumbers }) => {
  const PageContent = contentComponent || Content;
  return (
    <>
  <h2>{title}</h2>
  <h2>{startupsNumber}</h2>
  <h2>{investedStartupNumbers}</h2>
      <PageContent className="content" content={content} />
      <Home startupsInvested={investedStartupNumbers } title={title}/>
      </>
  );
};

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <>
      <HomePageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        startupsNumber={frontmatter.startupsNumber}
        investedStartups={frontmatter.title}
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
        title
      }
    }
  }
`;
