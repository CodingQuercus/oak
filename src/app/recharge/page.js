import styles from "./recharge.module.css";

import Link from "next/link";

import Header from "../components/header/header";

export default function ReCharge() {

    return (
        <>
        <Header></Header>
        <div className={styles.container}>
            <Link href="/#projects" className={styles.link}>
                Back to projects
            </Link>
            <h2 className={styles.title}>ReCharge</h2>
            <h3>Coming soon</h3>

        </div>
        </>
    )
}
