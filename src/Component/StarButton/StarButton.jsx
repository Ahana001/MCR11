import { useContext } from "react";
import "./StarButton.css";
import { DataContext } from "../../Context/DataContext";
import { ActionTypes } from "../../Reducer/DataReducer";

export function StarButton({ isStared, id }) {
  const { dispatch } = useContext(DataContext);

  return (
    <button
      className="StarButton"
      onClick={(e) => {
        e.stopPropagation();
        dispatch({
          type: ActionTypes.SET_MOVIE_STAR,
          payload: {
            movieId: id,
          },
        });
      }}
    >
      {isStared ? "Starred" : "Star"}
    </button>
  );
}
