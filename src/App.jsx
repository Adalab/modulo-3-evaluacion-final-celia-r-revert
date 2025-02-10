import { useEffect, useState } from "react";
import "./styles/App.scss";
import MovieList from "./components/MovieList";
import MovieFilter from "./components/MovieFilter";
import MovieSceneDetail from "./components/MovieSceneDetail";
import { Routes, Route } from "react-router";
import LandingPage from "./assets/Pages/LandingPage";
import DetailPage from "./assets/Pages/DetailPage";

function App() {
  //variables de estado
  const [movies, setMovies] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterYear, setFilterYear] = useState("All");

  useEffect(() => {
    fetch("https://owen-wilson-wow-api.onrender.com/wows/random?results=50")
      .then((response) => response.json())
      .then((dataJson) => {
        setMovies(dataJson);
      });
  }, []);

  const handleInputFilterName = (ev) => {
    ev.preventDefault();
    setFilterName(ev.target.value);
  };

  const handleFilterYear = (ev) => {
    ev.preventDefault();
    setFilterYear(ev.target.value);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      (movie.movie ?? "")
        .toLocaleLowerCase()
        .includes(filterName.toLocaleLowerCase()) &&
      (filterYear === "All" || movie.year === parseInt(filterYear))
  );

  return (
    <>
      <header className="spotlight__header">
        <img
          className="header__image"
          src="src/assets/wow_meme.jpeg"
          alt="imagen de Owen Wilson diciendo Wow"
        />
        <h1 className="spotlight__maintitle">Owen Wilson's "wow" searcher!</h1>
        <h2 className=""></h2>
      </header>
      <div>
        <MovieFilter
          filterName={filterName}
          handleInputFilterName={handleInputFilterName}
          filterYear={filterYear}
          handleFilterYear={handleFilterYear}
        />
      </div>

      <main className="spotlight__main">
        <Routes>
          <Route index element={<LandingPage movies={filteredMovies} />} />
          <Route
            path="detail/:movie"
            element={<DetailPage movies={filteredMovies} />}
          />
        </Routes>
      </main>
      <footer className="spotlight__footer">
        <p>Celia R Revert, 2025</p>
      </footer>
    </>
  );
}

export default App;
