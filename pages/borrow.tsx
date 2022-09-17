import type { NextPage } from "next";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import { FaArrowDown } from 'react-icons/fa';

const ObjectRow = ({ data }) => {
  const { colateral, borrow, ratio, term_rate, apr, total_term, installments } = data
  return (
    <tr>
      <td>{colateral}</td>
      <td>{borrow}</td>
      <td>{ratio}</td>
      <td>{term_rate}</td>
      <td>{apr}</td>
      <td>{total_term}</td>
      <td>{installments}</td>
      <td><button className={styles.borrowButton}>Borrow</button></td>
    </tr>
  )
}

const Borrow: NextPage = () => {
  const data = [
    {
      colateral: 1,
      borrow: "Dai",
      ratio: "DAI",
      term_rate: "5.00%",
      apr: "1000",
      total_term: "1000",
      installments: "Active",
    },
    {
      colateral: 1,
      borrow: "Dai",
      ratio: "DAI",
      term_rate: "5.00%",
      apr: "1000",
      total_term: "1000",
      installments: "Active",
    },
  ]

  return (
    <div className={styles.container}>
      <Header />

      <div className={`${styles.main} ${styles.paddingTop}`}>

        <div className={`${styles.borrowGradient} ${styles.borrowHeader}`}>
          <h1>Borrow</h1>
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
            {data.map((object, i) => <ObjectRow data={object} key={i} />)}
          </tbody>
        </table>

      </div>

      <Footer />
    </div>
  );
};

export default Borrow;
