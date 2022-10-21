import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import songsbysinger from "../../public/songsbysinger.json";
import { useState } from "react";

export default function Name() {

    const router = useRouter()

    const [singer,setSinger] = useState(null)
    const [songs,setSongs] = useState(null)
    const [dupSongs,setdupSong] = useState(null)
    const [getName,setgetName] = useState(false)
    const [notification,setNotification] = useState(null)

    const {name} = router.query;

    if (name !== undefined && getName === false) {
        setgetName(true)
        setSinger(name)
        const _ =  songsbysinger[name].map(song => {
            if (song.includes('_')) return song.replaceAll('_',' ')
            return song
        });
        setSongs(_)
        setdupSong(_)
    }

    const downloadSong = event =>{
        let _ = event.target.id;
        _ = _.replaceAll(' ','_');
        console.log(_);
    }

    const searchSong = e => {
        const value = e.target.value;
        setNotification(null)
        if (value === '') setSongs(dupSongs);
        const _ = songs.filter(song => {
            return song.startsWith(value)
        })
        setSongs(_)
        if (value === '') setSongs(dupSongs)
        if (_.length === 0 && value !== '') setNotification('result not found')
        
    }

    const reRender = e => {
        e.target.value = ''
        setNotification(null)
        setSongs(dupSongs)
    }

    return (
        <>
            <Head>
                {singer && <title>songsbysinger | {singer}</title>}
            </Head>
            {singer  && <Header title={singer} desc={`Download ${singer} songs here`} />}
            <div className="w3-row-padding w3-pale-blue">
                <div className="w3-half w3-panel w3-margin-bottom">
                    {notification && <p className="w3-center w3-text-red" id="notification">{notification}</p>}
                    <input type="search" className="w3-input" placeholder="search ... " onInput={searchSong} onBlur={reRender}/>
                    <ul className="w3-ul">
                        {
                            songs
                            &&
                            songs.map(song => <li className="w3-center w3-hover w3-hover-pale-red" key={song} id={song} onDoubleClick={downloadSong} >{song}</li>)
                        }
                    </ul>
                </div>
                <div className="w3-half w3-panel w3-margin-bottom">
                    
                    <div className="w3-white w3-margin">
                        <div className="w3-container w3-padding w3-black">
                            <h4>Advertisement</h4>
                        </div>
                        {
                            [1,2,3,4,5].map(e=>{
                                return (
                                    <div key={e} className="w3-container w3-white">
                                        <div className="w3-container w3-display-container w3-light-grey w3-section" style={{height:'200px'}}>
                                            <span className="w3-display-middle">Your AD Here</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </>
    )

}