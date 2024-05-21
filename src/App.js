import React ,{useState,useEffect} from "react";
import './App.css';
import { IoSearchSharp } from "react-icons/io5";
import MovieCard from './Components/MovieCard';
const App = ()=> {
  const API_URL='https://www.omdbapi.com/?apikey=5ff1e744';
  const [title,setTitle]=useState('');
  const [movies,setMovies]=useState([]); 
  const movieSearch = async(title)=>
    {
      const response= await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      // console.log(data.Search);
      setMovies(data.Search);

    }
  
 
  useEffect(()=>{ movieSearch('avengers')

  },[]);

  return (
    <div className="container">
      <h1>MovieWorld</h1>
      <div className="search-box">
      <input  value={title} onChange={(e)=>setTitle(e.target.value)}  placeholder="Search for a movie" />
      <IoSearchSharp   onClick={()=>movieSearch(title)} className="search-icon"/>
      </div>

      <div className="wrapper">
      { movies?.length>0 ? 
      (<div className="movies">
       {movies.map((movie)=>
         <MovieCard movie={movie}/>)}
      </div>)
      :(<>
      <h1>No movies found.Try Another Name</h1>
      </>)
    }
    
      </div>
    </div>
  );
}

export default App;
