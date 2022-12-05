import { graphql } from "gatsby";

export const blogQuery = graphql`
  query getBlogStories {
    blogs: allMarkdownRemark {
      nodes {
        frontmatter {
          thumb {
            childrenImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          slug
          stack
          title
        }
        id
      }
    }

    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
