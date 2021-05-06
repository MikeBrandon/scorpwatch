import React, { useState , useEffect } from 'react'
import requests from "../requests";
import axios from "../axios";
import "../css/Banner.css"

function Banner() {
    const [movie, setMovie] = useState([]);
    const imgBaseUrl = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrendingShows);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }
        fetchData();
    },[]);

    console.log(movie);
    const bannerURL = `url("${imgBaseUrl + movie?.backdrop_path}")`;
    function truncate(str, n) {
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }

    return (
        <header className={"banner"} style={{
            backgroundSize: "cover",
            backgroundImage: bannerURL,
            backgroundPosition: "center center"
        }}>
            <div className={"banner_contents"}>
                <h1 className={"banner_title"}>{movie?.title || movie?.name}</h1>
                <div className={"banner_buttons"}>
                    <button className={"banner_button"}>Play</button>
                    <button className={"banner_button"}>Details</button>
                </div>
                <h1 className={"banner_description"}>{truncate(movie?.overview,150)}</h1>
            </div>

            <div className={"banner_fadeBottom"}/>
        </header>
    )
}

export default Banner
