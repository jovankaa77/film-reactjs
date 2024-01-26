import "./App.css";
import { getMovieList, searchMovie } from "./api";
import { useEffect, useState } from "react";

const App = () => {
  const [getPopularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovie(result);
    });
  }, []);

  console.log({ getPopularMovie: getPopularMovie });
  const PopularMovieList = () => {
    return getPopularMovie.map((movie, i) => {
      return (
        <>
          <div className="movie-wrapper" key={i}>
            <div className="movie-tittle">{movie.title}</div>
            <img
              className="movie-image"
              src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            />
            <div className="movie-date">{movie.release_date}</div>
            <div className="movie-rate">{movie.vote_average}</div>
          </div>
        </>
      );
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Jopp</h1>
        <input className="movie-search" placeholder="Input your movie"></input>
        <div className="movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
};

export default App;
