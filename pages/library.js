import Head from "next/head"
import Header from "../components/Header"
import ReactPaginate from 'react-paginate';
import songsbysinger from "../public/songsbysinger.json"
import SearchArtist from "../components/SearchArtist";
import { useState, useEffect } from "react"
import { useRouter } from "next/router";
import Songs from "../components/Songs";



export default function Book() {

    const items = Object.keys(songsbysinger);
    const [shsingers,setshsingers] = useState(true)
    const [songs,setSongs] = useState(null);
    const [singer,setsinger] = useState(null)
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 35;
    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    const backbuttonhandler = ()=>{
        setSongs(null)
        setshsingers(true)
    }

    function Items({ currentItems }) {

        const router = useRouter();
    
    
        const handler = e => {
            const singer = e.target.innerText;
            setshsingers(false)
            setsinger(singer)
            setSongs(songsbysinger[singer])
        }
        
        return (
            <>
                {
                    currentItems
                    &&
                    <ul className="w3-ul">
                        {
                            currentItems.map((item) => (
                                <li key={item} onClick={handler} className="w3-hover w3-hover-pale-green">{item}</li>
                            ))
                        }
                    </ul>
                }
            </>
        );
    }

   

    return (
        <>
            <Head>
                <title>sinhalasongs | Library</title>
            </Head>

            <Header title="SINHALA SONGS" desc="LIBRARY" />

            <div className="w3-row-padding w3-pale-blue">
                <div className="w3-panel w3-center">
                    <img src="/singer.gif" alt='singer' className="w3-image" style={{width:'50%'}} />
                </div>
                <SearchArtist/>
            </div>

            <div className="w3-row-padding w3-pale-red w3-center">
                {
                    songs
                    &&
                    <Songs songs={songs} singer={singer} handler={backbuttonhandler}/>
                }

                {
                    shsingers
                    &&
                    <>
                        <Items currentItems={currentItems} />
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="&raquo;"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="&laquo;"
                            renderOnZeroPageCount={null}
                            className="w3-bar"
                            pageClassName="w3-bar-item w3-button w3-border"
                            previousClassName="w3-bar-item w3-button w3-border"
                            nextClassName="w3-bar-item w3-button w3-border"
                            activeClassName="w3-bar-item w3-button w3-pale-green w3-border"
                        />
                    </>
                }

            </div>
        </>
    )
}