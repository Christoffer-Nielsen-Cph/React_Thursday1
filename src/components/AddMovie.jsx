import React, {useState} from "react";

const AddMovie = (props) => {
    const [newMovie, setNewMovie] = useState({});
    const update = (evt) => {
        const value = evt.target.value;
        const propertyName = evt.target.id;
        setNewMovie({...newMovie, [propertyName]: value});
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(newMovie);
        fetch('http://localhost:3000/movies', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMovie)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('DATA:', data);
                props.isChanged(!props.changed);
            });

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className='labelNewMovie'>Title:</label>
                <input className='inputNewMovie' type="text" id="title" value={newMovie.title} onChange={update}/>
                <label className='labelNewMovie'>Year:</label>
                <input className='inputNewMovie'  type="text" id="year" value={newMovie.year} onChange={update}/>
                <label className='labelNewMovie'>Rating:</label>
                <input className='inputNewMovie'  type="text" id="rating" value={newMovie.rating} onChange={update}/>
                <label className='labelNewMovie'>Genre:</label>
                <input className='inputNewMovie'  type="text" id="genre" value={newMovie.genre} onChange={update}/>
                <input type="submit" value="Add movie"/>
            </form>
        </>
    );
};

export default AddMovie