const queriesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_QUERY":
      return [...state, action.payload];
    case "REMOVE_QUERY":
      return [...state.filter(query => query !== action.payload)];
    default:
      return state;
  }
};

export default queriesReducer;
