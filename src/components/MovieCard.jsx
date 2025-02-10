import { useState } from "react";
import Text from "./Text";
import "./MovieCard.css";
import movieDataObject from "../movieDataObject.json";

function MovieCard() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movieDataObject.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));

  let output = [];
  for (let i = 0; i < filteredMovies.length; i++) {
    output.push(
      <div className="movie-card" key={i}>
        <img
          className="movie-card-image"
          src={filteredMovies[i].imageUrl}
          alt={filteredMovies[i].title}
        />
        <Text property={filteredMovies[i].title} />
        <Text property={filteredMovies[i].rating} />
        <Text property={filteredMovies[i].description} />
      </div>
    );
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <br />
      {output}
    </>
  );
}

export default MovieCard;