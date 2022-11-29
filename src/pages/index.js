import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Home({ data }) {
  console.log(data);
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design!!!</h2>
          <h3>Develop & Deploy</h3>
          <p>Ux designer & web developer based in Winnipeg</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio
          </Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
        {/* <img src="/banner.png" alt="Site logo" style={{ maxWidth: "100%" }} /> */}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
