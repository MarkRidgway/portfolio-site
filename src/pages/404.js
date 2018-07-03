import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

const NotFoundPage = () => (
  <Grid>
    <Row>
      <Col>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Col>
    </Row>
  </Grid>
);

export default NotFoundPage;
