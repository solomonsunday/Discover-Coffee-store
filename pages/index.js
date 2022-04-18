import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner';
import styles from '../styles/Home.module.css'

export default function Home() {

  const handleOnBannerBtnClick = () => {
    console.log("Hi")
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View stores nearby" handlerOnClick={handleOnBannerBtnClick} />
        <div className={styles.heroImage}>
          <Image src="/statics/hero-image.png"
            width={700} height={400}
          />
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
