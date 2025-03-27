import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css'

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [bgColor, setBgColor] = useState("")
  const [displayPokemon, setDisplayPokemon] = useState(false)

  // define urls
  const Pokemonapiurl = 'https://api.vschool.io/pokemon'
  const randomcolorapiurl = 'https://random-color.onrender.com/colors/random'

  //fetch PokemonData
  useEffect(() => {
    axios.get(Pokemonapiurl)
      .then(res => {
        setPokemon(res.data.objects[0].pokemon)

      })
      .catch(err => console.log(err))
  }, [])

  //fetch initial background color
  useEffect(() => {
    fetchrandomcolor();
  }, [])

  //fetch a new color
  const fetchrandomcolor = () => {
    axios.get(randomcolorapiurl)
      .then(res => {
        setBgColor(res.data)
        // document.body.style.backgroundcolor = bgColor.hex
      })
      .catch(err => console.log(err))
  }

  //update the background color
  useEffect(() => {
    document.body.style.backgroundColor = bgColor.hex;
  }, [bgColor]);


  console.log(bgColor)
  return (
    <>
      <h1>Pokemon list</h1>
      <button onClick={() => {
        fetchrandomcolor();
      }}>change background color
      </button>
      <button onClick={() => {
        setDisplayPokemon(prev => !prev)
      }}>Display Pokemon
      </button>
      <ul>
        {displayPokemon && pokemon.map((poke, index) => (
          <li key={index}>{poke.name}</li>
        ))}
      </ul>
    </>

  )

}
