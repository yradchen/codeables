export const RECEIVE_VISIBILITY_STATE = 'RECEIVE_VISIBILITY_STATE';
export const RECEIVE_SEARCH_TERMS = 'RECEIVE_SEARCH_TERMS';

const receiveVisibility = (visibility) => ({
  type: RECEIVE_VISIBILITY_STATE,
  visibility
});

const receiveSearchTerms = (searchTerms) => ({
  type: RECEIVE_SEARCH_TERMS,
  searchTerms
});

export const setVisibility = (boolean) => dispatch => (
  dispatch(receiveVisibility(boolean))
);

export const setSearchTerms = (searchTerms) => dispatch => (
  dispatch(receiveSearchTerms(searchTerms))
);
