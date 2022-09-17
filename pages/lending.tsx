import type { NextPage } from "next";
import React from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import debitaABI from "../assets/debitaABI.js";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";

const Lending: NextPage = () => {
  const { config } = usePrepareContractWrite({
    addressOrName: "0x601A1ffa281abcD514eE4e80b45413eCf2Aa25bc",
    contractInterface: debitaABI as any,
    functionName: "createLendingOption",
    onError: (e) => console.log(e),
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.main}>
        <button
          className={styles.button}
          onClick={() => {
            console.log("creating option");
            write?.();
          }}
        >
          Create new Loan
        </button>
        {isLoading && <div>Check Wallet</div>}
        {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
      </div>

      <Footer />
    </div>
  );
};

export default Lending;
