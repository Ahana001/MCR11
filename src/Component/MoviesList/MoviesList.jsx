import { MovieCard } from "../MovieCard/MovieCard";
import "./MoviesList.css";

export function MoviesList({ movieList }) {
  if (movieList.length === 0) return <h2>No Movie Found</h2>;
  return (
    <div className="MoviesListContainer">
      {movieList.map((movie) => {
        return <MovieCard movie={movie} key={movie.id} />;
      })}
    </div>
  );
}
