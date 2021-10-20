import React from 'react';
import lodash from 'lodash';

const Paginate = (props) => {
  const { state, handlePageChange} = props;
  console.log(state.currentPage)
  const pageNumber = Math.ceil(state.movies.length / state.pageSize);
  const pageNumberArr = lodash.range(1, pageNumber + 1);

  if (pageNumber === 1) return null;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pageNumberArr.map((page) => (
          <li className={state.currentPage === page ? "page-item active" : "page-item"} key={page}>
            <a className="page-link" onClick={() => handlePageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginate;
