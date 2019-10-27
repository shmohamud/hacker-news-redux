import React, { useEffect } from "react";
import SearchHeader from "./components/SearchHeader";
import SearchResults from "./components/SearchResults";
import SearchHistory from "./components/SearchHistory";
import { useSelector, useDispatch } from "react-redux";
import { addQuery, setStories } from "./redux/actions";
import "./App.css";

import { TOP_STORIES, SEARCH_STORIES } from "./api";

export default function App() {
  const dispatch = useDispatch();
  const queries = useSelector(state => state.queries);
  const stories = useSelector(state => state.stories);

  // Fetch from API
  const getStories = async (request, query = "") => {
    const data = await fetch(request + query);
    data.json().then(data => {
      // If query is new, add it to history
      query.length && !queries.includes(query) && dispatch(addQuery(query));
      // Update stories in Redux to update <SearchResults> component
      dispatch(setStories(data));
    });
  };

  // Pass search query from <SearchForm> or <SearchHistory>
  const search = query => getStories(SEARCH_STORIES, query);

  useEffect(() => {
    getStories(TOP_STORIES);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <SearchHeader getStories={getStories} search={search} />
      {stories.hits && <SearchResults />}
      <SearchHistory search={search} />
    </div>
  );
}
