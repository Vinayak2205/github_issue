import React from "react";

export const Pagination = ({ issuePerPage, totalIssues, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalIssues / issuePerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item bg-dark">
            <a
              onClick={() => paginate(number)}
              href="!#"
              className="page-link bg-dark"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
