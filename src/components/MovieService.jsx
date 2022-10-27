import React, {useState, useEffect} from 'react';
import AddMovie from "./AddMovie.jsx";

function MovieService() {
    const [movies, setMovies] = useState([]);
    const [moviesChanged, setMoviesChanged] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:4000/movies');
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
                <tr><th>Id</th><th>Title</th><th>Year</th><th>Rating</th><th>Genre</th></tr>
                </thead>
                <tbody>{movies.map((movie) => {
                    return (<tr key={movie.id}>
                        <td>{movie.id}</td>
                        <td>{movie.title}</td>
                        <td>{movie.year}</td>
                        <td>{movie.rating}</td>
                        <td>{movie.genre}</td>
                    </tr>);
                })}</tbody>
            </table>}
        </>
    );
}

export default MovieService;