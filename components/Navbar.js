import Head from "next/head"
import Link from "next/link";

export default function Navbar() {

    function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
    }

    const style = {
    zIndex: 3,
    width: '300px'
    }

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>
            <nav className="w3-sidebar w3-collapse w3-light-grey w3-animate-left" id="mySidebar" style={style}><br />
                <div className="w3-container" >
                    <span onClick={w3_close} className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
                        <i className="fa fa-remove"></i>
                    </span>
                    <img src="/300.gif" alt="300x300" style={{ width: '45%' }} className="w3-round" /><br /><br />
                    <h4><b>SINHALA SONGS</b></h4>
                    <p className="w3-text-grey w3-small">Download your favorite songs here</p>
                </div>
                <div className="w3-bar-block">
                    <Link href="/"><span onClick={w3_close} className="w3-bar-item w3-button w3-padding"><i className="fa fa-home fa-fw w3-margin-right"></i>HOME</span></Link>
                    <Link href="/library"><span onClick={w3_close} className="w3-bar-item w3-button w3-padding"><i className="fa fa-book fa-fw w3-margin-right"></i>LIBRARY</span></Link>
                </div>
            </nav>
            <div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={w3_close} style={{ cursor: 'pointer' }} title="close side menu" id="myOverlay"></div>
        </>
    )
}