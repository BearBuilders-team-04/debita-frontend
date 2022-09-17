import type { NextPage } from "next";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { erc20ABI, useContractWrite, usePrepareContractWrite } from "wagmi";
import debitaABI from "../assets/debitaABI.json";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";

const loansData = [
  {
    colateral: "usdc",
    borrow: "metis",
    ratio: "72%",
    term_rate: "8.00%",
    apr: "110%",
    total_term: "10 days",
    installments: "10",
  },
  {
    colateral: "usdc",
    borrow: "metis",
    ratio: "75%",
    term_rate: "15.00%",
    apr: "115%",
    total_term: "30 days",
    installments: "30",
  },
  {
    colateral: "usdc",
    borrow: "metis",
    ratio: "70%",
    term_rate: "5.00%",
    apr: "119%",
    total_term: "2 days",
    installments: "2",
  },
];

const coinLogos = {
  usdc: require("../assets/images/coins/usdc.png"),
  usdc2: require("../assets/images/coins/usdc2.png"),
  metis: require("../assets/images/coins/metis.png"),
  metis2: require("../assets/images/coins/metis2.png"),
};

const ObjectRow = ({ data }) => {
  const { colateral, borrow, ratio, term_rate, apr, total_term, installments } =
    data;
  return (
    <tr>
      <td>
        <Image
          className={styles.coinLogo}
          src={coinLogos[borrow.toLowerCase()]}
          alt={"coin"}
        />
        {colateral.toUpperCase()}
      </td>
      <td>
        <Image
          className={styles.coinLogo}
          src={coinLogos[colateral.toLowerCase()]}
          alt={"coin"}
        />
        {borrow.toUpperCase()}
      </td>
      <td>{ratio}</td>
      <td>{term_rate}</td>
      <td>{apr}</td>
      <td>{total_term}</td>
      <td>{installments}</td>
      <td>
        <button className={styles.borrowButton}>Lend</button>
      </td>
    </tr>
  );
};

const Lending: NextPage = () => {
  const [isCreating, setIsCreating] = useState(false);

  const { config: ercConfig } = usePrepareContractWrite({
    addressOrName: "0x2C26871B79E69DCfBcA6e713AE058397fE3aD66b",
    contractInterface: erc20ABI,
    functionName: "approve",
    args: ["0x08af2e49c331612cE729a324e1D33Fd320E60DE0", 1000000000000],
    onError: (e) => console.log(e),
  });

  const { data, isLoading, isSuccess, write } = useContractWrite({
    addressOrName: "0x08af2e49c331612cE729a324e1D33Fd320E60DE0",
    contractInterface: debitaABI,
    functionName: "createLendingOption",
    args: [
      2, // interest
      1000, // timelap,
      6, // paymentCount
      "1000", // wanted collateral
      10000000000, // amount borrow
      "0x2C26871B79E69DCfBcA6e713AE058397fE3aD66b", // address token
    ],
    mode: "recklesslyUnprepared",
    onError: (e) => console.log(e),
  });

  const {
    data: ercData,
    isLoading: ercIsLoading,
    isSuccess: ercIsSuccess,
    write: ercWrite,
  } = useContractWrite(ercConfig);

  // const {
  //   data: loansData,
  //   isError: loanIsError,
  //   isLoading: loanIsLoading,
  // } = useContractRead({
  //   addressOrName: "0x1b588790B7b13B1B7f80c7c7423927744Da99604",
  //   contractInterface: debitaABI,
  //   functionName: "allLendingOffers",
  //   onError: (e) => console.log(e),
  // });

  // useEffect(() => {
  //   console.log(loansData);
  // }, [loansData]);

  return (
    <div className={styles.container}>
      <Header />
      {!isCreating && (
        <div className={`${styles.main} ${styles.paddingTop}`}>
          <div className={`${styles.borrowGradient} ${styles.borrowHeader}`}>
            <h1>Lend</h1>
            <div>
              <h1>
                Filter <FaArrowDown />
              </h1>
            </div>
          </div>

          <table className={styles.borrowTable}>
            <thead className={styles.borrowGradient}>
              <tr>
                <th>Lend</th>
                <th>Colateral</th>
                <th>Ratio</th>
                <th>Term Rate</th>
                <th>APR</th>
                <th>Total Term</th>
                <th>Installments</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {loansData?.map((object, i) => (
                <ObjectRow data={object} key={i} />
              ))}
            </tbody>
          </table>

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
                  Lend Token
                  <div className={styles.tokenGroup}>
                    <Image
                      className={styles.coinLogo2}
                      src={coinLogos["usdc2"]}
                      alt={"usdc"}
                      width={"30px"}
                      height={"30px"}
                    />
                    USDC
                  </div>
                </div>
                <div className={styles.textInput}>
                  Quantity
                  <input
                    className={styles.input}
                    placeholder={"0"}
                    value={"10"}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.textInput}>
                  Collateral Token
                  <div className={styles.tokenGroup}>
                    <Image
                      className={styles.coinLogo}
                      src={coinLogos["metis2"]}
                      alt={"metis"}
                      width={"30px"}
                      height={"30px"}
                    />
                    METIS
                  </div>
                </div>
                <div className={styles.textInput}>
                  Quantity
                  <input
                    className={styles.input}
                    placeholder={"0"}
                    value={"1"}
                  />
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
                  <input
                    className={styles.input}
                    placeholder={"0"}
                    value={"8"}
                  />
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
              console.log("approving token");
              ercWrite?.();
            }}
          >
            Approve USDC token
          </button>

          <button
            className={styles.button}
            onClick={() => {
              console.log("creating new loan");
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
