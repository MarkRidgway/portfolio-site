import React from "react";
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

export default ({ data }) => {
  const page = data.markdownRemark;
  return (
    <Grid>
      <Row>
        <Col>
          <h1>{page.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </Col>
    </Row>
  </Grid>
  );
};

export const query = graphql`
  query PagesQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
