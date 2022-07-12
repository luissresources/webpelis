import React, {useState} from 'react';
import PageWrapper from './components/PageWrapper';
import CardMovie from './components/CardMovie';
import filmsJson from './films.json';
import './App.css';
import Pagination from './components/Pagination';

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  // const [jsonFilms, setJsonFilms] = useState([]);

  let films = filmsJson;

  /* const searchFilms = async () => {
    let url = 'https://lucasmoy.dev/data/react/peliculas.json';
    let response = await fetch(url, {
      "method": 'GET',
      "mode": 'no-cors',
      "headers": {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
      }
    });

    let result = await response.json();
    setJsonFilms(result);
  } */

  // searchFilms();

  let totalPerPage = 7;
  const loadFilms = () => {
    return films = films.slice((currentPage - 1) * totalPerPage, currentPage * totalPerPage);
  }
  
  const countPages = () => {
    let amountFilms = filmsJson.length;
    return Math.ceil( amountFilms / totalPerPage);
  }

  loadFilms();
  
  return (
    <div className="App">
      <PageWrapper>
      {/* <button onClick={searchFilms}>Test Json</button> */}
        {
          films.map((film) => 
            <CardMovie 
              image={film.image}
              title={film.title} 
              year={film.year}
              rate={film.rate}
              duration={film.duration}
              date={film.date}
              director={film.director}
              starts={film.starts}
              >{film.describe}</CardMovie>
           )
        }
      <Pagination 
        page={currentPage} 
        totalPage={countPages()} 
        onChangePage={(page) => {
          setCurrentPage(page);
        }} />
      </PageWrapper>
    </div>
  );
}

export default App;
