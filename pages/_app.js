import '../styles/css/globals.css'
import Layout from '../Components/Layout'
import Nav from '../Components/Nav'
import { store } from '../Components/Redux/Store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Nav />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  )
}

export default MyApp
