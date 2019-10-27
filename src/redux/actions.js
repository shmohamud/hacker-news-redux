export const addQuery = query => {
  return {
    type: "ADD_QUERY",
    payload: query
  };
};

export const removeQuery = query => {
  return {
    type: "REMOVE_QUERY",
    payload: query
  };
};

export const setStories = data => {
  return {
    type: "SET_STORIES",
    payload: data
  };
};
