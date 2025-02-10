import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MovieSceneDetail({ movie }) {
    if (!movie) {
        return <p>No hay datos disponibles.</p>;
    }

    return (
        <div className="movie__detail">
            <img className="movie__picture" src={movie.poster} alt={`Póster de ${movie.movie}`} />
            <p className="movie__name">{movie.movie}</p>
            <p className="movie__line">"{movie.full_line}"</p>
            <p className="movie__director">Dirigida por: {movie.director}</p>
            <a href={movie.audio} target="_blank" rel="noopener noreferrer">🎧 Escuchar audio</a>
            <br />
            <Link to="/">🔙 Volver al inicio</Link>
        </div>
    );
}

MovieSceneDetail.propTypes = {
    movie: PropTypes.shape({
        poster: PropTypes.string,
        movie: PropTypes.string,
        full_line: PropTypes.string,
        director: PropTypes.string,
        audio: PropTypes.string,
    }),
};

export default MovieSceneDetail;
