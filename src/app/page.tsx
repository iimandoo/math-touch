import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Math-Touch</p>
      </div>

      <div className={styles.center}>멘트를 입력하세요</div>
    </main>
  );
}
