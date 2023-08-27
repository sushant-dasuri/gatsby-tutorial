import * as React from "react";
import { Link } from "gatsby-link";
import Layout from "../components/Layout";
import * as styles from '../styles/home.module.css'
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  
  return (
    <Layout>
      <section className={styles.header}>
    <div>
      <h2>Design</h2>
      <h3>Develop &nbsp; Deploy</h3>
      <p>UX designer &nbsp; web developer based in Manchester.</p>
      <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
    </div>
   <StaticImage src="../images/banner.png" alt="Home Page Banner" placeholder="blurred" width={800} />
  </section>
    </Layout>
    )
}


