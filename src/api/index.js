const numResults = 10;
export const API = "http://hn.algolia.com/api/v1/search";
export const TOP_STORIES = `${API}?tags=front_page&page=1&hitsPerPage=${numResults}`;
export const LATEST_STORIES = `${API}_by_date?tags=story&page=1&hitsPerPage=${numResults}`;
export const SEARCH_STORIES = `${API}?&tags=story&page=1&hitsPerPage=${numResults}&query=`;
