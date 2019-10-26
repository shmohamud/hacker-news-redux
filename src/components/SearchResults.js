import React, { Component, Fragment } from "react";
import Moment from "react-moment";

export class SearchResults extends Component {
  render() {
    let {
      hits: stories,
      nbHits,
      query
      //   nbPages, page, params, processingTimeMS,
    } = this.props.stories;

    return (
      <Fragment>
        {query && (
          <p>
            {nbHits} results for <strong>{query}</strong>:
          </p>
        )}

        <ol className="stories">
          {stories.map(story => (
            <li key={story.objectID}>
              <a href={story.url}>{story.title}</a>
              <small>
                {story.points} points by {story.author}{" "}
                <Moment fromNow>{story.created_at}</Moment> |{" "}
                {story.num_comments} comments
              </small>
            </li>
          ))}
        </ol>
      </Fragment>
    );
  }
}

export default SearchResults;
