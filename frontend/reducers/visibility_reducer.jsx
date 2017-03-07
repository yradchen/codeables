import { RECEIVE_VISIBILITY_STATE } from '../actions/nav_bar_actions';

import merge from 'lodash/merge';



const VisibilityReducer = (state = false, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_VISIBILITY_STATE:
      return action.visibility;
    default:
      return state;
  }
};

export default VisibilityReducer;
