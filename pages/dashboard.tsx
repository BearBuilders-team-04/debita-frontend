import type { NextPage } from "next";
import React from "react";
import Footer from "../components/Footer";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import { FaArrowDown } from 'react-icons/fa';

const data = [
  {
    colateral: "usdc",
    borrow: "usdc",
    ratio: "DAI",
    term_rate: "5.00%",
    apr: "1000",
    total_term: "1000",
    installments: "Active",
  },
  {
    colateral: "usdc",
    borrow: "usdc",
    ratio: "DAI",
    term_rate: "5.00%",
    apr: "1000",
    total_term: "1000",
    installments: "Active",
  },
]

const coinLogos = {
  usdc: require("../assets/images/coins/usdc.png"),
  metis: require("../assets/images/coins/metis.png"),
}

const ObjectRow = ({ data, isBorrow }) => {
  const { colateral, borrow, ratio, term_rate, apr, total_term, installments } = data
  return (
    <tr>
      <td>
        <Image
          className={styles.coinLogo}
          src={coinLogos[borrow.toLowerCase()] || coinLogos["metis"]}
        />
        {colateral.toUpperCase()}</td>
      <td>
        <Image
          className={styles.coinLogo}
          src={coinLogos[borrow.toLowerCase()] || coinLogos["metis"]}
        />
        {borrow.toUpperCase()}</td>
      <td>{ratio}</td>
      <td>{term_rate}</td>
      <td>{apr}</td>
      <td>{total_term}</td>
      <td>{installments}</td>
      <td><button className={`${styles.borrowButton} ${!!isBorrow ? undefined : styles.lendingGradient}`}>{isBorrow ? "Borrow" : "Pay Now"}</button></td>
    </tr>
  )
}

const Dashboard: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />

      <div className={`${styles.main}`}>
        <div>
          <div className={`${styles.borrowGradient} ${styles.borrowHeader}`}>
            <h1>My Borrowings</h1>
            <div>
              <h1>Filter  <FaArrowDown /></h1>
            </div>
          </div>

          <table
            className={styles.borrowTable}>
            <thead className={styles.borrowGradient}>
              <tr>
                <th>Colateral</th>
                <th>Borrow</th>
                <th>Ratio</th>
                <th>Term Rate</th>
                <th>APR</th>
                <th>Total Term</th>
                <th>Installments</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((object, i) => <ObjectRow data={object} isBorrow={true} key={i} />)}
            </tbody>
          </table>
        </div>

        <div>
          <div className={`${styles.lendingGradient} ${styles.borrowHeader}`}>
            <h1>My Lendings</h1>
            <div>
              <h1>Filter  <FaArrowDown /></h1>
            </div>
          </div>

          <table
            className={styles.borrowTable}>
            <thead className={styles.lendingGradient}>
              <tr>
                <th>Colateral</th>
                <th>Borrow</th>
                <th>Ratio</th>
                <th>Term Rate</th>
                <th>APR</th>
                <th>Total Term</th>
                <th>Installments</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((object, i) => <ObjectRow data={object} isBorrow={false} key={i} />)}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
