import Head from "next/head";
import styles from '@/styles/Styles.module.css'

export default function Recipe() {
  return (
    <>
      <Head>
        <title>Recipe</title>
        <meta name="description" content="Learn more about us" />
      </Head>
      <h1 className={styles.heading}>Recipe</h1>
      <p>This is the About Us page.</p>
    </>
  );
}
