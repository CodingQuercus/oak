"use client"
import styles from "./about.module.css"

const About = () => {
    const handleDownload = () => {
        window.open("./CV.pdf");
    };

    return (
        <section id='about' className={styles.aboutContainer}>
            <h2 className={styles.title}>About me</h2>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h3 className={styles.intro}>
                        Hello, Im Åke.
                    </h3>
                    <p className={styles.info}>
                        A Interaction and Design student at Umeå University.
                    </p>
                    <p className={styles.info2}>
                        <br></br>
                        Over the past three years, I&#39;ve been studying to graduate with a Master of Science in Interaction and Design.
                        <br></br>
                        <br></br>
                        Along the way, I&#39;ve gotten experience working with both back-end and front-end development. However, I&#39;ve grown a passion for working with the aspects of UI / UX.
                    </p>
                </div>
                <div className={styles.imageContainer}>
                    <img src="./about-image.png" className={styles.image} alt='Picture of Åke'></img>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <p className={styles.buttonText}>Download my CV:</p>
                <button className={styles.cvButton} onClick={handleDownload}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                        <path d="M15 22.7646L5.625 13.3896L8.25 10.6709L13.125 15.5459V0.264648H16.875V15.5459L21.75 10.6709L24.375 13.3896L15 22.7646ZM3.75 30.2646C2.71875 30.2646 1.83594 29.8975 1.10156 29.1631C0.367188 28.4287 0 27.5459 0 26.5146V20.8896H3.75V26.5146H26.25V20.8896H30V26.5146C30 27.5459 29.6328 28.4287 28.8984 29.1631C28.1641 29.8975 27.2813 30.2646 26.25 30.2646H3.75Z" fill="#F3F3F3" />
                    </svg>
                </button>
            </div>
        </section>
    );
}

export default About;