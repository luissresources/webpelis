import React from 'react';

function CardMovie(props) {
  return (
    <div class="movie-item-style-2">
      <img src="images/uploads/mv1.jpg" alt="" />
      <div class="mv-item-infor">
        <h6>
          <a href="moviesingle.html">oblivion <span>(2012)</span></a>
        </h6>
        <p class="rate"><i class="ion-android-star"></i><span>8.1</span> /10</p>
        <p class="describe">
          Earth's mightiest heroes must come together and learn to fight as a team
          if they are to stop the mischievous Loki and his alien army from enslaving
          humanity...
        </p>
        <p class="run-time">
          Run Time: 2h21’ . <span>MMPA: PG-13 </span> .
          <span>Release: 1 May 2015</span>
        </p>
        <p>Director: <a href="localhost">Joss Whedon</a></p>
        <p>
          Stars: <a href="localhost">Robert Downey Jr.,</a>
          <a href="localhost">Chris Evans,</a>
          <a href="localhost"> Chris Hemsworth</a>
        </p>
      </div>
    </div>
  )
}

export default CardMovie;