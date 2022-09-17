import type { NextPage } from "next";
import React from "react";
import { Table } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";

const Borrow: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />

      <div className={`${styles.main} ${styles.paddingTop}`}>

        <Table striped size="sm" variant="dark"
          className={styles.borrowTable}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>

      </div>

      <Footer />
    </div>
  );
};

export default Borrow;
