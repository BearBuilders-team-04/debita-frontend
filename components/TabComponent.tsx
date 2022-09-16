import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styles from '../styles/Home.module.scss';

function TabComponent() {
    const [key, setKey] = useState("home");

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k: any) => setKey(k)}
            className="mb-3"
            variant="pills"
        >
            <Tab className={styles.tabContent} eventKey="home" title="Borrow">
                <div className={styles.bigCard}>
                    <div className={styles.cardTitle}>Borrow</div>
                    <div className={styles.cardContent}>
                        <div className={styles.cardContentTitle}>Borrow</div>
                        <div className={styles.cardContentSubtitle}>Borrow</div>    
                    </div>
                </div>
            </Tab>
            
            <Tab className={styles.tabContent} eventKey="profile" title="Lend">
            <div className={styles.bigCard}>
                    <div className={styles.cardTitle}>Lend</div>
                    <div className={styles.cardSubtitle}>Lend</div>   
                    <div className={styles.cardContent}>
                        <div className={styles.cardContentTitle}>Lend</div> 
                    </div>
                </div>
            </Tab>
        </Tabs>
    );
}

export default TabComponent;
