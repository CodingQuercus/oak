'use client'

import React from 'react';
import styles from './projects.module.css';
import { motion } from 'framer-motion';

import ProjectCard from './projectcard/ProjectCard';

const Projects = () => {
    return (
        <section id='projects' className={styles.projectContainer}>
            <h2 className={styles.title}>Projects</h2>
            <p className={styles.info}>My most recent projects</p>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <ProjectCard
                    year="2024"
                    title="FikaSpelet"
                    desc1="A marketing campaign consisting of a browser game and website for the Swedish company __________."
                    desc2="Full-stack project."
                    desc3="Developed using React JS, C# and ASP.net core."
                    imageUrl="./fika.png"
                    projectLink="/fikaspelet"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
            >
                <ProjectCard
                    year="2023"
                    title="ReCharge"
                    desc1="A concept application targeting owners of electrical vehicles with the goal of making their experience better."
                    desc2="Prototype and Design-work"
                    desc3="Prototype developed in Figma."
                    imageUrl="./recharge.png"
                    projectLink="/recharge"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
            >

                <ProjectCard
                    year="2022"
                    title="Redesign of a website"
                    desc1="A redesign of a website, with the goal of improving the user experience and functionality."
                    desc2="Design work and UX"
                    desc3="Developed using React JS."
                    imageUrl="./website.png"
                    projectLink="/redesign"
                />
            </motion.div>
        </section>
    );
};

export default Projects;