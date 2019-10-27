import React from "react";
import SearchForm from "./SearchForm";
import { TOP_STORIES, LATEST_STORIES } from "../api";

export default function SearchHeader({ getStories, search }) {
  return (
    <div>
      <button onClick={() => getStories(TOP_STORIES)}>Top Stories</button>
      <button onClick={() => getStories(LATEST_STORIES)}>Latest Stories</button>
      <SearchForm search={search} />
      <hr />
    </div>
  );
}
