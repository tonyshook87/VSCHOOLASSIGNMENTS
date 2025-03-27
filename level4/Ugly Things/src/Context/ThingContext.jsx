import React, {createContext,useEffect, useState}from 'react'
import axios from "axios"
import UglyThings from '../Components/UglyThings'
const ThingContext= createContext()

export default function ThingProvider({children}) {
    const [uglyThings, setUglyThings]= useState([])
    const initState= {
        imgUrl: "", 
        title: "",
        description: ""
    }
    const [thing, setThing]= useState(initState)
    const getAllThings = async () => {
        try {
          const response = await axios.get("https://api.vschool.io/as/thing");
          setUglyThings(response.data)
        } catch (error) {
          console.error("Error getting all things:", error);
          throw error;
        }
      };
      const createThing = async (newthing) => {
        try {
          const response = await axios.post("https://api.vschool.io/as/thing",newthing);
          setUglyThings([...uglyThings,response.data])
        } catch (error) {
          console.error("Error getting all things:", error);
          throw error;
        }
      };
      const updateUglyThing= async(id,updatedThing)=>{
        try { 
           await 
           axios.put(`https://api.vschool.io/as/thing/${id}`,updatedThing)
           setUglyThings(
            uglyThings.map((thing) =>
              thing._id === id ? { ...updatedThing, _id: id } : thing
            )
          );
        } catch (err) {
          console.error(err);
        }
      };
      const deleteUglyThing= async(id)=>{
        try { 
           await 
           axios.delete(`https://api.vschool.io/as/thing/${id}/`)
           setUglyThings(uglyThings.filter( thing=>
          thing._id !==id
          ))
        } catch (error){
          console.error("Error deleting", error);
        }
      }
     useEffect (()=>{
        getAllThings()
     },[]) 

  return (
    <ThingContext.Provider value = {{uglyThings, setUglyThings, getAllThings, createThing, thing, setThing, initState, deleteUglyThing, updateUglyThing}}>
      {children}
    </ThingContext.Provider>
  )
}

export{ThingContext, ThingProvider}