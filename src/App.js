import React from 'react';
import PageWrapper from './components/PageWrapper';
import CardMovie from './components/CardMovie';
import filmsJson from './films.json';
import './App.css';
import Pagination from './components/Pagination';

function App() {

  let films = filmsJson;

  /* let films = [
    {
      image: 'images/uploads/mv1.jpg',
      title: 'Oblivion',
      year: '2012',
      rate: '8.1',
      duration: '2h21\'',
      date: '1 May 2015',
      director: 'Joss Whedon',
      starts: 'Robert Downey Jr, Chris Evans, Chris Hemsworth. ',
      describe: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...'
    },
    {
      image: 'images/uploads/mv1.jpg',
      title: 'Oblivion',
      year: '2012',
      rate: '8.1',
      duration: '2h21\'',
      date: '1 May 2015',
      director: 'Joss Whedon',
      starts: 'Robert Downey Jr, Chris Evans, Chris Hemsworth. ',
      describe: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...'
    }
  ];
 */
  return (
    <div className="App">
      <PageWrapper>
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
      <Pagination page={2} totalPage={4} onChangePage={() => console.log('onChange')} />
        
      </PageWrapper>
    </div>
  );
}

export default App;
