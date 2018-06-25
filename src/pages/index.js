import React, { Component } from 'react'
import ProjectCard from '../components/project-card';

// class IndexPage extends Component{
class IndexPage extends Component {
  render(){
    const projects = this.props.data.allMarkdownRemark.edges;

    return(
      <div>
        { projects.map( (project) => (
          <ProjectCard
            key={ project.node.frontmatter.title.replace(' ', '-')}
            title={ project.node.frontmatter.title }
            image={ project.node.frontmatter.projectImage.publicURL } />
        ))}
      </div>
    )
  }
}

export const query = graphql`
  query ProjectsQuery {
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

export default IndexPage
