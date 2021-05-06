import './App.css';
import React from "react";
import Row from "./components/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
        <Row title="Trending Movies" fetchUrl={requests.fetchTrendingMovies}/>
        <Row title="Trending Shows" fetchUrl={requests.fetchTrendingShows} />
    </div>
  );
}

export default App;
