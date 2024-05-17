"use client"
import styles from "./hero.module.css"
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id='hero' className={styles.hero}>
            <div className={styles.container}>
                <motion.div 
                    className={styles.card}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 1}}
                >
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
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
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;