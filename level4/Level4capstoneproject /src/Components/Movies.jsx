import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MovieContext } from './MovieProvider';


export default function Movies() {
    const { movies, addToWatched, addToWatchlist } = useContext(MovieContext);
    const { movieId } = useParams();
    const navigate = useNavigate();
    const selectedMovie = movies.find(movie => movie.id === parseInt(movieId));

    if (!selectedMovie) {
        return <div>Movie not found</div>;
    }

    const handleWatchlist = () => {
        addToWatchlist(selectedMovie);
        navigate('/watchlist');
    };

    const handleWatched = () => {
        addToWatched(selectedMovie);
        navigate('/watched');
    };

    return (
        <div>
            <div className='nav'>
                {/* <Nav /> */}
            </div>
            <div className='moviedetails'>
                <h1>{selectedMovie.title}</h1>
                <p>{selectedMovie.overview}</p>
                <p>Release date: {selectedMovie.release_date}</p>
            </div>
            <button onClick={handleWatchlist} className="button">ADD TO WATCHLIST</button>
            <button onClick={handleWatched} className="button">ADD TO WATCHED</button>
        </div>
    );
}
