import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <a href="./#hero">
                    ÅF
                </a>
            </div>
            <ul className={styles.links}>
                <li>
                    <a href="./#about" className={styles.link}>
                        About me
                    </a>
                </li>
                <li>
                    <a href="./#projects" className={styles.link}>
                        Projects
                    </a>
                </li>
                <li>
                    <a href="./#contact" className={styles.link}>
                        Contact
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
