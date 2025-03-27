import React, { useContext, useEffect } from 'react';
import { MovieContext } from './MovieProvider';
import { Link } from 'react-router-dom';


export default function home() {
  const { movies, fetchMovies } = useContext(MovieContext);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      
      <h1>Popular Movies</h1>
      
      <div className='homediv'>
        <h1>Welcome to the Movie Generator!</h1>
        <p>Click on the image to see the details!</p>
      </div> 

      <div className='movielist'>
        {movies.map(movie => (
          <div className='movies' key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} poster`} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
