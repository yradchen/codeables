export const RECEIVE_VISIBILITY_STATE = 'RECEIVE_VISIBILITY_STATE';
export const RECEIVE_SEARCH_TERMS = 'RECEIVE_SEARCH_TERMS';
export const RECEIVE_LOADING_STATE = 'RECEIVE_LOADING_STATE';

const receiveVisibility = (visibility) => ({
  type: RECEIVE_VISIBILITY_STATE,
  visibility
});

const receiveSearchTerms = (searchTerms) => ({
  type: RECEIVE_SEARCH_TERMS,
  searchTerms
});

const receiveLoadingState = (loadingVisibility) => ({
  type: RECEIVE_LOADING_STATE,
  loadingVisibility
});

export const setLoadingState = (boolean) => dispatch => (
  dispatch(receiveLoadingState(boolean))
);

export const setVisibility = (boolean) => dispatch => (
  dispatch(receiveVisibility(boolean))
);

export const setSearchTerms = (searchTerms) => dispatch => (
  dispatch(receiveSearchTerms(searchTerms))
);
