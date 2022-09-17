import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";

const socials = [
  { src: require("../assets/images/socials/discord.png"), href: "https://discord.gg/aEPMr47vXh" },
  { src: require("../assets/images/socials/twitter.png"), href: "https://twitter.com/DebitaFinance" },
  { src: require("../assets/images/socials/gitbook.png"), href: "https://app.gitbook.com/o/ejVJjiw8Hs0iPoLsVOWw/s/SJiMe4bObr8imYiy9BJy/" },
  { src: require("../assets/images/socials/github.png"), href: "https://github.com/Esteban-V/debita-frontend" },
  { src: require("../assets/images/socials/medium.png"), href: "" },
]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.landingMain}>
        <div className={styles.landingHeader}>
          <div>
            <h1 className={styles.landingTitle}>Dēbita.</h1>
            <div className={styles.landingSocials}>
              {socials.map((object, i) =>
                <a href={object.href} target="blank" key={i}>
                  <Image src={object.src} key={i} />
                </a>)}
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Home;
