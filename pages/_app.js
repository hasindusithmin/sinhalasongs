import '../styles/w3.css'
import '../styles/oswald.css'
import '../styles/global.css'
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className='w3-light-grey'>
        <Navbar />
        <div className='w3-content' style={{maxWidth:'1600px'}}>
          <Component {...pageProps} />
        </div>
      </main>
    </>

  )
}

export default MyApp
