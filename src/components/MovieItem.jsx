import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function MovieItem ( {oneMovie}) {
    return (
    <Link to = {`/detail/${oneMovie.movie.toLowerCase()}`}>
     <img className="movie__picture" src={oneMovie.poster} alt="póster de una película en la que ha trabajado Owen Wilson"/>
     <p className="movie__name">{oneMovie.movie}</p>
     <p className="movie__year">{oneMovie.year}</p>
    </Link>
    );
}


MovieItem.PropTypes = {
    oneMovie: PropTypes.object   
};

export default MovieItem;