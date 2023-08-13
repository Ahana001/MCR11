import { useContext } from "react";
import { Header } from "../../Component/Header/Header";
import { MoviesList } from "../../Component/MoviesList/MoviesList";
import "./StarredPage.css";
import { DataContext } from "../../Context/DataContext";

export function StarredPage() {
  const { state } = useContext(DataContext);
  const filteredMovies = state.movies.filter((movie) => movie.isStared);
  return (
    <>
      <Header />
      <div className="StarredPageContainer">
        <MoviesList movieList={filteredMovies} />
      </div>
    </>
  );
}
