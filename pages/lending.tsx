import type { NextPage } from "next";
import React, { useState } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import debitaABI from "../assets/debitaABI.js";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";

const Lending: NextPage = () => {
  const [isCreating, setIsCreating] = useState(false);
  const { config } = usePrepareContractWrite({
    addressOrName: "0x1b588790B7b13B1B7f80c7c7423927744Da99604",
    contractInterface: debitaABI,
    functionName: "createLendingOption",
    args: [],
    onError: (e) => console.log(e),
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  return (
    <div className={styles.container}>
      <Header />
      {!isCreating && (
        <div className={`${styles.main} ${styles.paddingTop}`}>
          <button
            className={styles.button}
            onClick={() => {
              setIsCreating(true);
            }}
          >
            Create new Loan
          </button>
        </div>
      )}

      {isCreating && (
        <div
          className={`${styles.main} ${styles.paddingTop} ${styles.createContainer} `}
        >
          <div className={styles.createFieldsGroup}>
            <div className={styles.inputsGroup}>
              <div className={styles.inputGroup}>
                <div className={styles.textInput}>
                  Collateral Token
                  <input className={styles.input} placeholder={"ETH"} />
                </div>
                <div className={styles.textInput}>
                  Quantity
                  <input className={styles.input} placeholder={"0"} />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.textInput}>
                  Lend Token
                  <input className={styles.input} placeholder={"USDC"} />
                </div>
                <div className={styles.textInput}>
                  Quantity
                  <input className={styles.input} placeholder={"0"} />
                </div>
              </div>
            </div>

            <span className={styles.bottomText}>Ratio - </span>
          </div>

          <div className={styles.createFieldsGroup}>
            <div className={styles.inputsGroup}>
              <div className={styles.inputGroup}>
                <div className={styles.textInput}>
                  Total Term
                  <input className={styles.input} placeholder={"Days"} />
                </div>
                <div className={styles.textInput}>
                  Installments
                  <input className={styles.input} placeholder={"Quantity"} />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.textInput}>
                  Fixed Rate
                  <input className={styles.input} placeholder={"0"} />
                </div>
              </div>
            </div>

            <span className={styles.bottomText}>APR - </span>
          </div>

          <div className={styles.createFieldsGroup}>
            <div className={styles.inputsGroup}>
              <div className={styles.inputGroup}>
                <div className={styles.textInput}>
                  Whitelisted borrowers
                  <input className={styles.input2} placeholder={"0x.."} />
                </div>
              </div>
            </div>
          </div>

          <button
            className={styles.button}
            onClick={() => {
              console.log("creating new loan");
              setIsCreating(true);
              write?.();
            }}
          >
            Create new Loan
          </button>
          {isLoading && <div>Check Wallet</div>}
          {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Lending;
