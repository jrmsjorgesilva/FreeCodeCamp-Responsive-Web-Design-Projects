import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/css/Home.module.css'
import Link from 'next/link'

export default function Home() {
  console.log("styles", styles);
  return (
    <div className={styles.container}>
      <Head>
        <title>FreeCodeCamp - Responsive Web Design Projects</title>
        <meta name="description" content="Responsive Web Design Projects for web design HTML, CSS and javascript certification" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          FreeCodeCamp &nbsp;
          <Link 
            href="https://jmsoftwares.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <a>
              Projects
            </a>
          </Link>
        </h1>

        <p className={styles.description}>
          Responsive Web Design Projects
        </p>

        <div className={styles.grid}>
          <Link 
            href="/tribute" 
          >
            <a className={styles.card}>
              <h2>Tribute Page &rarr;</h2>
              <p>A tribute page with a beautifull slider.</p>
            </a>
          </Link>

          <Link 
            href="/surveyform" 
          >
            <a className={styles.card}>
              <h2>Survey Form &rarr;</h2>
              <p>Form using form hooks and validation</p>
            </a>
          </Link>

          <Link
            href="/landingpage"
          >
            <a className={styles.card}>
              <h2>Product Landing Page &rarr;</h2>
              <p>Product Landing Page using hooks, state and redux.</p>
            </a>
          </Link>

          <Link
            href="/docs"
          >
            <a className={styles.card}>
              <h2>Technical Docs &rarr;</h2>
              <p>
                Technical documentation page in order to educate developers.
              </p>
            </a>
          </Link>

          <Link
            href="/portfolio"
          >
            <a className={styles.card}>
              <h2>Personal Portifolio &rarr;</h2>
              <p>
                Portfolio Webpage with other projects developed in the course.
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link
          href="https://jmsoftwares.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a>
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </Link>
      </footer>
    </div>
  )
}
