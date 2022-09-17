import type { NextPage } from "next";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";

const Lending: NextPage = () => {
  return (
    <div className={styles.container}>
        <Header />

        <div className={styles.main}>
        </div>

        <Footer />
    </div>
  );
};

export default Lending;
