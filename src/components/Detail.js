import React , { useState, useEffect } from 'react'
import "../css/Detail.css"
import "../css/Banner.css"
import {Link, useParams} from "react-router-dom"
import axios from "../axios";
import img from "../logo/bg.jpg"
import NotFound from "./NotFound";

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

    const productionCompaniesLogoPaths = [];
    {movie["production_companies"] &&
        movie["production_companies"].map(company => {
            if (company.logo_path != null) {
                productionCompaniesLogoPaths.push(company.logo_path);
            }
        });
    }

    console.log(productionCompaniesLogoPaths);

    return (type !== "undefined" && type !== undefined && type !== null ?
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
                            <a href={movie?.homepage}>
                                <button className={"banner_button"}>Homepage</button>
                            </a>
                            <button className={"banner_button"}>Trailer</button>
                        </div>
                        <div className={"desc_div"}>
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
                            <h1 className={"release_length"}>{(type === "movie") ? (movie.release_date && movie.release_date.substring(0, 4)) : `${movie.number_of_seasons} Seasons`}</h1>
                            <h1 className={"banner_description"}>{movie?.overview}</h1>
                            <h1 className={"tagline"}>{movie.tagline && `“${movie?.tagline}”`}</h1>
                            <div className={"rating_div"}>
                                <h1 className={"rating"}>★ {movie.vote_average && movie.vote_average} ({movie.vote_count && movie.vote_count.toLocaleString("en-US")}) votes</h1>
                            </div>
                        </div>
                        <div className={"prod_companies"}>
                            {
                                productionCompaniesLogoPaths.map(path => (
                                    <img className={"logo"} src={`${imgBaseUrl + path}`}/>
                                ))
                            }
                            <div className={"powered"}>
                                <img className={"tmdb"} src={"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"}/>
                                <h1 className={"powered_text"}>Powered By:</h1>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
            :
            <>
                <div className={"detail"}>
                    <NotFound />
                </div>
            </>
    )
}

export default Detail
