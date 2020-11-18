import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Content, { HTMLContent } from "../components/old/Content";
import Home from "../pages/home";

export const HomePageTemplate = ({title, content, contentComponent, investedStartups }) => {
  const PageContent = contentComponent || Content;
  return (
    <div>
      <Home startupsInvested={investedStartups} titleTest={title}/>
      <PageContent className="content" content={content} />
    </div>
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
        investedStartups={frontmatter.title}
        content={html}
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
