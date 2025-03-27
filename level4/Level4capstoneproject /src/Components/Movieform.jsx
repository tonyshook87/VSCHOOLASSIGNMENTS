import React, { useState, useContext } from 'react';

import { MovieContext } from './MovieProvider';

export default function MovieForm() {
    const { addToWatchlist, addToWatched } = useContext(MovieContext);
    const [formData, setFormData] = useState({id:'', title: '', description: '' });

    const handleChange = (e) => {
        console.log (e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value  });
    };

    const handleSubmit = (e, action) => {
        e.preventDefault();
        if (action === 'watchlist') {
            addToWatchlist(formData);
        } else if (action === 'watched') {
            let id = '123123'; //could install a uuid for a unique id. 
            formData.id = id;
            addToWatched(formData);
        }
        setFormData({ title: '', description: '' });
        console.log(formData);
    };

    return (
        <div>
            
            <div className='container'>
                <div className='form-div'>
                    <h2>Add Movie</h2>
                    <form>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            placeholder="Movie Title"
                            onChange={handleChange}
                            className="input"
                        />
                        <input
                            type="text"
                            name="description"
                            value={formData.description}
                            placeholder="Description"
                            onChange={handleChange}
                            className="input"
                        />
                        <button
                            onClick={(e) => handleSubmit(e, 'watchlist')}
                            className="button"
                        >
                            ADD TO WATCHLIST
                        </button>
                        <button
                            onClick={(e) => handleSubmit(e, 'watched')}
                            className="button"
                        >
                            ADD TO WATCHED
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}


