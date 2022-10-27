import React, {useState, useEffect} from 'react';
import AddMovie from "./AddMovie.jsx";
const updateMovie = (props) => {
    const [updatedMovie, setUpdatedMovie] = useState({});

    const update = (evt) => {
        const value = evt.target.value;
        const propertyName = evt.target.id;
        setUpdatedMovie({...updatedMovie, [propertyName]: value});
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log();
        fetch('http://localhost:4000/movies/id/'+updatedMovie.id, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify()
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('DATA:', data);
            });

    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className='labelUpdateMovie'>id:</label>
                <input className='inputUpdateMovie' type="text" id="id" value={updatedMovie.id} onChange={update}/>
                <label className='labelUpdateMovie'>Title:</label>
                <input className='inputUpdateMovie' type="text" id="title" value={updatedMovie.title} onChange={update}/>
                <label className='labelUpdateMovie'>Year:</label>
                <input className='inputUpdateMovie'  type="text" id="year" value={updatedMovie.year} onChange={update}/>
                <label className='labelUpdateMovie'>Rating:</label>
                <input className='inputUpdateMovie'  type="text" id="rating" value={updatedMovie.rating} onChange={update}/>
                <label className='labelUpdateMovie'>Genre:</label>
                <input className='inputUpdateMovie'  type="text" id="genre" value={updatedMovie.genre} onChange={update}/>
                <input type="submit" value="Update"/>
            </form>
        </>
    );
}
export default updateMovie