import React, {useContext} from 'react'
import { MovieContext } from './MovieProvider'




export default function Watchedmovies() { 
    const { watchedMovies } = useContext(MovieContext)
   
    
  return (
    <div>
    
    
    <div>
 
      <h1>Movies that I've seen</h1>
      <ul>
        {watchedMovies.map(movie => {
          console.log(movie)
          return <li key={movie.id}>
              <h1>{movie.title}</h1>
              <p>{movie.description}</p>
             <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}></img>
          </li>
        })}
      </ul>
    </div>
    </div>
  )
}
