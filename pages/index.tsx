import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import TabComponent from "../components/TabComponent";
import styles from "../styles/Home.module.scss";

const debitaLogo = require("../assets/images/debita-logo.png");

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dēbita</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <Image
            src={debitaLogo}
            alt='logo'
            className={styles.image}
            width={"33.75px"}
            height={"26.25px"}
          />

          <h1 className={styles.title}>P2P Debt Marketplace Protocol</h1>
        </div>

        <div className={styles.navItemsContainer}>
          <div>
            <h3 className={styles.navItemText}>Borrow</h3>
          </div>

          <div>
            <h3 className={styles.navItemText}>Lending</h3>
          </div>

          <div>
            <h3 className={styles.navItemText}>Marketplace</h3>
          </div>

          <ConnectButton />
        </div>
      </div>

      <div className={styles.main}>
        <TabComponent />
      </div>

      <footer className={styles.footer}>
        <a href='https://rainbow.me' target='_blank' rel='noopener noreferrer'>
          Made with ❤️ for the Bear Builders hackathon
        </a>
      </footer>
    </div>
  );
};

export default Home;
