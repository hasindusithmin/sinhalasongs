import '../styles/w3.css'
import '../styles/oswald.css'
import '../styles/global.css'
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className='w3-light-grey'>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>

  )
}

export default MyApp
