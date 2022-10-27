import React, {useState, useEffect} from 'react';
import AddMovie from "./AddMovie.jsx";
import DeleteMovie from "./DeleteMovie.jsx";
import deleteMovie from "./DeleteMovie.jsx";
import {Button} from "react-bootstrap";

function MovieService() {
    const [movies, setMovies] = useState([]);
    const [moviesChanged, setMoviesChanged] = useState(false);

    const deleteMovie = async (id) => {
        const res = await fetch(`http://localhost:3000/movies/${id}`, {
            method: 'DELETE',
        })
        //We should control the response status to decide if we will change the state or not.
        res.status === 200
            ? setMovies(movies.filter((movie) => movie.id !== id))
            : alert('Error Deleting This Movie')
    }

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:3000/movies');
            const data = await response.json();
            setMovies(data);
        }
        getData();
    }, [moviesChanged]);
    return (
        <>
            <AddMovie isChanged={setMoviesChanged} changed={moviesChanged}/>
            {movies.length && <table className='movieTable'>
                <thead>
                <tr><th>Id</th><th>Title</th><th>Year</th><th>Rating</th><th>Genre</th><th>Delete</th></tr>
                </thead>
                <tbody>{movies.map((movie) => {
                    return (<tr key={movie.id}>
                        <td>{movie.id}</td>
                        <td>{movie.title}</td>
                        <td>{movie.year}</td>
                        <td>{movie.rating}</td>
                        <td>{movie.genre}</td>
                        <td><button onClick={(e) => deleteMovie(movie.id,e)}>Delete</button> </td>
                    </tr>);
                })}</tbody>
            </table>}
        </>
    );
}



export default MovieService;