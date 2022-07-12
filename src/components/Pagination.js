import React from 'react';
import '../stylesheets/Pagination.css';

function Pagination(props) {

  const getPages = () => {
    let result = [];
    for( let i = 0; i < props.totalPage; i++){
      let page = i + 1;
      result.push(
      <a 
        onClick={() => props.onChangePage(page)}
        className={props.page === page ? 'active' : ''} id='item-pagination'>{page}</a>);
    };
    return result;
  }

  return (
    <div className="topbar-filter">
      <div className="pagination2">
      <label>Movies per page:</label>
        <select defaultValue='5' id="select-pagination" onChange={props.onChangePagination}> 
          <option value="5">5 Movies</option>
          <option value="10">10 Movies</option>
        </select>
        <span>Page {props.page} of {props.totalPage}:</span>

        {getPages()}
        
        <a href="localhost"><i className="ion-arrow-right-b"></i></a>
      </div>
    </div>
  )
}

export default Pagination;