import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';


export const SongContext = createContext();

export const SongProvider = ({ children }) => {
    
    const [songlist, setSonglist] = useState([]);

    const addSong = async(newSong)=> {
        try {
            const response = await axios.post("/api/song", newSong);
            setSonglist([...songlist, response.data]);
        }
        catch (error) {
            console.error(error);
        }
    }
    const fetchSongs = async () => {
        const response = await axios.get("/api/song");
       setSonglist(response.data);
   };
     useEffect(() => {
         
        fetchSongs();
    }, []);

    return (
        <SongContext.Provider value={{ songlist, addSong, setSonglist, fetchSongs}}>
            {children}
        </SongContext.Provider>
    );
}