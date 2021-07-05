import React from "react";

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className="pagination__item">
          <button onClick={() => paginate(number)}>Page {number}</button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
