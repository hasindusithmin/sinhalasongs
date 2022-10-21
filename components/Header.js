

export default function Header({title,desc}) {
    function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("myOverlay").style.display = "block";
      }
    return (
        <header  className='w3-pale-yellow w3-padding'>
        <span><img src="https://via.placeholder.com/300" alt="300x300" style={{width:'65px'}} className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity" /></span>
        <span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onClick={w3_open}><i className="fa fa-bars"></i></span>
        <div className="w3-container">
          <h1><b>{title}</b></h1>
          <div className="w3-section w3-padding-16">
            {desc}
          </div>
        </div>
      </header>
    )

}