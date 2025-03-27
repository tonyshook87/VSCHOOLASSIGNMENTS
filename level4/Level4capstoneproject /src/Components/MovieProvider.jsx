import React, {useState, createContext} from 'react'
import axios from 'axios'



export const MovieContext = createContext()

export const MovieProvider= ({ children })=> {
   const api= "73652d4f4264dbf6811e175a5f01c580"  
  const [movies, setMovies] = useState([])
  const [watchedMovies, setWatchedmovies] = useState([])
  const [watchlist, setWatchlist] = useState([])

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api}`)
       console.log(response.data.results)
      setMovies(response.data.results)
    } catch (error) {
    
      console.log(error)
    }

  }
  const addToWatched = (movie) => {
    setWatchedmovies([...watchedMovies, movie])
    console.log('added to watched', movie)
  }
  const addToWatchlist = (movie) => {
    movie.id = ''
    movie.posterPath = '';
    setWatchlist((prev) => [...prev, movie])
  }
  return (
    <MovieContext.Provider value={{movies, setMovies, fetchMovies, watchedMovies, watchlist, addToWatched, addToWatchlist}}>
     {children} 
    </MovieContext.Provider>
  )
}
