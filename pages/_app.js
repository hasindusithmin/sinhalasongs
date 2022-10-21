import '../styles/w3.css'
import '../styles/inconsolata.css'
import '../styles/globals.css'
import '../styles/autocomplete.min.css'
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }) {
 
  return (
    <div className='w3-content' style={{ maxWidth:'1600px',}}>
      <Navbar/>
      <div className="w3-main" style={{marginLeft:'300px'}}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
