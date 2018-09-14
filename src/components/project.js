import React, { Component } from 'react'
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

class Project extends Component {
  render() {
    const { title, image, html, technologies, link } = this.props;

    return(
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
              { this.projectButton(link) }
            </Col>
          </Row>
        </Grid>
      </ProjectWrapper>
    );
  }

  projectButton(link) {
    if(link) {
      return (
        <Button href={ link }>View Project</Button>
      );
    }
  }
}

export default Project;
