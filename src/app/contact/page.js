import React from 'react';
import styles from "./contact.module.css";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Contact() {
    return (
        <>
        <div className={styles.contactContainer}>
            <Header></Header>
            <h2 className={styles.title}>Contact</h2>

            <div className={styles.contentContainer}>
                <div className={styles.textContainer}>

                </div>
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        
                    </form>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

