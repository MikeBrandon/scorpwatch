import React , { useState , useEffect } from 'react'
import "../css/Genre.css"
import {Link, useParams} from "react-router-dom"
import axios from "../axios";
import img from "../logo/bg.jpg";

function Genre() {
    const { type } = useParams()
    const { id } = useParams()
    const { page } = useParams()

    const imgBaseUrl = "https://image.tmdb.org/t/p/original"
    const tvGenreList = "/genre/tv/list?api_key=17d6254c7dff6266e1a528c12b3b5d14";
    const movieGenreList = "/genre/movie/list?api_key=17d6254c7dff6266e1a528c12b3b5d14";

    const [movies, setMovies] = useState([])
    const [tvGenres, setTvGenres] = useState([])
    const [movieGenres, setMovieGenres] = useState([])

    useEffect(() => {
        async function fetchData() {
            const movieRequest = await axios.get(`/discover/${type}?api_key=17d6254c7dff6266e1a528c12b3b5d14&with_genres=${id}&page=${page}`)
            setMovies(movieRequest.data.results)

            if (type === "movie") {
                const movieGenreRequest = await axios.get(movieGenreList)
                setMovieGenres(movieGenreRequest.data.genres)
            } else {
                const tvGenreRequest = await axios.get(tvGenreList)
                setTvGenres(tvGenreRequest.data.genres)
            }
            return movieRequest
        }
        fetchData()
    },[])

    const rndMovie = movies[Math.floor(Math.random() * movies.length - 1)]
    const bgURL = `url("${imgBaseUrl + rndMovie?.backdrop_path}")`

    return (
        <div className="genre_page">
            <header className={"header"} style={{
                backgroundSize: "cover",
                backgroundImage: bgURL,
                backgroundPosition: "center center"
            }}/>
            <div className="content">
                {
                    type==="tv" &&
                    tvGenres.map(genre => (
                        genre.id == id ? (
                            <h2 className="genre_title"> {genre.name} TV Shows </h2>
                        ) : ""
                    ))
                }
                {
                    type==="movie" &&
                    movieGenres.map(genre => (
                        genre.id == id ? (
                            <h2 className="genre_title"> {genre.name} Movies </h2>
                        ) : ""
                    ))
                }
                <div className="movie_list">
                    {movies.map(movie => (
                        <div className="row_poster">
                            <Link to={`/detail/${movie.id}/${type}`}>
                                <img
                                    key={movie.id}
                                    src={`${imgBaseUrl}${movie.poster_path}`}
                                    className={"row_poster"}
                                    alt={movie.name}
                                />
                            </Link>
                        </div>
                    ))
                    }
                </div>
            </div>
            <div className={"powered"}>
                <img className={"tmdb"} src={"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"}/>
                <h1 className={"powered_text"}>Powered By:</h1>
            </div>
        </div>
    )
}

export default Genre
