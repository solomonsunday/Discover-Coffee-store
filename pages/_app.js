import '../styles/globals.css'
import Footer from './footer'

function MyApp({ Component, pageProps }) {
  return (<>
    <Component {...pageProps} />
    {/* <Footer /> */}
    <footer> Footer</footer>

  </>)
}

export default MyApp
