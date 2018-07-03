import React from 'react'
import Link from 'gatsby-link'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

const IndexPage = () => (
  <Grid>
    <Row>
      <Col>
        <h1>About Me</h1>

        <p>in progress....</p>

        <Link to="/">Go back home</Link>
        </Col>
    </Row>
  </Grid>
);

export default IndexPage
