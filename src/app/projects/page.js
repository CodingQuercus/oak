import React from 'react';
import styles from './projects.module.css';

import Header from "../components/header"
import Footer from "../components/footer"

import Project from './project/Project';

export default function Projects() {
    return (
        <>
        <div className={styles.projectContainer}>
            <Header></Header>
            <h2 className={styles.title}>Projects</h2>
            <p className={styles.info}>My most recent projects</p>
            
            <Project
                year="2024"
                title="FikaSpelet"
                desc1="A marketing campaign consisting of a browser game and website for the Swedish company __________."
                desc2="Full-stack project."
                desc3="Developed using React JS, C# and ASP.net core."
                imageUrl="./fika.png"
                projectLink=""
            />
            <Project
                year="2023"
                title="ReCharge"
                desc1="A concept application targeting owners of electrical vehicles with the goal of making their experience better."
                desc2="Prototype and Design-work"
                desc3="Prototype developed in Figma."
                imageUrl="./recharge.png"
                projectLink=""
            />
            <Project
                year="2022"
                title="Redesign of a website"
                desc1="A redesign of a website, with the goal of improving the user experience and functionality."
                desc2="Design work and UX"
                desc3="Developed using React JS."
                imageUrl="./website.png"
                projectLink=""
            />
        </div>
        <Footer></Footer>
        </>
    );
};
