import React from "react";

export default function ({clienstPerPage, clients, setPage}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(clients / clienstPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <button
              className='button'
              key={number}
              onClick={() => setPage(number)}
            >
              {number}
            </button>
          ))}
      </ul>
    </nav>
  );
}
