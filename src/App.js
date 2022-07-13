import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import FilmsList from './components/FilmsList';
import Blog from './components/Blog';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FilmsList />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
