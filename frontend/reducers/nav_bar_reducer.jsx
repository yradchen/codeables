import { RECEIVE_VISIBILITY_STATE, RECEIVE_SEARCH_TERMS } from '../actions/nav_bar_actions';

import merge from 'lodash/merge';


// change to nav_bar reducer
const NavBarReducer = (state = { listVisibility: false, searchTerms: '' }, action) => {
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
    default:
      return state;
  }
};

export default NavBarReducer;
