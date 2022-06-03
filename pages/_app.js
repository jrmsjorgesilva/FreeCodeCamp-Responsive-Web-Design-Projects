import '../styles/css/globals.css'
import Layout from '../Components/Layout'
import Nav from '../Components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Nav />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
