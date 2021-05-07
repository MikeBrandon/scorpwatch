import React from 'react'
import Banner from "./Banner";
import Row from "./Row";
import requests from "../requests";

function Home() {
    return (
        <div>
            <Banner/>
            <Row title="Trending Movies" fetchUrl={requests.fetchTrendingMovies} type={"movie"}/>
            <Row title="Trending Shows" fetchUrl={requests.fetchTrendingShows} type={"tv"}/>
            <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies} type={"movie"}/>
            <Row title="Top Rated Shows" fetchUrl={requests.fetchTopRatedShows} type={"tv"}/>
        </div>
    )
}

export default Home
