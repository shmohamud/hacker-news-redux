import React from "react";

const SearchHistory = ({ queries, search, destroy }) => {
  return (
    <>
      <h2>Redux Search History</h2>
      {queries.length > 0 ? (
        queries.map((query, index) => (
          <p key={index}>
            {query}
            <button onClick={() => search(query)}>View</button>
            <button onClick={() => destroy(query)}>Remove</button>
          </p>
        ))
      ) : (
        <p>No searches yet...</p>
      )}
    </>
  );
};

export default SearchHistory;
