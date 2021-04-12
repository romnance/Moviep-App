import { useEffect, useState } from 'react';
import Movie from './components/Movie.js';
import Charts from './components/Charts';


const FEATERED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=565aae61031ff071e3eecd675ccebbb4&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=565aae61031ff071e3eecd675ccebbb4&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(FEATERED_API)
  }, []);

  const getMovies = (API) => {
    fetch(API)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
    }) 
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API+searchTerm)
    
    setSearchTerm('');
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Time</h1>
        <div className='menu'>
        <a className="button" href="#charts" name="button">STATISTICS</a>
          <form onSubmit={handleOnSubmit}>
          <input 
          className='search' 
          placeholder='Search...' 
          type='search' 
          value={searchTerm}
          onChange={handleOnChange}
          ></input>
          </form>
        </div>
      </header>

       <div className='movie-container'>
         {movies.length > 0 &&  movies.map(movie => (
           <Movie key={movie.id} {...movie} />
         ))}
       </div>

       <Charts /> 
      
      <footer>
      <span>Copyright &#169; 2021</span>
      </footer>
    </div>
  );
}

export default App;
