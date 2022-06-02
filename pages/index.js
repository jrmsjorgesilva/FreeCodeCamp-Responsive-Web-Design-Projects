import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/css/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FreeCodeCamp - Responsive Web Design Projects</title>
        <meta name="description" content="Responsive Web Design Projects for web design HTML, CSS and javascript certification" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Jorge Machado - <a href="https://jmsoftwares.com.br" >FreeCodeCamp</a>
        </h1>

        <p className={styles.description}>
          Responsive Web Design Projects
        </p>

        <div className={styles.grid}>
          <a href="/tribute" className={styles.card}>
            <h2>Tribute Page &rarr;</h2>
            <p>A tribute page with a beautifull slider.</p>
          </a>

          <a href="/surveyform" className={styles.card}>
            <h2>Survey Form &rarr;</h2>
            <p>Form using form hooks and validation</p>
          </a>

          <a
            href="/landingpage"
            className={styles.card}
          >
            <h2>Product Landing Page &rarr;</h2>
            <p>Product Landing Page using hooks, state and redux.</p>
          </a>

          <a
            href="/docs"
            className={styles.card}
          >
            <h2>Technical Docs &rarr;</h2>
            <p>
              Technical documentation page in order to educate developers.
            </p>
          </a>

          <a
            href="/portfolio"
            className={styles.card}
          >
            <h2>Personal Portifolio &rarr;</h2>
            <p>
              Portfolio Webpage with other projects developed in the course.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
