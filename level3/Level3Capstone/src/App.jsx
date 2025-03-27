import { useState, useEffect } from 'react';
import axios from 'axios'
import Header from './Components/Header'
import MemeForm from './Components/MemeForm'
import SavedMemeList from './Components/SavedMemeList'
import './App.css'

export default function App() {
    const [allMemes, setAllMemes] = useState([])
    const [savedMemes, setSavedMemes] = useState([])

    function saveMeme(meme) {
        setSavedMemes(prev => [meme, ...prev])
      }

    function deleteMeme(memeId) {
        setSavedMemes(prevMemes => prevMemes.filter(meme => meme._id !== memeId))
      }

      function editMeme(memeId, update){
        setSavedMemes(prevMemes => prevMemes.map(meme => meme._id !== memeId ? meme : update))
      }

      useEffect(() => {
        axios.get("https://api.imgflip.com/get_memes")
          .then(res => setAllMemes(res.data.data.memes))
          .catch(err => console.log(err))
      }, []) 

    return (
        <>
      <Header/>
      
      <MemeForm allMemes={allMemes} saveMeme={saveMeme} />
      <SavedMemeList
        savedMemes={savedMemes}
        deleteMeme={deleteMeme}
        editMeme={editMeme}
      />
    
        </>
    )
}
    
    
  
 