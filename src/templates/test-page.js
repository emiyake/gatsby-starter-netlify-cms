import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/old/Layout";
import Content, { HTMLContent } from "../components/old/Content";
import { H1} from "../components/typography";
import { Col, Grid, Row } from "react-flexbox-grid";

export const TestPageTemplate = ({
  logos,
}) => {
  return (
    <section>
      <Grid>
        <Row center="xs">
          <H1>Página de testes</H1>
            {console.log(logos)}

          {/* {logos.map(item => {
            console.log(item)
          })} */}
        </Row>
        <Row>
        </Row>  
      </Grid>

    </section>
  );
};

TestPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const TestPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <TestPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      // logos={post.frontmatter.logos}
      content={post.html}
    />
  );
};

TestPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TestPage;

export const testPageQuery = graphql`
query TestPage($id: String!) {
  markdownRemark(id: {eq: $id}) {
    html
    frontmatter {
      title
      # logos {
      #   startup
      # }
    }
  }
}

`;
