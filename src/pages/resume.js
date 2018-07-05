import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import styled from 'styled-components';
import { Title } from '../utils/theme';
import { lighten } from 'polished'

// Custom styling for the resume
const Resume = styled.div`
  margin: 0 auto;
  max-width: 900px;

  h1, h2, h3, h4{
    margin-bottom: 0.5em;
    color: ${ props => props.theme.colors.black };
  }

  h1{
    /* font-size: 1.5em; */
  }

  h2{
    border-bottom: 1px solid ${ props => props.theme.colors.black };
    margin-top: 1em;
    /* font-family: 'Open Sans'; */
    font-size: 1.6em;
  }

  h3{
    font-family: 'Open Sans';
    font-size: 1.2em;
  }

  h4{
    font-family: 'Open Sans';
    font-weight: 200;
    color: ${props => lighten(0.2, props.theme.colors.black)};
    font-size: 1em;
  }

  ul{
    margin-bottom: 0.5em;
  }

`;

const SkillList = styled.ul`

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
    display: flex;
    flex-wrap: wrap;

    li{

      flex: 1 0 33.3%;
    }
  }
`;

const ResumeSection = styled.div``;

const ResumePage = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <Resume>
          <Title>Mark Ridgway Resume</Title>

          <h2>Summary of Qualifications</h2>

          <h3>Computer &amp; Design Skills</h3>

          <SkillList>
            <li>HTML/CSS/SASS</li>
            <li>PHP/MySQL</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Angular 2</li>
            <li>Ionic 3</li>
            <li>Node.js/Express</li>
            <li>CMS Development</li>
            <li>Wordpress</li>
            <li>Foundation for Emails</li>
            <li>Visual Studio Code</li>
            <li>Adobe Photoshop</li>
            <li>CLI Tools	Git/GitFlow</li>
          </SkillList>

          <h3>Awards &amp; Recognition</h3>

          <ul>
            <li>Certificate of Academic Distinction - Specs Howard School of Media Arts</li>
            <li>ABCD Award (Above and Beyond the Call of Duty) - Specs Howard School of Media Arts</li>
          </ul>

          <h2>Experience</h2>

          <h3>WildWorks - Draper, UT</h3>
          <h4>Front End Engineer (Septermber 2017 - Current)</h4>

          <ul>
            <li>Built a publishing pipeline in Node JS that generates static websites using a CMS, Amazon S3, and a CDN</li>
            <li>Moved legacy websites to publishing platform using Jekyll, Javascript, and SCSS</li>
            <li>Built an Angular/Ionic 3 cross platform app for users to manage game accounts</li>
            <li>Develop build scripts using NPM, Gulp 4, Node JS, and Ruby</li>
            <li>Develop marketing sites and landing pages in collaboration with the Marketing &amp; Licensing team</li>
            <li>Help maintain the high traffic Animal Jam Rails site</li>
          </ul>

          <h3>High Level Marketing - West Bloomfield, MI (Remote)</h3>
          <h4>Full Stack Web Developer (October 2014 - August 2017)</h4>

          <ul>
            <li>Develop user friendly client websites using CSS, HTML5, and Javascript</li>
            <li>Assists in developing responsive front end framework utilizing custom front end modules</li>
            <li>Improve and maintain front end build process utilizing GULP, Bower, &amp; GIT</li>
            <li>Deliver high quality websites that are scalable, flexible, and easy to maintain </li>
            <li>Maintain documentation for development processes and custom CMS</li>
            <li>Understand business requirements with a strong focus on customer and end user UX</li>
            <li>Troubleshooting client technology issues and update existing client websites</li>
            <li>Manage domain renewals, transfers, and ICANN domain compliance</li>
            <li>Manage SSL certificate installations and renewals</li>
            <li>Create hosting accounts and manage email, staging, and website launches</li>
            <li>Implement new features in custom content management system using PHP, MYSQL, and Javascript</li>
            <li>Work collaboratively with Project Management to understand business requirements and performance goals</li>
            <li>Communicate with team remotely while managing various task priorities in a fast paced schedule</li>
          </ul>

          <h3>R&amp;J Manufacturing Co</h3>
          <h4>Technical Drafter/IT Technician (Octover 2014 - August 2017)</h4>

          <ul>
            <li>Create technical drawings used in the production of automotive electrical test products</li>
            <li>Work closely with customers to design and build products to solve complex engineering problems</li>
            <li>Maintain company computers, network, and website</li>
          </ul>

          <h2>Education</h2>

          <h3>Specs Howard School of Media Arts - Southfield, MI</h3>
          <h4>Graphic Design Diploma</h4>

          <ul>
            <li>Fundamentals of Graphic Design	Identity &amp; Branding Design</li>
            <li>Web Design	Digital Imaging with Photoshop</li>
          </ul>

          <h3>Oakland Community College - Farmington Hills, MI</h3>
          <h4>Studied Computer Science - September 2004 to April 2006</h4>

          <ul>
            <li>Object-Oriented Programing (Java)</li>
            <li>Object-Oriented Programming C++</li>
            <li>Introduction to Database Systems</li>
            <li>Intro to Software Engineer (JAVA)</li>
          </ul>
          <Link to='/'>>> Portfolio >></Link>
        </Resume>
      </Col>
    </Row>
  </Grid>
);

export default ResumePage
