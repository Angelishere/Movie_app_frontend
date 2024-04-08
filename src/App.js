import logo from './logo.svg';
import './App.css';
import MovieHeader from './components/MovieHeader';
import SearchMovies from './components/SearchMovies';
import ViewMovies from './components/ViewMovies';
import SignMovie from './components/SignMovie';
import HomeMovies from './components/HomeMovies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomeMovies/>}/>
        <Route path="/search" element={<SearchMovies/>}/>
        <Route path="/sign" element={<SignMovie/>}/>
        <Route path="/view" element={<ViewMovies/>}/>
       </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
