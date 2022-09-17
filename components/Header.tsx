import { ConnectButton } from "@rainbow-me/rainbowkit";
import axios from "axios";
import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAccount, useNetwork, useSignMessage } from "wagmi";
import styles from "../styles/Home.module.scss";

const debitaLogo = require("../assets/images/debita-logo.png");

const Header: NextPage = () => {
  const router = useRouter();
  const { isConnected, address } = useAccount();
  const { chain } = useNetwork();
  const { status } = useSession();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const userData = {
        address,
        chain: chain?.id,
        network: "evm",
      };
      const { data } = await axios.post("/api/auth/request-message", userData, {
        headers: {
          "content-type": "application/json",
        },
      });
      const message = data.message;
      const signature = await signMessageAsync({
        message,
      });

      // redirect user after success authentication to '/user' page
      const { url } = (await signIn("credentials", {
        message,
        signature,
        redirect: false,
        callbackUrl: "/lending",
      })) as any;

      /**
       * instead of using signIn(..., redirect: "/user")
       * we get the url from callback and push it to the router to avoid page refreshing
       */

      push(url);
    };

    if (status === "unauthenticated" && isConnected) {
      handleAuth();
    }
  }, [status, isConnected]);

  return (
    <>
      <Head>
        <title>Dēbita</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <Image
            src={debitaLogo}
            alt="logo"
            className={styles.image}
            width={"33.75px"}
            height={"26.25px"}
          />

          <h1 className={styles.title}>P2P Debt Marketplace Protocol</h1>
        </div>

        <div className={styles.navItemsContainer}>
          <Link href="/borrow">
            <h3
              className={`${styles.navItemText} ${
                router.pathname == "/borrow" ? styles.active : undefined
              }`}
            >
              Borrow
            </h3>
          </Link>

          <Link href="/lending">
            <h3
              className={`${styles.navItemText} ${
                router.pathname == "/lending" ? styles.active : undefined
              }`}
            >
              Lending
            </h3>
          </Link>

          <Link href="/marketplace">
            <h3
              className={`${styles.navItemText} ${
                router.pathname == "/marketplace" ? styles.active : undefined
              }`}
            >
              Marketplace
            </h3>
          </Link>
          <ConnectButton />
        </div>
      </div>
    </>
  );
};

export default Header;
