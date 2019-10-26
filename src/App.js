import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import "./App.css";

const API = "http://hn.algolia.com/api/v1/search";
const FRONT_PAGE_STORIES = `${API}?tags=front_page`;
const LATEST_STORIES = `${API}_by_date?tags=story`;

export default class App extends Component {
  state = {
    stories: {}
  };

  fetchStories = request => {
    fetch(request)
      .then(response => response.json())
      .then(stories => this.setState({ stories }));
  };

  componentDidMount() {
    this.fetchStories(FRONT_PAGE_STORIES);
  }

  search = query => {
    this.fetchStories(`${API}?query=${query}&tags=story&page=1`);
  };

  render() {
    const { stories } = this.state;
    console.log(stories);

    return (
      <div>
        <SearchForm search={this.search} />
        {stories.hits ? <SearchResults stories={stories} /> : "Loading"}
      </div>
    );
  }
}
