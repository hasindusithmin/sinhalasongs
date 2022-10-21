import songsbysinger from "../public/songsbysinger.json"
import autoComplete from "@tarekraafat/autocomplete.js"
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function SearchArtist() {

    const router = useRouter()

    const searchSongsByArtist = () => {
        const artist = document.getElementById('artist').value;
        router.replace(`/singer/${artist}`);
    }

    useEffect(() => {
        const autoCompleteJS = new autoComplete({
            selector: "#artist",
            placeHolder: "Search for singer ...",
            data: {
                src: Object.keys(songsbysinger),
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
                <input  id="artist" type="search" dir="ltr" spellCheck={false} autoCorrect="off" autoComplete="off" autoCapitalize="off" maxLength="2048" tabIndex="1" />
            </p>
            <p className='w3-center'>
                <button type="button" className="w3-button w3-light-grey" onClick={searchSongsByArtist}>SEARCH ARTIST</button>
            </p>
        </>
    )
}