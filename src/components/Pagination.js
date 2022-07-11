import React from 'react';

function Pagination(props) {

  // page
  // totalPage
  // onChangePage


  return (
    <div className="topbar-filter">
      <label>Movies per page:</label>
      <select>
        <option value="range">5 Movies</option>
        <option value="saab">10 Movies</option>
      </select>
      <div className="pagination2">
        <span>Page {props.page} of {props.totalPage}:</span>
        <a className="active" href="localhost">1</a>
        <a href="localhost">2</a>
        <a href="localhost"><i className="ion-arrow-right-b"></i></a>
      </div>
    </div>
  )
}

export default Pagination;