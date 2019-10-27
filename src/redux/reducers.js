import { combineReducers } from "redux";

const queriesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_QUERY":
      console.log(`%c "${action.payload}" added to store`, `color: #bada55`);
      return [...state, action.payload];
    case "REMOVE_QUERY":
      console.log(`%c ${action.payload} removed from store`, `color: #d92121`);
      return [...state.filter(query => query !== action.payload)];
    default:
      return state;
  }
};

const storiesReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_STORIES":
      action.payload.query &&
        console.log(`Showing results for "${action.payload.query}"`);
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  stories: storiesReducer,
  queries: queriesReducer
});

export default rootReducer;
