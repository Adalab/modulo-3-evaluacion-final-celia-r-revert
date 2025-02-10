import PropTypes from 'prop-types';
function movieItem ( {oneMovie}) {
    return (
    <>
     <img className="movie__picture" src={oneMovie.poster} alt="póster de una película en la que ha trabajado Owen Wilson"/>
     <p className="movie__name">{oneMovie.movie}</p>
     <p className="movie__year">{oneMovie.year}</p>
     <p className="movie__line">{oneMovie.full_line}</p>
    </>
    );
}


movieItem.PropTypes = {
    oneMovie: PropTypes.object   
};

export default movieItem;