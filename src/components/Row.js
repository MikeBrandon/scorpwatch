import React, { useState , useEffect } from 'react';
import axios from "../axios";
import "../css/Row.css"

function Row({ title , fetchUrl}) {
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
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={"row_poster"}
                        src={`${imgBaseUrl}${movie.poster_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>

        </div>
    )
}

export default Row;