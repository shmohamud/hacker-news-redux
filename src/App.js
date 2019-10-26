import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import "./App.css";

const API = "http://hn.algolia.com/api/v1/search";
const FRONT_PAGE_STORIES = `${API}?tags=front_page`;
// const LATEST_STORIES = `${API}_by_date?tags=story`;

const App = () => {
  const [stories, setStories] = useState({});

  const search = query => {
    fetchStories(`${API}?query=${query}&tags=story&page=1`);
  };

  async function fetchStories(request) {
    const res = await fetch(request);
    res.json().then(res => setStories(res));
  }

  useEffect(() => {
    fetchStories(FRONT_PAGE_STORIES);
  }, []);

  return (
    <div>
      <SearchForm search={search} />
      {stories.hits ? <SearchResults stories={stories} /> : "Loading"}
    </div>
  );
};

export default App;
