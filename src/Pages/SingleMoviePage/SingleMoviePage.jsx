import "./SingleMoviePage.css";

import { useContext } from "react";
import { Header } from "../../Component/Header/Header";
import "./SingleMoviePage.css";
import { DataContext } from "../../Context/DataContext";
import { useParams } from "react-router-dom";
import { StarButton } from "../../Component/StarButton/StarButton";
import { AddToWatchListButton } from "../../Component/AddToWatchListButton/AddToWatchListButton";

export function SingleMoviePage() {
  const { state } = useContext(DataContext);
  const { movieID } = useParams();

  const findMovie = state.movies.find(
    (movie) => movie.id === +movieID || movie.id === movieID
  );

  return (
    <>
      <Header />
      <div className="SingleMoviePageContainer">
        <div className="SingleMovieContainer">
          <div className="SingleMovieImageContainer">
            <img src={findMovie?.imageURL} alt={findMovie?.title} />
          </div>
          <div className="SingleMovieDetails">
            <h2>{findMovie?.title}</h2>
            <p className="SingleMovieSummary">{findMovie?.summary}</p>
            <p>Year: {findMovie?.year}</p>
            <p>Genre: {findMovie?.genre?.join(",")}</p>
            <p>Rating: {findMovie?.rating}</p>
            <p>Director: {findMovie?.director}</p>
            <p>Writer: {findMovie?.writer}</p>
            <p>Cast: {findMovie?.cast?.join(",")}</p>
            <div className="SingleMovieActionButton">
              <StarButton isStared={findMovie?.isStared} id={findMovie?.id} />
              <AddToWatchListButton
                isWatchlisted={findMovie?.isWatchlisted}
                id={findMovie?.id}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
