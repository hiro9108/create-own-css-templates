import Head from "next/head";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Head>
        <title>Self Intro</title>
      </Head>
      <input className="text-form" type="text" placeholder="text" />

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}
