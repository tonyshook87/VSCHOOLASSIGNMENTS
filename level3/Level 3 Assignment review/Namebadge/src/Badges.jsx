import React,{useState} from 'react'
import Form from './Form'
export default function Badges({badges}) {

    
    return (
    <div>
      
      <ul>
        {badges.map((badge,index)=>(
            <li className= "badgeContainer" key={index}>
                <p>Name: {badge.name}</p>
                <p>Description: {badge.description}</p>
                <p>Type: {badge.occupation}</p>
                <p>Number: {badge.number}</p>
                <p>Agree to Terms {badge.agree?"yes": "no"}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}
