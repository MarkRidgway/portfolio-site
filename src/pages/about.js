import React from 'react'
import Link from 'gatsby-link'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import { Title } from '../utils/theme';

const AboutPage = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <Title>About Me</Title>

        <p>
          There's nothing more that I love than coding and learning. I have a
          knack for problem solving and love a good Javascript or CSS bug to
          squash.
        </p>

        <h2>Profesional Experience</h2>

        <p>
          I have spent a lot of time building small business websites that have
          allowed me to become somewhat of an expert in css (there's always
          room to improve). I've spent the last year upgrading my Javascript
          skills. From vanilla Javascript to React and Angular I've been trying
          to touch all of the popular modern frameworks and tools. I think it's
          important to keep up with industry trends so you always have the right
           solution.
        </p>

        <h2>Personal Hobbies</h2>

        <p>
          I enjoy cooking and trying out new recipes. My favorite recipe is
          French Onion Soup. I enjoy gaming as well and hanging out with my
          daughter.
        </p>

        <Link to='/'>>> Portfolio >></Link>
      </Col>
    </Row>
  </Grid>
);

export default AboutPage
