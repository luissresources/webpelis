import React from 'react';

function CardMovie(props) {
  return (
    <div class="movie-item-style-2">
      <img src={props.image} alt="" />
      <div class="mv-item-infor">
        <h6>
          <a href="moviesingle.html">{props.title} <span>({props.year})</span></a>
        </h6>
        <p class="rate"><i class="ion-android-star"></i><span>{props.rate}</span> /10</p>
        <p class="describe">
          {props.children}
        </p>
        <p class="run-time">
          Run Time: {props.duration} . <span>MMPA: PG-13 </span> .
          <span>Release: {props.date}</span>
        </p>
        <p>Director: <a href="localhost">{props.director}</a></p>
        <p>
          Stars: <a href="localhost">{props.starts},</a>
        </p>
      </div>
    </div>
  )
}

export default CardMovie;