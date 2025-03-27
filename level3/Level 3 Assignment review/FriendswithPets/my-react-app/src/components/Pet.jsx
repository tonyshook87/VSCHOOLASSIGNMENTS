import React from 'react'

export default function Pet({pet}) {
  return (
    <div>
    <p>pet: {pet.name}</p>

    <p>breed: {pet.breed}</p>  
    </div>
  )
}
