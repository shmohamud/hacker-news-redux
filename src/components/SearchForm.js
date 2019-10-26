import React, { useState } from "react";

const SearchForm = props => {
  const [query, setQuery] = useState("");

  const handleChange = e => setQuery(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    props.search(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange} />
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchForm;
