import React, {useState} from "react";

const AddMovie = (props) => {
    const [newMovie, setNewMovie] = useState({title:'',year:'',rating:'',genre:''});
    const [hidden,setHidden] = useState(true)

    const btnText = () => {
        if(hidden){
            return "Add movie"
        } else{
            return "Close"
        }
    }


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
            .then((res) =>{ res.json()
                    setNewMovie(res)
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
            <button class="button1" onClick={()=>setHidden(s => !s)}>{btnText()}</button>
            {!hidden ? <form onSubmit={handleSubmit}>

                <label className='labelNewMovie'>Title:</label>
                <input className='inputNewMovie' type="text" id="title" value={newMovie.title} onChange={update}/>
                <label className='labelNewMovie'>Year:</label>
                <input className='inputNewMovie'  type="number" id="year" value={newMovie.year} onChange={update}/>
                <label className='labelNewMovie'>Rating:</label>
                <input className='inputNewMovie'  type="number" id="rating" value={newMovie.rating} onChange={update}/>
                <label className='labelNewMovie'>Genre:</label>
                <input className='inputNewMovie'  type="text" id="genre" value={newMovie.genre} onChange={update}/>
                <input class="button1" type="submit" value="Add movie"/>
            </form> : null}
        </>
    );
};

export default AddMovie