import React from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";

export default function SearchResults(props) {
  const {
    hits: stories,
    nbHits,
    query,
    processingTimeMS: time,
    nbPages,
    params,
    page
  } = useSelector(state => state.stories);

  // Possible headers for results list
  const topStoriesHeader = <strong>Top Stories</strong>;
  const latestStoriesHeader = <strong>Latest Stories</strong>;
  const searchResultsHeader = (
    <span>
      {nbHits.toLocaleString()} results for <strong>{query}</strong> ({time}ms):
    </span>
  );

  return (
    <div>
      <h2 className="results-header">
        {query
          ? // If there is a query, show it in header
            searchResultsHeader
          : // If there isn't, show Top or Latest Stories
          params.slice(-10) === "front_page"
          ? topStoriesHeader
          : latestStoriesHeader}
      </h2>

      {/* List of Stories: Top, Recent or by Search */}
      <ol className="stories">
        {stories.map(story => (
          <li key={story.objectID}>
            <a href={story.url} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>
            <small>
              {story.points} points by {story.author}{" "}
              <Moment fromNow>{story.created_at}</Moment> | {story.num_comments}{" "}
              comments
            </small>
          </li>
        ))}
      </ol>

      {/* Number of pages of results */}
      {page > 0 && (
        <p className="pages">
          Page {page} of {nbPages}
        </p>
      )}
      <hr />
    </div>
  );
}
