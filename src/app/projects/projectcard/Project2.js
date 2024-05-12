import styles from "./project.module.css";
import Link from 'next/link';

const Project2 = ({ year, title, desc1, desc2, desc3, imageUrl, projectLink }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={imageUrl} className={styles.image} alt={title} />
            </div>
            <div className={styles.card}>
                <p className={styles.year}>
                    {year}
                </p>
                <h4 className={styles.title}>
                    {title}
                </h4>
                <p className={styles.info}>
                    {desc1}
                    <br></br><br></br>
                    {desc2}
                    <br></br><br></br>
                    {desc3}
                </p>

                <Link href={projectLink} className={styles.link}>
                    Read more &#62;
                </Link>
            </div>
        </div>
    );
};

export default Project2;
