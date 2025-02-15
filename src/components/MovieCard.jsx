import { useState, useEffect } from "react";
import Text from "./Text";
import "./MovieCard.css";
import movieDataObject from "../movieDataObject.json";
import { getPopularMovies, searchMovies } from "../services/api";

//====================================================  Getting data from the JSON file and displaying it on the screen

// function MovieCard() {
//   const [searchTerm, setSearchTerm] = useState(""); // State to store the search term

//   const filteredMovies = movieDataObject.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase())); // Filter movies based on search term

//   let output = [];
//   for (let i = 0; i < filteredMovies.length; i++) {
//     output.push(
//       <div className="movie-card" key={i}>
//         <img
//           className="movie-card-image"
//           src={filteredMovies[i].imageUrl}
//           alt={filteredMovies[i].title}
//         />
//         <Text property={filteredMovies[i].title} />
//         <Text property={filteredMovies[i].rating} />
//         <Text property={filteredMovies[i].description} />
//       </div>
//     );
//   }

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Search for a movie"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <br />
//       {output}
//     </>
//   );
// }

//==================================================== getting data from an api and displaying it on the screen

function MovieCard() {
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [loading, setLoading] = useState(true); // State to manage loading state


  const [movies, setMovies] = useState([]); // State to store movies fetched from API

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies(); // Fetch popular movies from API
        setMovies(popularMovies.results); // Set the fetched movies to state
      } catch (error) {
        console.error("Error fetching movies. error: ", error); // Log any errors
      } finally {
        setLoading(false); // Set loading to false after fetching is done
      }
    };

    loadPopularMovies(); // Call the function to load popular movies
  }, []); // Empty dependency array means this effect runs once after the initial render

  const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase())); // Filter movies based on search term


  return (
    <>
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term state on input change
      />
      <br />
      {loading ? (
        <p>Loading...</p> // Show loading message if movies are still loading
      ) : (
        filteredMovies.map((movie) => (       // Map through filtered movies and display them
          <div className="movie-card" key={movie.id}>
            <img
              className="movie-card-image"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <Text property={movie.title} />
            <Text property={movie.vote_average} />
            <Text property={movie.overview} />
            <Text property={movie.release_date} />  
          </div>
        ))
      )}
    </>
  );
}

export default MovieCard;