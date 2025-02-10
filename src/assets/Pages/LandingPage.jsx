import PropTypes from 'prop-types';
import MovieList from "../../components/MovieList";
import MovieFilter from '../../components/MovieFilter';
function LandingPage({movies}) {
    return (
      <>
        <MovieList movies={movies} />
      </>
    );
  }
  
  LandingPage.propTypes = {
    movies: PropTypes.array.isRequired
  };
  
export default LandingPage; 