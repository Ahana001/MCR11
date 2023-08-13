import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

export const useFilterDataHook = () => {
  const { state } = useContext(DataContext);
  let filteredMovies = state?.movies;

  if (state?.genre && state?.genre !== "AllGenre") {
    filteredMovies = filteredMovies.filter((movie) => {
      if (movie?.genre.includes(state.genre)) {
        return true;
      } else {
        return false;
      }
    });
  }

  if (state?.releaseYear && state?.releaseYear !== "ReleaseYear") {
    filteredMovies = filteredMovies.filter((movie) => {
      if (movie?.year === +state?.releaseYear) {
        return true;
      } else {
        return false;
      }
    });
  }
  if (state?.rating && +state?.rating !== 0) {
    filteredMovies = filteredMovies.filter((movie) => {
      if (movie?.rating === +state?.rating) {
        return true;
      } else {
        return false;
      }
    });
  }

  if (state?.search && state?.search !== "") {
    filteredMovies = filteredMovies.filter((movie) => {
      if (
        movie?.title.toLowerCase().includes(state?.search.toLowerCase()) ||
        movie?.director.toLowerCase().includes(state?.search.toLowerCase()) ||
        movie?.cast
          .join(" ")
          .toLowerCase()
          .includes(state?.search.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });
  }

  return filteredMovies;
};
