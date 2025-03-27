import React, {useState, useContext} from 'react'
import { ThingContext } from '../Context/ThingContext'

export default function UglyForm() {
    
    const {setUglyThings, createThing, thing, setThing, initState}= useContext(ThingContext)
   
   
    const handleChange= (e)=>{
        const {name, value}= e.target
        setThing(prevThings=>({...prevThings, [name]: value}))
        }

    const handleSubmit= (e)=>{
        e.preventDefault()
        const newthing= {
            title, description, imgUrl
        }
    
        createThing(newthing)
        setUglyThings(prevThings=>(
            {
                ...prevThings, 

                    newthing                
            }
        )
            
        )
        setThing(initState)
    }

        const {title, description, imgUrl}= thing
  return (
    <div>
     <form onSubmit= {handleSubmit}>
     <input
     type= "text" 
     name= "title"
     value= {title}
     onChange= {handleChange}
     placeholder= "title"
     />
     <input
     type= "text"
     name= "imgUrl"
     value= {imgUrl} 
     onChange= {handleChange}
     placeholder= "imgurl"
     />
     
     <input
     type= "text"
     name= "description"
     value= {description}
     placeholder= "description"
     onChange= {handleChange}
     />
        <button>Submit</button>

      
     </form>
    </div>
  )
}
