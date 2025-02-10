import Text from "./Text";
import './MovieCard.css';
import movieDataObject from '../movieDataObject.json';


function MovieCard() {
    let output = [];
    for (let i = 0; i < movieDataObject.length; i++) {
        output.push(
            <div className="movie-card" key={i}>
                <img className="movie-card-image" src = {movieDataObject[i].imageUrl}></img>
                <Text property={movieDataObject[i].title} />
                <Text property={movieDataObject[i].rating} />
                <Text property={movieDataObject[i].description} />
            </div>
        )
    }
    //write the for loop and then return the output data array
    return <>{output}</>;
};


export default MovieCard;