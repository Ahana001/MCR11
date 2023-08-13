import { useContext } from "react";
import "./Filters.css";
import { DataContext } from "../../Context/DataContext";
import { getYears, rating } from "./utils";
import { ActionTypes } from "../../Reducer/DataReducer";
import { Link } from "react-router-dom";

export function Filters() {
  const { state, dispatch } = useContext(DataContext);

  const set = new Set();
  state.movies.forEach((movie) =>
    movie.genre.forEach((genre) => set.add(genre))
  );
  const genres = Array.from(set);
  const currentYear = new Date().getFullYear();

  const oldestReleaseYear = state.movies.reduce((oldestReleaseYear, movie) => {
    if (oldestReleaseYear > movie.year) {
      oldestReleaseYear = movie.year;
    }
    return oldestReleaseYear;
  }, currentYear);

  if (!state?.genre) {
    return <h2>Loarding..</h2>;
  }
  return (
    <div className="FiltersContainer">
      <h2>Movies</h2>
      <select
        defaultValue={state?.genre}
        onChange={(e) => {
          dispatch({
            type: ActionTypes.SET_GENRE_FILTER,
            payload: {
              genre: e.target.value,
            },
          });
        }}
      >
        {genres.map((genre) => {
          return (
            <option key={genre} value={genre}>
              {genre}
            </option>
          );
        })}
        <option value="AllGenre">All Genre</option>
      </select>
      <select
        defaultValue={state?.releaseYear}
        onChange={(e) => {
          if (e.target.value === "ReleaseYear") {
            dispatch({
              type: ActionTypes.SET_RELEASE_YEAR,
              payload: {
                releaseYear: e.target.value,
              },
            });
          } else {
            dispatch({
              type: ActionTypes.SET_RELEASE_YEAR,
              payload: {
                releaseYear: +e.target.value,
              },
            });
          }
        }}
      >
        {getYears(oldestReleaseYear).map((year) => {
          return (
            <option key={year} value={year}>
              {year}
            </option>
          );
        })}
        <option value="ReleaseYear">Release Year</option>
      </select>
      <select
        defaultValue={state?.rating}
        onChange={(e) => {
          dispatch({
            type: ActionTypes.SET_RATING,
            payload: {
              rating: +e.target.value,
            },
          });
        }}
      >
        {rating.map((rating) => {
          return (
            <option key={rating} value={rating}>
              {rating}
            </option>
          );
        })}
        <option value={0}>Rating</option>
      </select>
      <Link to="/addMovie">
        <button className="AddMovieButton">Add a Movie</button>
      </Link>
    </div>
  );
}
