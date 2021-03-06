import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import ProjectCard from '../components/project-card';

class ProjectList extends Component {
  render(){
    return(
      <Grid>
        <Row>
          { this.props.projects.map( (project) => (
            <Col
              key={ project.key }
              xs={12} md={6}>
              <ProjectCard
                title={ project.title }
                image={ project.image }
                link={ project.link } />
            </Col>
          ))}
        </Row>
      </Grid>
    );
  }
}

export default ProjectList;
