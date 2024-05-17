import styles from "./redesign.module.css";

import Link from "next/link"

import Header from "../components/header/header";

export default function Redesign() {

    return (
        <>
        <Header></Header>
        <div className={styles.container}>
            <Link href="/#projects" className={styles.link}>
                Back to projects
            </Link>
            <h2 className={styles.title}>Redesign of Website</h2>
            <h3>Coming soon</h3>
        </div>
        </>
    )
}
