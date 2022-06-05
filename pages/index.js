import Seo from '../Components/Seo'
import Footer from '../Components/Footer'
import HomeContent from '../Components/HomeContent'
import styles from '../styles/css/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Seo />

      <HomeContent />

      <Footer />
      
    </div>
  )
}
