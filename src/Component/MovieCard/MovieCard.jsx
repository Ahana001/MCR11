import { Link } from "react-router-dom";
import { AddToWatchListButton } from "../AddToWatchListButton/AddToWatchListButton";
import { StarButton } from "../StarButton/StarButton";
import "./MovieCard.css";

export function MovieCard({
  movie: { id, title, summary, imageURL, isWatchlisted, isStared },
}) {
  return (
    <div className="MovieCardContainer">
      <Link className="MovieCardImageContainer" to={`/movie/${id}`}>
        <img src={imageURL} alt={title} />
      </Link>
      <div className="MovieCardBodyContainer">
        <h2>{title}</h2>
        <p>{summary}</p>
        <div className="ActionButton">
          <StarButton isStared={isStared} id={id} />
          <AddToWatchListButton isWatchlisted={isWatchlisted} id={id} />
        </div>
      </div>
    </div>
  );
}
