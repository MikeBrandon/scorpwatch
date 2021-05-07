import './App.css';
import React from "react";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
        <Nav/>
        <Banner/>
      <Row title="Trending Movies" fetchUrl={requests.fetchTrendingMovies} />
      <Row title="Trending Shows" fetchUrl={requests.fetchTrendingShows} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies} isLargeRow/>
      <Row title="Top Rated Shows" fetchUrl={requests.fetchTopRatedShows} isLargeRow/>
    </div>
  );
}

export default App;
