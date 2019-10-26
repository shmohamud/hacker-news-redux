import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import SearchHistory from "./components/SearchHistory";
import { useSelector, useDispatch } from "react-redux";
import { addQuery, removeQuery } from "./actions";
import "./App.css";

const numResults = 10,
  API = "http://hn.algolia.com/api/v1/search",
  TOP_STORIES = `${API}?tags=front_page&hitsPerPage=${numResults}`,
  LATEST_STORIES = `${API}_by_date?tags=story&hitsPerPage=${numResults}`;

const App = () => {
  const queries = useSelector(state => state.queries);
  const dispatch = useDispatch();

  const [stories, setStories] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  const getStories = async request => {
    setIsFetching(true); // Prevent double render of SearchResults
    const stories = await fetch(request);
    stories.json().then(stories => {
      setStories(stories);
      setIsFetching(false); // Allow SearchResults to render
    });
  };

  // Fetch results of search and add query to Redux store
  const search = query => {
    getStories(`${API}?query=${query}&tags=story&hitsPerPage=${numResults}`);
    !queries.includes(query) && dispatch(addQuery(query));
  };

  // Remove a query from Redux store
  const destroy = query => {
    queries.includes(query) && dispatch(removeQuery(query));
  };

  // Load Top Stories when application mounts
  useEffect(() => {
    getStories(TOP_STORIES);
  }, []);

  return (
    <>
      <button onClick={() => getStories(TOP_STORIES)}>Top Stories</button>
      <button onClick={() => getStories(LATEST_STORIES)}>Latest Stories</button>
      <SearchForm search={search} />
      <hr />
      {!isFetching && stories.hits && (
        <SearchResults stories={stories} queries={queries} />
      )}
      <SearchHistory queries={queries} search={search} destroy={destroy} />
    </>
  );
};

export default App;
