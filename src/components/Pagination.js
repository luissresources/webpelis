import React from 'react';

function Pagination(props) {

  const getPages = () => {
    let result = [];
    for( let i = 0; i < props.totalPage; i++){
      let page = i + 1;
      result.push(
      <a 
        onClick={() => props.onChangePage(page)}
        className={props.page === page ? 'active' : ''}>{page}</a>);
    };
    return result;
  }

  return (
    <div className="topbar-filter">
      <div className="pagination2">
        <span>Page {props.page} of {props.totalPage}:</span>

        {getPages()}
        
        <a href="localhost"><i className="ion-arrow-right-b"></i></a>
      </div>
    </div>
  )
}

export default Pagination;