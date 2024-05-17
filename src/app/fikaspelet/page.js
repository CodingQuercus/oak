import styles from "./fika.module.css";

import Link from "next/link";

import Header from "../components/header/header"

export default function Fika() {

    return (
        <>
        <Header></Header>
        <div className={styles.container}>
            <Link href="/#projects" className={styles.link}>
                Back to projects
            </Link>
            <h2 className={styles.title}>FikaSpelet</h2>
            <h3>Coming soon</h3>

        </div>
        </>
    )
}
