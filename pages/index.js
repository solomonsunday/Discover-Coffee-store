import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner';
import Card from '../components/card';
import styles from '../styles/Home.module.css'

import coffeestoresData from '../data/coffee-stores.json';

export async function getStaticProps(context) {
  return {
    props: {
      coffeestores: coffeestoresData,
    }, // will be passed to the page component as props
  }
}

export default function Home(props) {

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
        {props.coffeestores.length > 0 && <> <h2 className={styles.heading2}> Toronto Stores</h2>
          <div className={styles.cardLayout}>
            {props.coffeestores.map((coffeestore) => {
              return (
                < Card
                  key={coffeestore.id}
                  name={coffeestore.name}
                  imgUrl={coffeestore.imgUrl}
                  href={`/coffee-store/${coffeestore.id}`}
                />
              )
            })}
          </div> </>}
      </main >

      <footer className={styles.footer}>
      </footer>
    </div >
  )
}
