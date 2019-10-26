import React from "react";
import Moment from "react-moment";

const SearchResults = props => {
  const {
    hits: stories,
    nbHits,
    query,
    processingTimeMS: time,
    nbPages,
    params,
    page
  } = props.stories;

  console.log(props.queries);

  // Possible headers for results list
  const topStoriesHeader = <strong>Top Stories</strong>;
  const latestStoriesHeader = <strong>Latest Stories</strong>;
  const searchResultsHeader = (
    <span>
      {nbHits.toLocaleString()} results for <strong>{query}</strong> ({time}ms):
    </span>
  );

  return (
    <>
      <p>
        {/* Results List Header */}
        {query
          ? // If there is a query, show the search results header
            searchResultsHeader
          : // If no queries, the options are Top and Latest Stories
          params.slice(-10) === "front_page"
          ? // "front_page" at end of params indicates a Top Stories request
            topStoriesHeader
          : // In this app, the only remaining option is a Latest Stories request
            latestStoriesHeader}
      </p>

      {/* List of Stories: Top, Recent or by Search */}
      <ol className="stories">
        {stories.map(story => (
          <li key={story.objectID}>
            <a href={story.url}>{story.title}</a>
            <small>
              {story.points} points by {story.author}{" "}
              <Moment fromNow>{story.created_at}</Moment> | {story.num_comments}{" "}
              comments
            </small>
          </li>
        ))}
      </ol>

      {/* If search returns multiple pages, show how many */}
      {page > 0 && (
        <p>
          Page {page} of {nbPages}
        </p>
      )}
      <hr />
    </>
  );
};

export default SearchResults;
