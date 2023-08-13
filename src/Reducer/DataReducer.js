import { v4 as uuid } from "uuid";

export const ActionTypes = {
  INITIAL_SET_MOVIES: "INITIAL_SET_MOVIES",
  INITIAL_SET_GENRE: "INITIAL_SET_GENRE",
  INITIAL_SET_RELEASE_YEAR: "INITIAL_SET_RELEASE_YEAR",
  INITIAL_SET_RATING: "INITIAL_SET_RATING",
  INITIAL_SET_SEARCH: "INITIAL_SET_SEARCH",

  SET_MOVIE_STAR: "SET_MOVIE_STAR",
  SET_MOVIE_WATCH: "SET_MOVIE_WATCH",
  SET_GENRE_FILTER: "SET_GENRE_FILTER",
  SET_RELEASE_YEAR: "SET_RELEASE_YEAR",
  SET_RATING: "SET_RATING",
  SET_SEARCH: "SET_SEARCH",
  ADD_NEW_MOVIE: "ADD_NEW_MOVIE",
};
export const initialState = {
  movies: [],
  genre: "",
  releaseYear: "ReleaseYear",
  rating: 0,
  search: "",
};

export function DataReducer(state, action) {
  let result;
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ActionTypes.INITIAL_SET_MOVIES: {
      result = {
        ...state,
        movies: action.payload.movies,
      };
      break;
    }
    case ActionTypes.INITIAL_SET_GENRE: {
      result = {
        ...state,
        genre: action.payload.genre,
      };
      break;
    }
    case ActionTypes.INITIAL_SET_RELEASE_YEAR: {
      result = {
        ...state,
        releaseYear: action.payload.releaseYear,
      };
      break;
    }
    case ActionTypes.INITIAL_SET_RATING: {
      result = {
        ...state,
        rating: action.payload.rating ?? 0,
      };
      break;
    }
    case ActionTypes.INITIAL_SET_SEARCH: {
      result = {
        ...state,
        search: action.payload.search,
      };
      break;
    }
    case ActionTypes.SET_MOVIE_STAR: {
      const updatedMovies = state.movies.map((movie) => {
        if (
          movie.id === +action.payload.movieId ||
          movie.id === action.payload.movieId
        ) {
          return { ...movie, isStared: !movie.isStared };
        } else {
          return movie;
        }
      });
      result = {
        ...state,
        movies: updatedMovies,
      };
      localStorage.setItem("movies", JSON.stringify(updatedMovies));
      break;
    }
    case ActionTypes.SET_MOVIE_WATCH: {
      const updatedMovies = state.movies.map((movie) => {
        if (
          movie.id === +action.payload.movieId ||
          movie.id === action.payload.movieId
        ) {
          return { ...movie, isWatchlisted: !movie.isWatchlisted };
        } else {
          return movie;
        }
      });
      result = {
        ...state,
        movies: updatedMovies,
      };
      localStorage.setItem("movies", JSON.stringify(updatedMovies));
      break;
    }
    case ActionTypes.SET_GENRE_FILTER: {
      result = {
        ...state,
        genre: action.payload.genre,
      };
      localStorage.setItem("genre", action.payload.genre);
      break;
    }
    case ActionTypes.SET_RELEASE_YEAR: {
      result = {
        ...state,
        releaseYear: action.payload.releaseYear,
      };
      localStorage.setItem("releaseYear", action.payload.releaseYear);
      break;
    }
    case ActionTypes.SET_RATING: {
      result = {
        ...state,
        rating: action.payload.rating,
      };
      localStorage.setItem("rating", action.payload.rating);
      break;
    }
    case ActionTypes.SET_SEARCH: {
      result = {
        ...state,
        search: action.payload.search,
      };
      localStorage.setItem("search", action.payload.search);

      break;
    }
    case ActionTypes.ADD_NEW_MOVIE: {
      const updatedMovies = [
        ...state.movies,
        {
          ...action.payload.movie,
          id: uuid(),
          isWatchlisted: false,
          isStared: false,
        },
      ];
      result = {
        ...state,
        movies: updatedMovies,
      };
      localStorage.setItem("movies", JSON.stringify(updatedMovies));
      break;
    }
  }
  return result;
}
