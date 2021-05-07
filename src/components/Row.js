import React, { useState , useEffect } from 'react';
import axios from "../axios";
import "../css/Row.css"
import {Link} from "react-router-dom";

function Row({ title , fetchUrl , isLargeRow , type}) {
    const [movies, setMovies] = useState([]);
    const imgBaseUrl = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    return (
        <div className="row">

            {movies &&
            <>
                <h2>{title}</h2>
                <div className="row_posters">
                    {movies.map(movie => (
                        <div className={`row_poster ${!isLargeRow && "row_posterLarge"}`}>
                            <Link to={`/detail/${movie.id}/${type}`} >
                                <img
                                key={movie.id}
                                src={`${imgBaseUrl}${isLargeRow ? movie.backdrop_path : movie.poster_path}`}
                                className={`row_poster ${!isLargeRow && "row_posterLarge"}`}
                                alt={movie.name}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </>
            }

        </div>
    )
}

export default Row;