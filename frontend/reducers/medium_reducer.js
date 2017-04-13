import { RECEIVE_MEDIUM, RECEIVE_ALL_MEDIA } from '../actions/medium_actions';
import merge from 'lodash/merge';


const MediumReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_MEDIA:
      return action.media;
    case RECEIVE_MEDIUM:
      newState = merge({}, state);
      newState[action.medium.id] = action.medium;
      return newState;
    default:
      return state;
  }
};

export default MediumReducer;
