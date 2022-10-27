import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import * as bootstrap from 'bootstrap';
import '@popperjs/core';
import MovieService from "./components/MovieService.jsx";


function App() {


  return (
    <div className="App">
      <MovieService/>
    </div>
  )
}

export default App
