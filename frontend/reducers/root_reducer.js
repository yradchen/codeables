import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ProjectReducer from './project_reducer';
import CommentReducer from './comment_reducer';
const rootReducer = combineReducers({
  comments: CommentReducer,
  session: SessionReducer,
  projects: ProjectReducer
});

export default rootReducer;
