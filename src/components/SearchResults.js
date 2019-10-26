import React, { Fragment } from "react";
import Moment from "react-moment";

const SearchResults = props => {
  const {
    hits: stories,
    nbHits,
    query,
    processingTimeMS,
    nbPages,
    page
  } = props.stories;

  return (
    <Fragment>
      {query && (
        <p>
          {nbHits} results for <strong>{query}</strong> ({processingTimeMS}ms):
        </p>
      )}

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

      {page > 0 && (
        <p>
          Page {page} of {nbPages}
        </p>
      )}
    </Fragment>
  );
};

export default SearchResults;
