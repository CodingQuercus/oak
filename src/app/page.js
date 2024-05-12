'use client'

import { motion } from 'framer-motion';
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>

        <div className={styles.nav}>
          <ul className={styles.links}>
            <motion.li 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }} 
              transition={{ delay: 3, duration: 1 }}
            >
              <Link href="/about" className={styles.link}>
                About me
              </Link>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }} 
              transition={{ delay: 3, duration: 1}}
            >
              <Link href="/projects" className={styles.link}>
                Projects
              </Link>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 3, duration: 1 }}
            >
              <Link href="/contact" className={styles.link}>
                Contact
              </Link>
            </motion.li>
          </ul>
        </div>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ delay: 1, duration: 1 }}
        >
          Åke Flatholm
        </motion.h1>

        <motion.p 
          className={styles.text} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 2, duration: 1 }}
        >
          Interaction and Design student at Umeå University
        </motion.p>

      </div>
    </main>
  );
}
