import { useParams } from 'react-router-dom';
import MovieSceneDetail from '../../components/MovieSceneDetail';

function DetailPage({ movies }) {
    const { movie } = useParams();
    const selectedMovie = movies.find((m) => m.movie.toLowerCase() === movie.toLowerCase());

    if (!selectedMovie) {
        return <p>Película no encontrada.</p>;
    }

    return <MovieSceneDetail movie={selectedMovie} />;
}

export default DetailPage;
