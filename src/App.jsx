import './App.css';
import Text from './components/Text';
import MovieCard from './components/MovieCard';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';

function App() {
  return (
    <>
    <main className='main-content'>
      <Routes>
        <Route path = "/favorites" element = {<Favorites />}/>
        </Routes>
      <h1><Text property={"Movies"} /></h1>
      <MovieCard />
      </main>
    </>
  );
}

export default App;