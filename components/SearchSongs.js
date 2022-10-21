import songs from "../public/songs.json";
import singerbysongs from "../public/songsbysinger.json"
import autoComplete from "@tarekraafat/autocomplete.js"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function SearchSongs() {

    const router = useRouter()

    const searchSong = () => {
        let song = document.getElementById('song').value;
        song = song.replaceAll(' ','_')
        for (let[singer,value] of Object.entries(singerbysongs)) {
            for (let _ of value) {
                if (_ === song) {
                    router.replace(`/download/${_}?artist=${singer}`)
                    break;
                }
            }
        }
    }

    useEffect(() => {
        const autoCompleteJS = new autoComplete({
            selector: "#song",
            placeHolder: "Search for song ...",
            data: {
                src: songs,
                cache: true,
            },
            resultsList: {
                element: (list, data) => {
                    if (!data.results.length) {
                        // Create "No Results" message element
                        const message = document.createElement("div");
                        // Add class to the created element
                        message.setAttribute("class", "no_result");
                        // Add message text content
                        message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
                        // Append message element to the results list
                        list.prepend(message);
                    }
                },
                noResults: true,
            },
            resultItem: {
                highlight: true
            },
            events: {
                input: {
                    selection: (event) => {
                        const selection = event.detail.selection.value;
                        autoCompleteJS.input.value = selection;
                    }
                }
            }
        });
    }, [])


    return (
        <>
            <p className="w3-center">
                <input  id="song" type="search" dir="ltr" spellCheck={false} autoCorrect="off" autoComplete="off" autoCapitalize="off" maxLength="2048" tabIndex="1" />
            </p>
            <p className='w3-center'>
                <button type="button" className="w3-button w3-light-grey" onClick={searchSong}>SEARCH SONG</button>
            </p>
        </>
    )
}