import { graphql, Link } from "gatsby";
import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/project.module.css";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Projects({ data }) {
  console.log(data);

  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Project & Website</h3>
        <div className={styles.projects}>
          {projects.map((project) => {
            return (
              <Link
                to={"/projects/" + project.frontmatter.slug}
                key={project.id}
              >
                <div>
                  <GatsbyImage
                    image={
                      project.frontmatter.thumb.childrenImageSharp[0]
                        .gatsbyImageData
                    }
                  />
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <p>Like what you see? Email me at {contact} for a quote!</p>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectPage {
    projects: allMarkdownRemark {
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
