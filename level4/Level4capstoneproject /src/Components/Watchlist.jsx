import React, { useContext } from 'react';
import Nav from './Nav';
import { MovieContext } from './MovieProvider';


export default function Watchlist() {
    const { watchlist } = useContext(MovieContext);
    console.log('Watchlist:', watchlist); // Check the data here
    
    if (!watchlist || watchlist.length === 0) {
        return (
            <div className='nav'>
                {/* <Nav /> */}
                <h1>Watchlist</h1>
                <p>No movies in the watchlist.</p>
            </div>
        );
    }

    return (
        <div>
            
            <div>
                <h1>Movies that I've Seen</h1>
                <ul>
                    {watchlist.map(movie => {
                        console.dir(movie)
                        return (
                        <li key={movie?.id || movie.title}>
                            <h1>{movie.title}</h1>
                            <p>{movie.description}</p>
                            {movie?.poster_path && (
                                <img 
                                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                                    alt={movie.title} 
                                />
                            )}
                        </li>
                    )})}
                </ul>
            </div>
        </div>
    );
}
