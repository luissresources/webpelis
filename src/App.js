import React, {useState, useEffect, useLayoutEffect} from 'react';
import PageWrapper from './components/PageWrapper';
import CardMovie from './components/CardMovie';
import filmsJson from './films.json';
import './App.css';
import Pagination from './components/Pagination';

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const [films, setFilms] = useState([]);
  // let totalPerPageTemp = 2;
  const [totalPerPage, setTotalPerPage] = useState(5);


  useEffect(()=> {
    searchFilms();
  }, []);

  useEffect(()=>{
    searchFilms();
  },[totalPerPage]);

  useEffect(()=> {searchFilms()},[totalPerPage]);

  async function searchFilms() {
    let url = 'https://raw.githubusercontent.com/luissresources/webpelis/main/src/films.json';
    fetch(url)
      .then (response => response.json())
      .then (data => setFilms(data));
  }

  const countPages = () => {
    let amountFilms = filmsJson.length;
    return Math.ceil( amountFilms / totalPerPage);
  }

  const loadFilms = films.slice((currentPage - 1) * totalPerPage, currentPage * totalPerPage);
  
  return (
    <div className="App">
      <PageWrapper>
        {
          loadFilms.map((film) => 
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
        }}
        onChangePagination={(selectValue) => {
          setTotalPerPage(selectValue.target.value);
        }}
        />
      </PageWrapper>
    </div>
  );
}

export default App;
