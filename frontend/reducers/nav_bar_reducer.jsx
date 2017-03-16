import { RECEIVE_VISIBILITY_STATE, RECEIVE_SEARCH_TERMS, RECEIVE_LOADING_STATE } from '../actions/nav_bar_actions';

import merge from 'lodash/merge';


const NavBarReducer = (state = { listVisibility: false, searchTerms: '', loading: false }, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_VISIBILITY_STATE:
      newState = merge({}, state);
      newState.listVisibility = action.visibility;
      return newState;
    case RECEIVE_SEARCH_TERMS:
      newState = merge({}, state);
      newState.searchTerms = action.searchTerms;
      return newState;
    case RECEIVE_LOADING_STATE:
      newState = merge({}, state);
      newState.loading = action.loadingVisibility;
      return newState;
    default:
      return state;
  }
};

export default NavBarReducer;
