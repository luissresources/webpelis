import React from 'react';

function CardMovie(props) {
  return (
    <div className="movie-item-style-2">
      <img src={props.image} alt="" />
      <div className="mv-item-infor">
        <h6>
          <a href="moviesingle.html">{props.title} <span>({props.year})</span></a>
        </h6>
        <p className="rate"><i className="ion-android-star"></i><span>{props.rate}</span> /10</p>
        <p className="describe">
          {props.children}
        </p>
        <p className="run-time">
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