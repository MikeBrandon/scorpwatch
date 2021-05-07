import React , { useState, useEffect } from 'react'
import "../css/Detail.css"
import "../css/Banner.css"
import { useParams } from "react-router-dom"
import axios from "../axios";

function Detail() {
    const { id } = useParams();
    const { type } = useParams();
    const imgBaseUrl = "https://image.tmdb.org/t/p/original";
    const config = "/genre/tv/list?api_key=17d6254c7dff6266e1a528c12b3b5d14";
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`/${type}/${id}?api_key=17d6254c7dff6266e1a528c12b3b5d14`);
            const genreRequest = await axios.get(config)
            setMovie(request.data);
            setGenres(genreRequest.data.genres);
            return request;
        }
        fetchData();
    }, []);

    const genresArray = [];
    genres.map(item => {
        genresArray[item.id] = item.name;
    })

    console.log(genres);
    console.log(movie);
    const bgURL = `url("${imgBaseUrl + movie?.backdrop_path}")`;
    console.log(`/${type}/${id}?api_key=17d6254c7dff6266e1a528c12b3b5d14`)

    return (
        <>
            <div className={"detail"}>
                <header className={"bg"} style={{
                    backgroundSize: "cover",
                    backgroundImage: bgURL,
                    backgroundPosition: "center center"
                }}>

                    <div className={"banner_contents"}>
                        <h1 className={"banner_title"}>{movie?.title || movie?.name}</h1>
                        <div className={"banner_buttons"}>
                            <button className={"banner_button"}>Play</button>
                            <button className={"banner_button"}>Trailer</button>
                        </div>
                        <div className={"genres"}>
                            {
                                movie.genre_ids?.map(genreItem => (
                                    <h1 className={"genre"}>★&nbsp;{genresArray[genreItem]}&nbsp;</h1>
                                ))
                            }
                            {
                                movie.genres?.map(genreItem => (
                                    <h1 className={"genre"}>★&nbsp;{genreItem.name}&nbsp;</h1>
                                ))
                            }
                            <h1 className={"genre"}>&nbsp;★</h1>
                        </div>
                        <h1 className={"banner_description"}>{movie?.overview}</h1>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Detail
