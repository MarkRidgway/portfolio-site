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

const ProjectCard = ({ title, image, link }) => (
  <Project>
    <Link to={ link }>
      <ProjectTitle>{ title }</ProjectTitle>
      <ProjectImage>
        <img src={ image } />
      </ProjectImage>
    </Link>
  </Project>
);

export default ProjectCard;
