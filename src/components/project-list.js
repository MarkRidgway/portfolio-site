import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

const Project = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;

  &:first-of-type{
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #ccc;
  }
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

class ProjectList extends Component {
  render(){
    const projects = this.props.data.allMarkdownRemark.edges;

    return(
      <div>
        <h1>Past Projects</h1>
        { this.displayProjects(projects) }
      </div>
    )
  }

  displayProjects(projects){
    return projects.map( (project) => {
      return (
        <Project key={ project.node.frontmatter.title.replace(' ', '-').toLowerCase() }>
          <h2>{ project.node.frontmatter.title }</h2>
          <ProjectImage>
            <img src={ project.node.frontmatter.projectImage.publicURL } />
          </ProjectImage>
        </Project>
      )
    });
  }
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/content/projects/"} },
      sort: {fields: [frontmatter___order], order: ASC}
    ) {
      totalCount
      edges {
        node {
          frontmatter{
            title
            order
            projectImage {
              publicURL
            }
          }
        }
      }
    }
  }
`;

export default ProjectList
