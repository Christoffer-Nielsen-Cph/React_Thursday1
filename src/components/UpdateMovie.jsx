import React, {useState, useEffect} from 'react';
import AddMovie from "./AddMovie.jsx";
const updateMovie = (props) => {
    const [updatedMovie, setUpdatedMovie] = useState({id:'',title:'',year:'',rating:'',genre:''});

    const update = (evt) => {
        const value = evt.target.value;
        const propertyName = evt.target.id;
        setUpdatedMovie({...updatedMovie, [propertyName]: value});
        console.log(updatedMovie);
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(id);
        fetch(`http://localhost:3000/movies/${id.value}`, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedMovie)
        })
            .then((res) =>{ res.json()
            setUpdatedMovie(res)
            }
            
            )
            .then((data) => {
                console.log('DATA:', data);
                props.isChanged(!props.changed);
            });

    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className='labelUpdateMovie'>id:</label>
                <text>ID: </text>
                <input className='inputUpdateMovie' type="Number" id="id" value={updatedMovie.id} onChange={update}/>
                <label className='labelUpdateMovie'>Title:</label>
                <text>Title: </text>
                <input className='inputUpdateMovie' type="text" id="title" value={updatedMovie.title} onChange={update}/>
                <label className='labelUpdateMovie'>Year:</label>
                <text>Year: </text>
                <input className='inputUpdateMovie'  type="text" id="year" value={updatedMovie.year} onChange={update}/>
                <label className='labelUpdateMovie'>Rating:</label>
                <text>Rating: </text>
                <input className='inputUpdateMovie'  type="text" id="rating" value={updatedMovie.rating} onChange={update}/>
                <label className='labelUpdateMovie'>Genre:</label>
                <text>Genre: </text>
                <input className='inputUpdateMovie'  type="text" id="genre" value={updatedMovie.genre} onChange={update}/>
                <input type="submit" value="Update"/>
            </form>
        </>
    );
}
export default updateMovie