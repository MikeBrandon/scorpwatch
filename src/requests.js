const API_KEY = "17d6254c7dff6266e1a528c12b3b5d14";

const requests = {
    fetchTrendingMovies: '/trending/movie/week?api_key=' + API_KEY + "&language=en-US",
    fetchTrendingShows: '/trending/tv/week?api_key=' + API_KEY + "&language=en-US",
    fetchTopRatedMovies: '/movie/top_rated?api_key=' + API_KEY + "&language=en-US",
    fetchTopRatedShows: '/tv/top_rated?api_key=' + API_KEY + "&language=en-US",
    fetchMovies: '/discover/movie?api_key=' + API_KEY + "&with_genres=",
    fetchShows: '/discover/tv?api_key=' + API_KEY + "&with_genres=",
}

export default requests;