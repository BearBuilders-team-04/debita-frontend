import type { NextPage } from "next";
import React from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

const debitaLogo = require("../assets/images/debita-logo.png");
const socials = [
  { src: require("../assets/images/socials/discord.png"), href: "" },
  { src: require("../assets/images/socials/twitter.png"), href: "" },
  { src: require("../assets/images/socials/gitbook.png"), href: "" },
  { src: require("../assets/images/socials/github.png"), href: "" },
  { src: require("../assets/images/socials/medium.png"), href: "" },
]

const Footer: NextPage = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <h1>
            <Image
              src={debitaLogo}
              alt='logo'
              className={`${styles.footerLogo}`}
              width={"33.75px"}
              height={"26.25px"}
            />

            Dēbita.
          </h1>
          <p>The debt marketplace protocol</p>
          <p>2022</p>
          <p>Debita Labs Inc - All rights reserved. </p>
        </div>

        <div>
          <a href='https://rainbow.me' target='_blank' rel='noopener noreferrer'>
            Made with ❤️ for the Bear Builders hackathon
          </a>
          <div>
            {socials.map((object, i) =>
              <a href={object.href}>
                <Image src={object.src} key={i} />
              </a>)}
          </div>
        </div>


      </footer>
    </>
  );
};

export default Footer;
