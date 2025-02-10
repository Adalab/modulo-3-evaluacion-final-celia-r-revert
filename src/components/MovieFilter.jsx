
import PropTypes from "prop-types"; // Importamos PropTypes

function MovieFilter({ filterName, handleInputFilterName, filterYear, handleFilterYear }) {
  return (
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
        <option value="2009">2009</option>
        <option value="2008">2008</option>
        <option value="2007">2007</option>
        <option value="2006">2006</option>
        <option value="2005">2005</option>
        <option value="2004">2004</option>
        <option value="2003">2003</option>
        <option value="2002">2002</option>
        <option value="2001">2001</option>
        <option value="2000">2000</option>
        <option value="1999">1999</option>
        <option value="1998">1998</option>
      </select>
    </form>
  );
}

// Agregar validación de PropTypes
MovieFilter.propTypes = {
  filterName: PropTypes.string.isRequired, // El nombre del filtro es un string requerido
  handleInputFilterName: PropTypes.func.isRequired, // La función para manejar el filtro de nombre es requerida y debe ser una función
  filterYear: PropTypes.string.isRequired, // El año del filtro es un string requerido
  handleFilterYear: PropTypes.func.isRequired, // La función para manejar el filtro de año es requerida y debe ser una función
};

export default MovieFilter;
