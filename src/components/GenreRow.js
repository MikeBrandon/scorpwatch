import React, {useState, useEffect} from 'react'
import "../css/GenreRow.css"
import axios from "../axios";
import {capitalizeFirstLetter} from "./capitalizeFirstLetter";
import {Link} from "react-router-dom";

function GenreRow({type}) {
    const [tvGenres, setTvGenres] = useState([]);
    const [movieGenres, setMovieGenres] = useState([]);
    const tvGenreList = "/genre/tv/list?api_key=17d6254c7dff6266e1a528c12b3b5d14";
    const movieGenreList = "/genre/movie/list?api_key=17d6254c7dff6266e1a528c12b3b5d14";

    useEffect( () => {
        async function fetchData() {
            const tvGenreRequest = await axios.get(tvGenreList)
            const movieGenreRequest = await axios.get(movieGenreList)
            setTvGenres(tvGenreRequest.data.genres)
            setMovieGenres(movieGenreRequest.data.genres)
            return movieGenreRequest & tvGenreRequest
        }
        fetchData()
    },[])

    console.log(tvGenres)
    console.log(movieGenres)

    return (
        <div className="genre_row">
            <h2>{capitalizeFirstLetter(`${type} Genres`)}</h2>
            <div className="genre_posters">
                {type==="tv" ?
                    tvGenres.map(genre => (
                        <Link className="genre_div" to={`/genre/${type}/${genre.id}/1`} style={{ textDecoration: 'none' }}>
                            <div key={genre.id}>
                                <h4>{genre.name}</h4>
                            </div>
                        </Link>
                    ))
                    :
                    movieGenres.map(genre => (
                        <Link className="genre_div" to={`/genre/${type}/${genre.id}/1`} style={{ textDecoration: 'none' }}>
                            <div key={genre.id}>
                                <h4>{genre.name}</h4>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default GenreRow
