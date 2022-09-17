import axios from "axios";
import { ConnectButton, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";

const debitaLogo = require("../assets/images/debita-logo.png");

const Header: NextPage = () => {
  const router = useRouter();
  console.log(router.pathname)

  return (
    <>
      <Head>
        <title>Dēbita</title>
        <link rel='icon' href="/static/favicon.ico" />
      </Head>

      <div className={styles.header}>

        <Link href="/">
          <div className={`${styles.titleContainer} ${styles.pointer}`}>
            <Image
              src={debitaLogo}
              alt='logo'
              className={styles.image}
              width={"33.75px"}
              height={"26.25px"}
            />

            <h1 className={styles.title}>P2P Debt Marketplace Protocol</h1>
          </div>
        </Link>

        <div className={styles.navItemsContainer}>
          <Link href="/borrow">
            <h3 className={`${styles.navItemText} ${router.pathname == "/borrow" ? styles.active : undefined} ${styles.pointer}`}>Borrow</h3>
          </Link>

          <Link href="/lending">
            <h3 className={`${styles.navItemText} ${router.pathname == "/lending" ? styles.active : undefined} ${styles.pointer}`}>Lending</h3>
          </Link>

          <Link href="https://tofunft.com/metis">
            <h3 className={`${styles.navItemText} ${router.pathname == "/marketplace" ? styles.active : undefined} ${styles.pointer}`}>Marketplace</h3>
          </Link>
          <ConnectButton />
        </div>
      </div>
    </>
  );
};

export default Header;
