import './App.css';
import Text from './components/Text';
import MovieCard from './components/MovieCard';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <main className='main-content'>
      <Routes>
        <Route path = "/favorites" element = {<Favorites />}/>
        </Routes>
        <NavBar></NavBar>  {/* navbar section */}
      <h1><Text property={"Movies"} /></h1>
      <MovieCard />
      </main>
    </>
  );
}

export default App;