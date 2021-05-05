const API_KEY = "17d6254c7dff6266e1a528c12b3b5d14";

const requests = {
    fetchTrendingMovies: '/trending/movie/week?api_key=' + API_KEY + "&language=en-US",
    fetchTrendingShows: '/trending/tv/week?api_key=' + API_KEY + "&language=en-US",
    fetchTopRatedMovies: '/movie/top_rated?api_key=' + API_KEY + "&language=en-US",
    fetchTopRatedShows: '/tv/top_rated?api_key=' + API_KEY + "&language=en-US",
    fetchActionMovies: '/discover/movie?api_key=' + API_KEY + "&with_genres=28",
    fetchActionShows: '/discover/tv?api_key=' + API_KEY + "&with_genres=28",
    fetchAdventureMovies: '/discover/movie?api_key=' + API_KEY + "&with_genres=12",
    fetchAdventureShows: '/discover/tv?api_key=' + API_KEY + "&with_genres=12",
    fetchAnimationMovies: '/discover/movie?api_key=' + API_KEY + "&with_genres=16",
    fetchAnimationShows: '/discover/tv?api_key=' + API_KEY + "&with_genres=16",
    fetchComedyMovies: '/discover/movie?api_key=' + API_KEY + "&with_genres=35",
    fetchComedyShows: '/discover/tv?api_key=' + API_KEY + "&with_genres=35",
    fetchCrimeMovies: '/discover/movie?api_key=' + API_KEY + "&with_genres=80",
    fetchCrimeShows: '/discover/tv?api_key=' + API_KEY + "&with_genres=80",
    fetchDocumentaryMovies: '/discover/movie?api_key=' + API_KEY + "&with_genres=99",
    fetchDocumentaryShows: '/discover/tv?api_key=' + API_KEY + "&with_genres=99",
    fetchDramaMovies: '/discover/movie?api_key=' + API_KEY + "&with_genres=18",
    fetchDramaShows: '/discover/tv?api_key=' + API_KEY + "&with_genres=18",
    fetchFamilyMovies: '/discover/movie?api_key=' + API_KEY + "&with_genres=10751",
    fetchFamilyShows: '/discover/tv?api_key=' + API_KEY + "&with_genres=10751",
    fetchFantasyMovies: '/discover/movie?api_key=' + API_KEY + "&with_genres=14",
    fetchFantasyShows: '/discover/tv?api_key=' + API_KEY + "&with_genres=14",
    fetchHistoryMovies: '/discover/movie?api_key=' + API_KEY + "&with_genres=36",
    fetchHistoryShows: '/discover/tv?api_key=' + API_KEY + "&with_genres=36",
    fetchHorrorMovies: '/discover/movie?api_key=' + API_KEY + "&with_genres=27",
    fetchHorrorShows: '/discover/tv?api_key=' + API_KEY + "&with_genres=27",
    fetchMusicMovies: '/discover/movie?api_key=' + API_KEY + "&with_genres=10402",
    fetchMusicShows: '/discover/tv?api_key=' + API_KEY + "&with_genres=10402",
    fetchMysteryMovies: '/discover/movie?api_key=' + API_KEY + "&with_genres=9648",
    fetchMysteryShows: '/discover/tv?api_key=' + API_KEY + "&with_genres=9648",
    fetchRomanceMovies: '/discover/movie?api_key=' + API_KEY + "&with_genres=10749",
    fetchRomanceShows: '/discover/tv?api_key=' + API_KEY + "&with_genres=10749",
    fetchSciFiMovies: '/discover/movie?api_key=' + API_KEY + "&with_genres=878",
    fetchSciFiShows: '/discover/tv?api_key=' + API_KEY + "&with_genres=878",
    fetchThrillerMovies: '/discover/movie?api_key=' + API_KEY + "&with_genres=53",
    fetchThrillerShows: '/discover/tv?api_key=' + API_KEY + "&with_genres=53"
}

export default requests;