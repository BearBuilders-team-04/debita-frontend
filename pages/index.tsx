import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import TabComponent from '../components/TabComponent';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Debita</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <h1 className={styles.title}>
          Debita
        </h1>
        
        <ConnectButton />
      </div>

      <div className={styles.main}>
          <TabComponent/>
      </div>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" target="_blank" rel="noopener noreferrer">
          Made with ❤️ for the Bear Builders hackathon
        </a>
      </footer>
    </div>
  );
};

export default Home;
