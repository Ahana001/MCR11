import "./HomePage.css";

import { Header } from "../../Component/Header/Header";
import { Filters } from "../../Component/Filters/Filters";
import { MoviesList } from "../../Component/MoviesList/MoviesList";
import { useFilterDataHook } from "../../Hook/FilterDataHook";

export function HomePage() {
  const filteredMovies = useFilterDataHook();
  return (
    <>
      <Header />
      <div className="HomePageContainer">
        <Filters />
        <MoviesList movieList={filteredMovies} />
      </div>
    </>
  );
}
