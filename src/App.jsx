import './App.css';
import Text from './components/Text';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <>
      <h1><Text property={"Movies"} /></h1>
      
      <MovieCard />
    </>
  );
}

export default App;