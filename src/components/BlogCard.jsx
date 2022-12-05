import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../styles/blog.module.css";
import React from "react";

export default function BlogCard({ title, date, thumb, stack, html }) {
  return (
    <div className={styles.blogCard}>
      <h1>{title}</h1>
      <h3>{date}</h3>
      <GatsbyImage
        className={styles.image}
        image={thumb.childrenImageSharp[0].gatsbyImageData}
      />
      <p>{stack}</p>
      <div
        className={styles.html}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
}
