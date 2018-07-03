import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

const Project = styled.div`
  margin-bottom: 2em;
`;

const ProjectTitle = styled.h2`
  margin-bottom: 1em;
`;

const ProjectImage = styled.div`
  margin-bottom: 1em;

  img{
    max-width: 100%;
  }
`;

class ProjectCard extends Component {
  render(){
    return(
      <Project>
        <ProjectTitle>{ this.props.title }</ProjectTitle>
        <ProjectImage>
          <img src={ this.props.image } />
        </ProjectImage>
      </Project>
    )
  }
}

export default ProjectCard
