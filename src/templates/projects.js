import React from "react";
import Project from '../components/project';

export default ({ data }) => {
  const project = data.markdownRemark;
  console.log(project.frontmatter.projectLink);
  return (
    <Project
      title={ project.frontmatter.title }
      image={ project.frontmatter.projectImage.publicURL }
      html={ project.html }
      link={ project.frontmatter.projectLink }
      technologies={ project.frontmatter.technologies } />
  );
};

export const query = graphql`
  query ProjectsQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        technologies
        projectLink
        projectImage {
          publicURL
        }
      }
    }
  }
`;
