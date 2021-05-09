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
                            <h1 className={"banner_description"}>{movie?.overview}</h1>
                            <h1 className={"tagline"}>{movie.tagline && `“${movie?.tagline}”`}</h1>
                            <div className={"rating_div"}>
                                <h1 className={"rating"}>★ {movie.vote_average} ({movie.vote_count.toLocaleString("en-US")}) votes</h1>
                            </div>
                        </div>
                        {
                            productionCompaniesLogoPaths.length > 0 ?
                                <div className={"prod_companies"}>
                                    {
                                        productionCompaniesLogoPaths.map(path => (
                                            <img className={"logo"} src={`${imgBaseUrl + path}`}/>
                                        ))
                                    }
                                </div> : ""
                        }
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
