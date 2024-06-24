import Head from "next/head";
import styles from '@/styles/Styles.module.css'

export default function MediaRelease() {
  return (
    <>
      <Head>
        <title>MediaRelease</title>
        <meta name="description" content="Learn more about us" />
      </Head>
      <h1 className={styles.heading}>MediaRelease</h1>
      <p>This is the About Us page.</p>
    </>
  );
}
