import Head from "next/head"
import Link from "next/link";

export default function Navbar() {

    function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
    }


    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>
            <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" id="mySidebar" style={{zIndex: 3, width: '300px'}}><br />
                <div className="w3-container" >
                    <span onClick={w3_close} className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
                        <i className="fa fa-remove"></i>
                    </span>
                    <img src="https://via.placeholder.com/300" alt="300x300" style={{ width: '45%' }} className="w3-round" /><br /><br />
                    <h4><b>SINHALA SONGS</b></h4>
                    <p className="w3-text-grey w3-small">Download your favorite songs here</p>
                </div>
                <div className="w3-bar-block">
                    <Link href="/"><span onClick={w3_close} className="w3-bar-item w3-button w3-padding"><i className="fa fa-home fa-fw w3-margin-right"></i>HOME</span></Link>
                    <span onClick={w3_close} className="w3-bar-item w3-button w3-padding"><i className="fa fa-microphone fa-fw w3-margin-right"></i>SINGERS</span>
                    <span onClick={w3_close} className="w3-bar-item w3-button w3-padding"><i className="fa fa-music fa-fw w3-margin-right"></i>MUSIC</span>
                    <span onClick={w3_close} className="w3-bar-item w3-button w3-padding"><i className="fa fa-rss fa-fw w3-margin-right"></i>ABOUT</span>
                </div>
            </nav>
            <div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={w3_close} style={{ cursor: 'pointer' }} title="close side menu" id="myOverlay"></div>
        </>
    )
}