import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { ActionTypes } from "../../Reducer/DataReducer";

export function Header() {
  const { state, dispatch } = useContext(DataContext);
  const location = useLocation();

  return (
    <div className="HeaderContainer">
      <div className="LogoContainer">IMDB</div>
      <div
        className="SearchContainer"
        style={{
          display:
            location.pathname.includes("/addMovie") ||
            location.pathname.includes("/watchlist") ||
            location.pathname.includes("/starred/movies")
              ? "none"
              : "flex",
        }}
      >
        <input
          type="text"
          placeholder="Search a movie by title, cast or director"
          value={state?.search}
          onChange={(e) => {
            dispatch({
              type: ActionTypes.SET_SEARCH,
              payload: {
                search: e.target.value,
              },
            });
          }}
        />
      </div>
      <div className="NavigationBar">
        <NavLink className="NavigationLink" to="/">
          Movies
        </NavLink>
        <NavLink className="NavigationLink" to="/watchlist">
          Watch List
        </NavLink>
        <NavLink className="NavigationLink" to="/starred/movies">
          Starred Movies
        </NavLink>
      </div>
    </div>
  );
}
