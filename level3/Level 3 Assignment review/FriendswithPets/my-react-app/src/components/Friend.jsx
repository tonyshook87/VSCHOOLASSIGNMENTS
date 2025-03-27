import React from 'react'
import Pet from './Pet'
export default function Friend({name,age,pets}) {
    
  return (
    <div>
      <h2>{name}</h2>

      <p>Age:{age}</p>

      {pets.map((pet,index)=>(
        <Pet key={index}pet={pet}/>
      ))}
    </div>
  )
}
