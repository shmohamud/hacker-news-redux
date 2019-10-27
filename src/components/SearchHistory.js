import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeQuery } from "../redux/actions";

export default function SearchHistory({ search }) {
  const dispatch = useDispatch();
  const queries = useSelector(state => state.queries);

  return (
    <div>
      <h2>Redux Search History</h2>
      {queries.length > 0 ? (
        // Show search history from newest to oldest
        queries
          .slice(0)
          .reverse()
          .map((query, index) => (
            <p key={index}>
              {query}
              <button onClick={() => search(query)}>View Results</button>
              <button onClick={() => dispatch(removeQuery(query))}>
                Remove
              </button>
            </p>
          ))
      ) : (
        <p>No searches yet...</p>
      )}
    </div>
  );
}
