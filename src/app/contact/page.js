'use client'
import React, { useState } from 'react';
import styles from "./contact.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

import { motion } from 'framer-motion';


export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
            <div className={styles.contactContainer}>
                <Header></Header>
                <h2 className={styles.title}>Contact</h2>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75, duration: 0.5 }}
                >
                <div className={styles.formContainer}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label htmlFor="name" className={styles.label}>Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                        <label htmlFor="email" className={styles.label}>Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                        <label htmlFor="subject" className={styles.label}>Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                        <label htmlFor="message" className={styles.label}>Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={styles.input}
                            rows="4"
                            style={{ maxHeight: '100%', resize: 'none' }}
                            required
                        ></textarea>
                        <div className={styles.buttonContainer}>
                            <button type="submit" className={styles.button}>Send message</button>
                        </div>
                    </form>
                </div>
                </motion.div>
            </div>
            <Footer></Footer>
        </>
    );
};
