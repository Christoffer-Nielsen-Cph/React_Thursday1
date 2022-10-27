import React, {useState, useEffect} from 'react';
import AddMovie from "./AddMovie.jsx";
const updateMovie = (props) => {
    const [updatedMovie, setUpdatedMovie] = useState({id:'',title:'',year:'',rating:'',genre:''});
    const [hidden,setHidden] = useState(true)
    const btnText = () => {
        if(hidden){
            return "Update movie"
        } else{
            return "Close"
        }
    }
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
                evt.target.reset();
            });

    }


    return (
        <>
            <button onClick={()=>setHidden(s => !s)}>{btnText()}</button>
            {!hidden ? <form onSubmit={handleSubmit}>
                <label className='labelNewMovie'>Id:</label>
                <input className='inputNewMovie' type="number" id="id" value={updatedMovie.id} onChange={update}/>
                <label className='labelNewMovie'>Title:</label>
                <input className='inputNewMovie' type="text" id="title" value={updatedMovie.title} onChange={update}/>
                <label className='labelNewMovie'>Year:</label>
                <input className='inputNewMovie'  type="text" id="year" value={updatedMovie.year} onChange={update}/>
                <label className='labelNewMovie'>Rating:</label>
                <input className='inputNewMovie'  type="text" id="rating" value={updatedMovie.rating} onChange={update}/>
                <label className='labelNewMovie'>Genre:</label>
                <input className='inputNewMovie'  type="text" id="genre" value={updatedMovie.genre} onChange={update}/>
                <input type="submit" value="Update"/>
            </form> : null}
        </>
    );
}
export default updateMovie