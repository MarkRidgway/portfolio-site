import React from 'react'
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { Title, Button } from '../utils/theme';

const ProjectWrapper = styled.div`
  margin-bottom: 2em;
`;

const ProjectImage = styled.div`
  margin-bottom: 1em;

  img{
    max-width: 100%;
  }
`;

const ProjectContent = styled.div``;

const Project = ({ title, image, html, technologies, link }) => (
  <ProjectWrapper>
    <Grid>
      <Row>
        <Col xs={12}>
          <Title>{ title }</Title>
        </Col>
        <Col xs={12} lg={8}>
          <ProjectImage>
            <img src={ image } />
          </ProjectImage>
          <ProjectContent dangerouslySetInnerHTML={{ __html: html }}></ProjectContent>
        </Col>
        <Col xs={12} lg={4}>
          <h2>Technologies Used</h2>
          <ul>
            { technologies.map( (tech) => (
              <li>{ tech }</li>
            ))}
          </ul>
          <Button href={ link }>View Project</Button>
        </Col>
      </Row>
    </Grid>
  </ProjectWrapper>
);

export default Project;
