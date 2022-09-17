import type { NextPage } from "next";
import React from "react";
import styles from "../styles/Home.module.scss";

const Footer: NextPage = () => {
  return (
    <>
      <footer className={styles.footer}>
        <a href='https://rainbow.me' target='_blank' rel='noopener noreferrer'>
          Made with ❤️ for the Bear Builders hackathon
        </a>
      </footer>
    </>
  );
};

export default Footer;
