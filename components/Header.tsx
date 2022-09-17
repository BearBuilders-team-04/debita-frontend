import { ConnectButton } from "@rainbow-me/rainbowkit";

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";

const debitaLogo = require("../assets/images/debita-logo.png");

const Header: NextPage = () => {

  const router = useRouter();
    console.log(router.pathname)

  return (
    <>
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
            <Link href="/borrow">
              <h3 className={`${styles.navItemText} ${router.pathname == "/borrow" ? styles.active : undefined}`}>Borrow</h3>
            </Link>

            <Link href="/lending">
              <h3 className={`${styles.navItemText} ${router.pathname == "/lending" ? styles.active : undefined}`}>Lending</h3>
            </Link>

            <Link href="/marketplace">
              <h3 className={`${styles.navItemText} ${router.pathname == "/marketplace" ? styles.active : undefined}`}>Marketplace</h3>
            </Link>
          <ConnectButton />
        </div>
      </div>
    </>
  );
};

export default Header;
