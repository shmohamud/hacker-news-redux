import React, { Fragment } from "react";
import Moment from "react-moment";

const SearchResults = props => {
  const {
    hits: stories,
    nbHits,
    query,
    processingTimeMS,
    nbPages,
    params,
    page
  } = props.stories;

  console.log(props.queries);

  return (
    <Fragment>
      <p>
        {query ? (
          <span>
            {nbHits} results for <strong>{query}</strong> ({processingTimeMS}
            ms):
          </span>
        ) : params.slice(-10) === "front_page" ? (
          <strong>Top Stories</strong>
        ) : (
          <strong>Latest Stories</strong>
        )}
      </p>

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

      {props.queries.length > 0 && (
        <div>
          <hr />
          <h2>Redux Search History</h2>
          {props.queries.map(query => (
            <p>{query}</p>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default SearchResults;
