
const apiKey = '5a25b904ce265a03b3fe3fee9777929f';
const baseUrl = 'https://api.themoviedb.org/3';

export const getPopularMovies = async() =>{
    const response = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    const data = await response.json();
    return data;
};

export const searchMovies = async(query) =>{
    const response = await fetch(`${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`);
    const data = await response.json();
    return data;
};
