import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage } from "./Pages/HomePage/HomePage";
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";
import { AddNewMoviePage } from "./Pages/AddNewMoviePage/AddNewMoviePage";
import { WatchListPage } from "./Pages/WatchListPage/WatchListPage";
import { SingleMoviePage } from "./Pages/SingleMoviePage/SingleMoviePage";
import { StarredPage } from "./Pages/StarredPage/StarredPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movie/:movieID" element={<SingleMoviePage />}></Route>
        <Route path="/watchlist" element={<WatchListPage />}></Route>
        <Route path="/starred/movies" element={<StarredPage />}></Route>
        <Route path="/addMovie" element={<AddNewMoviePage />}></Route>
        <Route path="/404" element={<ErrorPage />}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
