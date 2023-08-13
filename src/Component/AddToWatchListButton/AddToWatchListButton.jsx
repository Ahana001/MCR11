import "./AddToWatchListButton.css";

import { DataContext } from "../../Context/DataContext";
import { ActionTypes } from "../../Reducer/DataReducer";
import { useContext } from "react";

export function AddToWatchListButton({ isWatchlisted, id }) {
  const { dispatch } = useContext(DataContext);

  return (
    <button
      className="AddToWatchListButton"
      onClick={(e) => {
        e.stopPropagation();
        dispatch({
          type: ActionTypes.SET_MOVIE_WATCH,
          payload: {
            movieId: id,
          },
        });
      }}
    >
      {isWatchlisted ? "Added To Watchlist" : "Add To Watchlist"}
    </button>
  );
}
