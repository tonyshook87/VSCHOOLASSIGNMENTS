import React, {useContext, useState} from 'react'
import { ThingContext } from '../Context/ThingContext'
import EditForm from './EditForm'
export default function UglyThings(){
    const {uglyThings,deleteUglyThing}= useContext(ThingContext)
    console.log(uglyThings)
    const [editing, setEditing]= useState(false)
    const deleteThing= (id)=>{
      deleteUglyThing(id)
    }
    const editThing= (id)=>{
      setEditing(id)
    }  
    return (
      <>
        <div>
          {uglyThings.length === 0 ? (
            <p>No Ugly Things Found</p>
          ) : (
            Array.isArray(uglyThings) &&
            uglyThings.map((thing) => (
              <div key={thing._id}>
                {editing === thing._id ? (
                  <EditForm thing={thing} setEditing={setEditing}{ ...thing} />
                ) : (
                  <>
                    <h3>{thing.title}</h3>
                    <img src={thing.imgUrl} alt={thing.title} />
                    <p>{thing.description}</p>
                    <button onClick={() => deleteThing(thing._id)}>Delete</button>
                    <button onClick={() => editThing(thing._id)}>Edit</button>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </>
    )}
