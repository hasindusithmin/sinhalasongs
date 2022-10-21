import '../styles/w3.css'
import '../styles/inconsolata.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='w3-light-grey w3-content' style={{maxWidth:'1600px'}}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
