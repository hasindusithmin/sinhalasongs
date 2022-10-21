import { useRouter } from "next/router"
import { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
export default function Song() {
    const router = useRouter();

    const {name,artist} = router.query;

    console.log(name,artist);

    const [getSong,setgetSong] = useState(false)
    const [song,setSong] = useState(null)
    const [singer,setSinger] = useState(null)

    if (name !== undefined && getSong === false) {
        setgetSong(true)
        setSong(name)
        setSinger(artist)
    }

    const download = () => {
        const Singer = singer.replaceAll(' ','%20').toLowerCase();
        router.replace(`/api/download?url=https://sinhalasongscloudstorage.on.drv.tw/storage/mp3/${Singer}/${song}.mp3`)
    }

    return (
        <>
            <Head>
                {song && <title>download | {song}</title>}
            </Head>
            {singer  && <Header title={singer} desc={`Download ${song.replaceAll('_',' ')}`} />}
            <div className="w3-row-padding w3-pale-blue">
                <div className="w3-half w3-panel w3-margin-bottom">
                    <div className="w3-white w3-margin">
                        <div className="w3-container w3-padding w3-black">
                            <h4>Download</h4>
                        </div>
                        <div className="w3-container w3-white">
                            <div className="w3-container w3-display-container w3-light-grey w3-section" style={{height:'200px'}}>
                                <span className="w3-display-middle">
                                    <button className="w3-button w3-pale-red" onClick={download}>Click</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w3-half w3-panel w3-margin-bottom">
                    <div className="w3-white w3-margin">
                        <div className="w3-container w3-padding w3-black">
                            <h4>Advertisement</h4>
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