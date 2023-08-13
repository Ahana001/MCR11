import "./AddNewMoviePage.css";

import { Header } from "../../Component/Header/Header";
import { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import { ActionTypes } from "../../Reducer/DataReducer";
// import { useNavigate } from "react-router-dom";

export function AddNewMoviePage() {
  const { dispatch } = useContext(DataContext);
  // const navigator = useNavigate();

  const [newMovieForm, setNewMovieForm] = useState({
    title: "",
    summary: "",
    year: 0,
    cast: [],
    genre: [],
    rating: 0,
    director: "",
    writer: "",
    imageURL: "",
  });

  return (
    <>
      <Header />
      <div className="AddNewMoviePageContainer">
        <h2>Add New Movie</h2>
        <div className="AddNewMovieForm">
          <div className="MovieGenre">
            <div>Genre: </div>
            <textarea
              type="text"
              placeholder="Enter Genre Separeted By Comma(,)"
              value={newMovieForm.genre.join(",")}
              onChange={(e) => {
                setNewMovieForm(() => ({
                  ...newMovieForm,
                  genre: e.target.value.split(","),
                }));
              }}
            />
          </div>
          <div className="MovieTitle">
            <div>Title: </div>
            <input
              type="text"
              value={newMovieForm.title}
              onChange={(e) => {
                setNewMovieForm(() => ({
                  ...newMovieForm,
                  title: e.target.value,
                }));
              }}
            />
          </div>
          <div className="MovieSummary">
            <div>Summary: </div>
            <textarea
              type="text"
              value={newMovieForm.summary}
              onChange={(e) => {
                setNewMovieForm(() => ({
                  ...newMovieForm,
                  summary: e.target.value,
                }));
              }}
            />
          </div>
          <div className="MovieDirector">
            <div>Director: </div>
            <input
              type="text"
              value={newMovieForm.director}
              onChange={(e) => {
                setNewMovieForm(() => ({
                  ...newMovieForm,
                  director: e.target.value,
                }));
              }}
            />
          </div>
          <div className="MovieWriter">
            <div>Writer: </div>
            <input
              type="text"
              value={newMovieForm.writer}
              onChange={(e) => {
                setNewMovieForm(() => ({
                  ...newMovieForm,
                  writer: e.target.value,
                }));
              }}
            />
          </div>
          <div className="MovieCast">
            <div>Cast: </div>
            <textarea
              type="text"
              value={newMovieForm.cast.join(",")}
              placeholder="Enter Cast Name Separeted By Comma (,) "
              onChange={(e) => {
                setNewMovieForm(() => ({
                  ...newMovieForm,
                  cast: e.target.value.split(","),
                }));
              }}
            />
          </div>
          <div className="MovieRating">
            <div>Rating: </div>
            <input
              min={1}
              max={10}
              type="number"
              value={newMovieForm.rating}
              onChange={(e) => {
                setNewMovieForm(() => ({
                  ...newMovieForm,
                  rating: +e.target.value,
                }));
              }}
            />
          </div>
          <div className="MovieYear">
            <div>Year: </div>
            <input
              type="number"
              value={newMovieForm.year}
              onChange={(e) => {
                setNewMovieForm(() => ({
                  ...newMovieForm,
                  year: +e.target.value,
                }));
              }}
            />
          </div>
          <div className="MovieImageUrl">
            <div>imageURL: </div>
            <input
              type="text"
              value={newMovieForm.imageURL}
              onChange={(e) => {
                setNewMovieForm(() => ({
                  ...newMovieForm,
                  imageURL: e.target.value,
                }));
              }}
            />
          </div>
        </div>
        <button
          onClick={() => {
            dispatch({
              type: ActionTypes.ADD_NEW_MOVIE,
              payload: { movie: newMovieForm },
            });
            setNewMovieForm({
              title: "",
              summary: "",
              year: 0,
              cast: [],
              genre: [],
              rating: 0,
              director: "",
              writer: "",
              imageURL: "",
            });
            // navigator("/");
          }}
        >
          Add Movie
        </button>
      </div>
    </>
  );
}
