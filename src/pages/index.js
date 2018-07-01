import React, { Component } from 'react'
import ProjectList from '../components/project-list';

// class IndexPage extends Component{
class IndexPage extends Component {
  render(){
    return(
      <div>
        <ProjectList projects={ this.projects() } />
      </div>
    )
  }

  // cleans proejct data
  projects(){
    const projectsData = this.props.data.allMarkdownRemark.edges;

    return projectsData.reduce( (projectsArray, project) => {
      let key = project.node.frontmatter.title.replace(' ', '-').toLowerCase();
      let title = project.node.frontmatter.title;
      let image = project.node.frontmatter.projectImage.publicURL;

      projectsArray.push({key, title, image});

      return projectsArray;
    }, []);
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
