import React, {useState} from "react";

const AddMovie = (props) => {
    const [newMovie, setNewMovie] = useState({title:'',year:'',rating:'',genre:''});
    const update = (evt) => {
        const value = evt.target.value;
        const propertyName = evt.target.id;
        setNewMovie({...newMovie, [propertyName]: value});
    }
    const showHide = () =>{
        var checkBox = document.getElementById("chk");
        var hiddenInputs = document.getElementsByClassName("hidden");

        for(var i=0;i!=hiddenInputs.length;i++){
            if(checkBox.checked){
                hiddenInputs[i].style.display = "inline";
            }else{
                hiddenInputs[i].style.display = "none";
            }

        }

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
                <input type="checkbox" name="chkBox" id="chk" onClick={showHide}/>
                <label className='labelNewMovie' for="chk">click to show/hide</label>
                <br />
                <label class="hidden" className='labelNewMovie'>Title:</label>
                <input className='inputNewMovie' type="text" id="title" value={newMovie.title} onChange={update} class="hidden"/>
                <label class="hidden" className='labelNewMovie'>Year:</label>
                <input className='inputNewMovie'  type="number" id="year" value={newMovie.year} onChange={update} class="hidden"/>
                <label class="hidden" className='labelNewMovie'>Rating:</label>
                <input className='inputNewMovie'  type="number" id="rating" value={newMovie.rating} onChange={update} class="hidden"/>
                <label class="hidden" className='labelNewMovie'>Genre:</label>
                <input className='inputNewMovie'  type="text" id="genre" value={newMovie.genre} onChange={update} class="hidden"/>
                <input type="submit" value="Add movie" class="hidden"/>
            </form>
        </>
    );
};

export default AddMovie