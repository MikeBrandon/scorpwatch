import React, { useState , useEffect } from 'react'
import requests from "../requests";
import axios from "../axios";

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

    return (
        <header className={"banner"} style={{
            backgroundSize: "cover",
            backgroundImage: bannerURL,
            backgroundPosition: "center center"
        }}>
            <div className={"banner_contents"}>
                <h1>{movie?.title || movie?.name}</h1>
                <div className={"banner_buttons"}>
                    <button className={"banner_button"}>Play</button>
                    <button className={"banner_button"}>Details</button>
                </div>
                <h1 className={"banner_description"}>{movie?.overview}</h1>
            </div>
        </header>
    )
}

export default Banner
