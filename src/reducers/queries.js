const queries = (state = [], action) => {
  switch (action.type) {
    case "ADD_QUERY":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default queries;
