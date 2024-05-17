"use client"
import styles from "./footer.module.css"
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.messageContainer}>
                <h3 className={styles.text}>Have a project in mind?</h3>
                <p className={styles.text2}>akeflatholm@gmail.com</p>
            </div>
            <div className={styles.linkContainer}>
                <div className={styles.links}>
                    <Link href="https://github.com/CodingQuercus" className={styles.link}>
                        GitHub
                    </Link>
                    <Link href="https://se.linkedin.com/" className={styles.link}>
                        LinkedIn
                    </Link>
                    <Link href="/contact" className={styles.link}>
                        Contact
                    </Link>
                </div>
                <div className={styles.design}>
                    Developed by <strong>Åke Flatholm</strong> @ 2024.
                </div>
            </div>
        </footer>
    )
}

export default Footer;