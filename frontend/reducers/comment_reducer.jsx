import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

const _comment = Object.freeze({
    1: { username: 'Oscar', content: 'I like it.' }
});

const CommentReducer = (state = _comment, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      newState = merge({}, state);
      newState[action.comment.id] = ation.comment;
      return newState;
    case REMOVE_COMMENT:
      newState = merge({}, state);
      delete newState[action.comment.id];
      return newState;
    default:
      return state;
  }
};

export default CommentReducer;
