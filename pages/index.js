import Head from 'next/head'

export default function Home() {
  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }

  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  return (
    <>
      <Head>
        <title>sinhalasongs | home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header id="portfolio">
        <span ><img src="https://www.w3schools.com/w3images/avatar_g2.jpg" style={{width:'65px'}} className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity" /></span>
        <span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onClick={w3_open}><i className="fa fa-bars"></i></span>
        <div className="w3-container">
          <h1><b>SINHALA SONGS</b></h1>
          <div className="w3-section w3-bottombar w3-border-black w3-padding-16">
            Download your favorite songs here
          </div>
        </div>
      </header>

    </>
  )
}
