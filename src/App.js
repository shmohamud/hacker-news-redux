import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import { useSelector, useDispatch } from "react-redux";
import { addQuery } from "./actions";
import "./App.css";

const numResults = 10;
const API = "http://hn.algolia.com/api/v1/search";
const FRONT_PAGE_STORIES = `${API}?tags=front_page&hitsPerPage=${numResults}`;
const LATEST_STORIES = `${API}_by_date?tags=story&hitsPerPage=${numResults}`;

const App = () => {
  const queries = useSelector(redux => redux.queries);
  const dispatch = useDispatch();

  const [stories, setStories] = useState({});

  const fetchStories = async request => {
    const stories = await fetch(request);
    stories.json().then(stories => setStories(stories));
  };

  const search = query => {
    fetchStories(
      `${API}?query=${query}&tags=story&hitsPerPage=${numResults}&page=1`
    );
    dispatch(addQuery(query));
  };

  useEffect(() => {
    fetchStories(FRONT_PAGE_STORIES, "Top Stories");
  }, []);

  return (
    <div>
      <button onClick={() => fetchStories(FRONT_PAGE_STORIES, "Top Stories")}>
        Top Stories
      </button>
      <button onClick={() => fetchStories(LATEST_STORIES, "Latest Stories")}>
        Latest Stories
      </button>
      <SearchForm search={search} />
      <hr />
      {stories.hits ? (
        <SearchResults stories={stories} queries={queries} />
      ) : (
        "Loading stories..."
      )}
    </div>
  );
};

export default App;
