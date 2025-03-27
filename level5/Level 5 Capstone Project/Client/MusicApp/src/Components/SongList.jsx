import React, {useContext, useEffect} from 'react'
import {SongContext} from '../Context /SongContext'
import Song from './Song'
import axios from "axios"


export default function SongList() {
    const {songlist, setSonglist}= useContext(SongContext)


  useEffect(() => {
    const fetchSongs = async () => {
        const response = await axios.get("/api/song");
        setSonglist(response.data);
    };
    fetchSongs();
  })
  return (
    <div>
      {songlist.map((song)=>(
        <Song
        song= {song}

        key= {song._id}
        {...song}
        />

    ))}
    </div>
  )
}
