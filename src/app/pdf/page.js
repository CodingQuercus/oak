import styles from './pdf.module.css';
import Header from "../components/header"
import Footer from "../components/footer"

export default function Pdf() {
  return (
    <>
    <div className={styles.pdfContainer}>
      <Header></Header>

      <h2 className={styles.title}>My CV</h2>

    </div>
    <Footer></Footer>
    </>
  );
};