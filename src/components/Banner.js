import React, { useState , useEffect } from 'react'
import requests from "../requests";
import axios from "../axios";
import "../css/Banner.css"
import {Link} from "react-router-dom";

function Banner() {
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);
    const imgBaseUrl = "https://image.tmdb.org/t/p/original";
    const watchType = ((Math.floor(Math.random() * 2) + 1 ) === 1) ? "movie" : "tv";
    const config = `/genre/${watchType}/list?api_key=17d6254c7dff6266e1a528c12b3b5d14`;

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get((watchType === "tv") ? requests.fetchTrendingShows : requests.fetchTrendingMovies);
            const genreRequest = await axios.get(config)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            setGenres(genreRequest.data.genres || genreRequest.data.genre_ids);
            return request;
        }
        fetchData();
    },[]);

    const genresArray = [];
    genres.map(item => {
        genresArray[item.id] = item.name;
    })

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
                    <a href={movie?.homepage} target={"_blank"}>
                        <button className={"banner_button"} >Homepage</button>
                    </a>
                    <Link to={`/detail/${movie.id}/${movie?.media_type}`}>
                        <button className={"banner_button"}>Details</button>
                    </Link>
                </div>
                <div className={"genres"}>
                    {
                        movie.genre_ids?.map(genreItem => (
                            <h1 className={"genre"}>★&nbsp;{genresArray[genreItem]}&nbsp;</h1>
                        ))
                    }
                    {
                        movie.genres?.map(genreItem => (
                            <h1 className={"genre"}>★&nbsp;{genresArray[genreItem]}&nbsp;</h1>
                        ))
                    }
                    <h1 className={"genre"}>&nbsp;★</h1>
                </div>
                <h1 className={"banner_description"}>{truncate(movie?.overview,150)}</h1>
            </div>

            <div className={"banner_fadeBottom"}/>
        </header>
    )
}

export default Banner
