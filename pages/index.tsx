import { ConnectButton } from "@rainbow-me/rainbowkit";

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TabComponent from "../components/TabComponent";
import styles from "../styles/Home.module.scss";

const debitaLogo = require("../assets/images/debita-logo.png");

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.main}>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
