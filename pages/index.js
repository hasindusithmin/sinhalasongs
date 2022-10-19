import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import Quote from '../components/Quote'

export default function Home() {

  const [confetti,setConfetti] = useState(false)
  const [quotes,setQuotes] = useState(false)
  const congrate = () => {
    setConfetti(true)
    setTimeout(()=>{setConfetti(false)},5000)
  }

  useEffect(()=>{
    fetch('/quote.json')
      .then(res=>res.json())
      .then(data=>{setQuotes(data)})
  },[])

  return (
    <>
      <Head>
        <title>sinhalasongs | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {confetti && <Confetti width={window.innerWidth}height={window.innerHeight} opacity={0.75} />}
      <header className="w3-container w3-center w3-padding-48 w3-white">
        <h1 className="w3-xxxlarge"><b>SINHALA SONGS</b></h1>
        <h6>Welcome to <span className="w3-tag">sinhalasongs.vercel.app</span></h6>
      </header>
      <header className="w3-display-container w3-wide">
        <Image className="w3-image" src="/music.jpg" alt="Fashion Blog" width="1600" height="1060" />
        <div className="w3-display-left w3-padding-large">
          <h1 className="w3-text-white">MUSIC</h1>
          <h1 className="w3-jumbo w3-text-white w3-hide-small"><b>WITHOUT MUSIC, LIFE WOULD BE A MISTAKE</b></h1>
          <h6><button className="w3-button w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off" onClick={congrate}>CONGRATS</button></h6>
        </div>
      </header>
      <div className='w3-row w3-padding w3-border'>
        <div className='w3-col l8 s12'>
          {quotes && quotes.map(({quote,author})=><Quote key={author} author={author} quote={quote} />)}
        </div>
        <div className='w3-col l4'>
          <div className="w3-white w3-margin">
            <image src="https://via.placeholder.com/300x160" alt="Jane" style={{width:'100%'}} className="w3-grayscale" width={300} />
            <div className="w3-container w3-black">
              <h4>About US</h4>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            </div>
            <hr/>
          </div>
          <div className="w3-white w3-margin">
            <div className="w3-container w3-padding w3-black">
              <h4>Advertise</h4>
            </div>
            <div className="w3-container w3-white">
              <div className="w3-container w3-display-container w3-light-grey w3-section" style={{height:'200px'}}>
                <span className="w3-display-middle">Your AD Here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
