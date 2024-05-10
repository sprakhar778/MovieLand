import React from "react";
import "./MovieCard.css";
const MovieCard = ({movie}) => {    
    return (
        <div className="movie-card" key={movie.imdbID}>
           
            <div className="img-box" >
            <img src={movie.Poster!=="N/A" ? movie.Poster:"https://via.placeholder.com/400"} alt={movie.Title} />
            </div>
            <div className="desc">
            <p>{movie.Type}</p>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            </div>
        </div>
    );

}
export default MovieCard;