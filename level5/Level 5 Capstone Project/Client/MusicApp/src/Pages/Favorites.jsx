import React, {useEffect, useContext} from 'react'
import SongList from '../Components/SongList'
import { SongContext } from '../Context /SongContext'


export default function Favorites() {
    const {fetchSongs}= useContext(SongContext)

  useEffect(() => {
    fetchSongs()
  },[])
  return (
    <div>
      <h1>Favorite Songs</h1>
      <SongList />
    </div>
  )
}
