import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import * as styles from "../styles/blog.module.css";
import BlogCard from "./BlogCard";

export default function Blog() {
  const data = useStaticQuery(blogQuery);
  const blogs = data.blogs.nodes;
  const contact = data.contactInfo.siteMetadata.contact;
  return (
    <div className={styles.blogs}>
      <div className={styles.leftColumn}>
        {blogs?.map((project) => {
          return (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <BlogCard
                title={project.frontmatter.title}
                date={project.frontmatter.date}
                thumb={project.frontmatter.thumb}
                stack={project.frontmatter.stack}
                html={project.html}
              />
            </Link>
          );
        })}
      </div>
      <div className={styles.rightColumn}></div>
      {/* <p>Like what you see? Email me at {contact} for a quote!</p> */}
    </div>
  );
}
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
          date
          slug
          stack
          title
        }
        id
        html
      }
    }

    contactInfo: site {
      siteMetadata {
        contact
      }
    }
  }
`;
