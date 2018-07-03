import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import ProjectList from '../components/project-list';
import { Title } from '../utils/theme';

// class IndexPage extends Component{
class IndexPage extends Component {
  render(){
    return(
      <div>
        <Grid>
          <Row>
            <Col xs='12'>
              <Title>Portfolio</Title>
              <p>These are some of the projects I have worked on in the past.</p>
            </Col>
          </Row>
        </Grid>
        <ProjectList projects={ this.projects() } />
      </div>
    );
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
