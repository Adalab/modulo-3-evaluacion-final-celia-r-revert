import { useEffect, useState } from "react";
import "./styles/App.scss";
import MovieList from "./movies/MovieList";
import MovieFilter from "./movies/MovieFilter";

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

  // Obtener los años únicos de las películas
  const years = [...new Set(movies.map((movie) => movie.year))];

  return (
    <>
      <header className="spotlight__header">
        <img className="header__image" src="src/assets/wow_meme.jpeg" alt="" />
        <h1 className="spotlight__maintitle">The ultimate Owen Wilson's wow searcher!</h1>
      </header>
      <div>
      <MovieFilter 
          filterName={filterName} 
          handleInputFilterName={handleInputFilterName} 
          filterYear={filterYear} 
          handleFilterYear={handleFilterYear}
          years={years}
      /> 
      </div>

      <main>
        <MovieList movies={filteredMovies}> </MovieList>
      </main>
    </>
  );
}

export default App;
