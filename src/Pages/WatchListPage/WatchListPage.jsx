import { useContext } from "react";
import { Header } from "../../Component/Header/Header";
import { MoviesList } from "../../Component/MoviesList/MoviesList";
import "./WatchListPage.css";
import { DataContext } from "../../Context/DataContext";

export function WatchListPage() {
  const { state } = useContext(DataContext);
  const filteredMovies = state.movies.filter((movie) => movie.isWatchlisted);
  return (
    <>
      <Header />
      <div className="WatchListPageContainer">
        <MoviesList movieList={filteredMovies} />
      </div>
    </>
  );
}
