import React, { useState } from "react";

const SearchForm = ({ search }) => {
  const [query, setQuery] = useState("");

  const handleChange = e => setQuery(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    search(query);
    setQuery("");
  };

  return (
    <form id="searchForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Stories"
        id="query"
        value={query}
        onChange={handleChange}
        required
      />
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchForm;
