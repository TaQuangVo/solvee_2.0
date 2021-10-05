import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeroSection from "../components/HeroSection.js"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Solvee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeroSection></HeroSection>
      </main>
    </div>
  )
}
