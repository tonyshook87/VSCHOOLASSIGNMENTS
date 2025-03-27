import React, {useState, useContext} from 'react'
import {SongContext} from "../Context /SongContext"

export default function SongForm() {
const {addSong}= useContext(SongContext)

  const initialSongData = {
    title: '',
    artist: '',
    album: '',
    genre: '',
    year: '',
    
  }
  const [song, setSong]= useState(initialSongData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSong((prevSong)=> ({
       ...prevSong,
        [name]: value,
  
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addSong(song);
    setSong(initialSongData);
  }
  return (

    <div>
    <h1>
      Add Song
      </h1>  
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={song.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Artist"
          name="artist"
          value={song.artist}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Album"
          name="album"
          value={song.album}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Genre"
          name="genre"
          value={song.genre}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Year"
          name="year"
          value={song.year}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
