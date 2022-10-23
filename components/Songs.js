import { useRouter } from "next/router"

export default function Songs({songs,singer,handler}) {

    const router = useRouter()

    const gotodownload = e=>{
        const url = `/download/${e.target.id}?artist=${singer}`
        router.replace(url)
    }

    return (
        <>
            <button className="w3-button w3-green" onClick={handler}>&laquo;BACK</button>
            <ul className="w3-ul w3-padding">
                {
                    songs.map(song=><li className="w3-hover w3-hover-pale-green" id={song} key={song} onClick={gotodownload} >{song.replaceAll('_',' ')}</li>)
                }
            </ul>
        </>
    )
}