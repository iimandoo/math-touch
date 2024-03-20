import Image from "next/image";
import styles from "./page.module.css";
import Dashboard from "@/components/Dashboard";

export default function DashboardPage() {
  return (
    <main className={styles.main}>
      <Dashboard />
    </main>
  );
}
