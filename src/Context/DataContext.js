import { createContext, useEffect, useReducer } from "react";
import { ActionTypes, DataReducer, initialState } from "../Reducer/DataReducer";
import { movies } from "../Data/movies";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  useEffect(() => {
    const localStorageMovies = localStorage.getItem("movies");
    const localStorageGenre = localStorage.getItem("genre");
    const localStorageReleaseYear = localStorage.getItem("releaseYear");
    const localStorageReleaseRating = localStorage.getItem("rating");
    const localStorageReleaseSearch = null;

    if (!localStorageMovies) {
      const formattedMovies = movies?.map((video) => ({
        ...video,
        isWatchlisted: false,
        isStared: false,
      }));
      dispatch({
        type: ActionTypes.INITIAL_SET_MOVIES,
        payload: {
          movies: movies,
        },
      });
      localStorage.setItem("movies", JSON.stringify(formattedMovies));
    } else {
      dispatch({
        type: ActionTypes.INITIAL_SET_MOVIES,
        payload: { movies: JSON.parse(localStorageMovies) },
      });
    }

    if (!localStorageGenre) {
      dispatch({
        type: ActionTypes.INITIAL_SET_GENRE,
        payload: {
          genre: "AllGenre",
        },
      });
      localStorage.setItem("genre", "AllGenre");
    } else {
      dispatch({
        type: ActionTypes.INITIAL_SET_GENRE,
        payload: { genre: localStorageGenre },
      });
    }

    if (!localStorageReleaseYear) {
      dispatch({
        type: ActionTypes.INITIAL_SET_RELEASE_YEAR,
        payload: {
          releaseYear: "ReleaseYear",
        },
      });
      localStorage.setItem("releaseYear", "ReleaseYear");
    } else {
      dispatch({
        type: ActionTypes.INITIAL_SET_RELEASE_YEAR,
        payload: { releaseYear: localStorageReleaseYear },
      });
    }
    if (!localStorageReleaseRating) {
      dispatch({
        type: ActionTypes.INITIAL_SET_RATING,
        payload: { rating: 0 },
      });
      localStorage.setItem("rating", 0);
    } else {
      dispatch({
        type: ActionTypes.INITIAL_SET_RATING,
        payload: { rating: localStorageReleaseRating },
      });
    }

    if (!localStorageReleaseSearch) {
      dispatch({
        type: ActionTypes.INITIAL_SET_RATING,
        payload: {
          search: "",
        },
      });
      localStorage.setItem("search", "");
    } else {
      dispatch({
        type: ActionTypes.INITIAL_SET_RATING,
        payload: { search: localStorageReleaseSearch },
      });
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
