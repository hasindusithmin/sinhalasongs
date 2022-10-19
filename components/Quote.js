
export default function Quote({quote,author}) {
    const url = 'https://via.placeholder.com/600x395?text='+author
    return (
        <div className="w3-container w3-white w3-margin w3-padding-large">
            <div className="w3-justify">
            <img src={url} alt="Girl Hat" style={{width:'100%'}} className="w3-padding-16" />
                <p className="w3-large"><i>"{quote}"</i></p>
                <p><b>-&nbsp;{author}</b></p>
            </div>
        </div>
    )
}