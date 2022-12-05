// import { graphql, Link } from "gatsby";
// import * as React from "react";
// import Layout from "../components/Layout";
// import * as styles from "../styles/home.module.css";
// import { GatsbyImage } from "gatsby-plugin-image";
// import Blog from "./blog";

// export default function Home({ data }) {
//   console.log(data);
//   return (
//     <Layout>
//       <Blog />
//       {/* <section className={styles.header}>
//         <div>
//           <h2>Design</h2>
//           <h3>Develop & Deploy</h3>
//           <p>Ux designer & web developer based in Winnipeg</p>
//           <Link className={styles.btn} to="/projects">
//             My Portfolio
//           </Link>
//         </div> */}
//       {/* <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
//       <img src="/banner.png" alt="Site logo" style={{ maxWidth: "100%" }} /> */}
//       {/* </section> */}
//     </Layout>
//   );
// }

// export const query = graphql`
//   query MyQuery {
//     file(relativePath: { eq: "banner.png" }) {
//       childImageSharp {
//         gatsbyImageData(layout: FULL_WIDTH)
//       }
//     }
//   }
// `;

import React from "react";
import { Helmet } from "react-helmet";
import App from "../components/App";

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Jin Blog"}</title>
        <html lang={"en"} />
        <meta name="description" content={"Gatsby Simplefolio"} />
      </Helmet>
      <App />
    </>
  );
};
