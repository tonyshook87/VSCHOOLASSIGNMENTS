import { ThingContext } from "../Context/ThingContext"
import React, { useContext, useState } from "react" 

export default function EditForm({thing, setEditing}) {
  const {updateUglyThing}= useContext(ThingContext)
  const [edit, setEdit]= useState({
    title: thing.title,
    description: thing.description,
    imgUrl: thing.imgUrl
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setEdit(prevEdit => ({...prevEdit, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    updateUglyThing(thing._id, edit)
     setEditing(false)
  }

  return (
    <div>
     <form onSubmit= {handleSubmit}>
     <input
     type= "text" 
     name= "title"
     value= {edit.title}
     onChange= {handleChange}
     placeholder= "title"
     />
     <input
     type= "text"
     name= "imgUrl"
     value= {edit.imgUrl} 
     onChange= {handleChange}
     placeholder= "imgurl"
     />
     
     <input
     type= "text"
     name= "description"
     value= {edit.description}
     placeholder= "description"
     onChange= {handleChange}
     />
        <button>Submit</button>

      
     </form>
    </div>


    
  )
}
