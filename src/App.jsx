import { useEffect, useState } from "react";
import "./styles/App.scss";
import MovieList from "./movies/MovieList";

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

  const filteredMovies = movies.filter((movies) =>
    (movies.movie ?? "")
      .toLocaleLowerCase()
      .includes(filterName.toLocaleLowerCase())
  );

  const handleFilterYear = (ev) => {
    ev.preventDefault();
    setFilterYear(ev.target.value);
  };



  return (
    <>
      <header className="spotlight__header">
        <h1 className="spotlight__maintitle">Owen Wilson's "wow"</h1>
      </header>
      <div>
        <form className="spotlight__form" action="submit" method="POST">
          <label className="spotlight__movie" htmlFor="movie">
            Película
          </label>
          <input
            className="spotlight__input"
            autoComplete="off"
            type="search"
            name="search"
            id="search"
            placeholder="search your iconic movie"
            onInput={handleInputFilterName}
            required
            value={filterName}
          />
          <label className="spotlight__year" htmlFor="year">
            Año
          </label>
          <select
            className="spotlight__select"
            name="año"
            id="año"
            onChange={handleFilterYear}
            value={filterYear}
          >
            <option value="All">All</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
          </select>
        </form>
      </div>

      <main>
        <MovieList movies={filteredMovies}> </MovieList>
      </main>
    </>
  );
}

export default App;
