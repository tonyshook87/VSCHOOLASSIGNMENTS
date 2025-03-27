import React, {useContext, useState} from 'react'
import {SongContext} from '../Context /SongContext'
import axios from "axios"

export default function Song({song}) {
    const {fetchSongs}= useContext(SongContext) 
    const [isEditing, setIsEditing]= useState(false)
    const [updateSong, setUpdateSong]= useState(song)
    

    const handleDelete = async() => {
       await axios.delete(`/api/song/${song._id}`)
       fetchSongs()
        
    }
    const handleEdit = async() => {
       await axios.put(`/api/song/${song._id}`, updateSong)
       fetchSongs()
        setIsEditing(false)
    }
    const handleChange = (e)=> {
       setUpdateSong({...updateSong, [e.target.name]: e.target.value})
    }
  return (
    <div key= {song._id}>
      {isEditing ? (
        <form onSubmit= {handleEdit}>
          <input
            type="text"
            name= "title"
            value={updateSong.title}
            onChange= {handleChange}
          />
          <input
            type="text"
            name= "artist"
            value={updateSong.artist}
            onChange={handleChange}
          />
          <input
            type="text"
            name= "album"
            value={updateSong.album}
            onChange= {handleChange}
            />
          <input
            type="number"
            name= "year"
            value={updateSong.year}
            onChange= {handleChange}
          />
          <button>Update Song</button>
        </form>
      ): (
        <div className= "songdiv">
      <h2>
        {song.title}
      </h2>
      <p><span>Artist: </span>{song.artist}</p>|
      <p><span>Album: </span>{song.album}</p>|
      <p><span>Year: </span>{song.year}</p>|
      <p><span>Genre: </span>{song.genre}</p>
        <div>
        <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          
        </div>
        </div>
      )}
    </div>

  )
}
