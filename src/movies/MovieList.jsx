import PropTypes from 'prop-types'; 
import MovieItem from './MovieItem';

function MovieList({movies}) {
  return (
    <ul className="movie__list">
      {movies.map((oneMovie) => (
        <li className="movie__item" 
        key={`{oneMovie.movie}{oneMovie.year}{oneMovie.full_line}`}>
          <MovieItem oneMovie = {oneMovie} ></MovieItem>
        </li>
      ))}
    </ul>
  );
}
MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;
