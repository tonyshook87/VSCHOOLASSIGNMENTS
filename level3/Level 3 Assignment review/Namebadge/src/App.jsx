import React,{ useState } from 'react'
import Badges from './Badges'
import './App.css'
import Form from './Form'
function App() {
  const [badges,setbadges]= useState([])
  const addBadge=(newbadge)=>{
      setbadges((prevbadges)=>[...prevbadges,newbadge])}
  return(
    <>
    <h1>Name Badge</h1>
    <Form addBadge={addBadge}/>
    <Badges badges={badges} />
    </>
  )
}

export default App
