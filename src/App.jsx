import './App.css'
import Text from './components/Text';
import MovieCard from './components/movieCard';


function App() {
  return (
    <>
      <h1><Text property={"Movies"}/></h1>
      <MovieCard/>   {/* This is the MovieCard component */}   
    </>
  )
}

export default App;
