import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProjectReducer from './project_reducer';
import VisibilityReducer from './visibility_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  projects: ProjectReducer,
  visibility: VisibilityReducer
});

export default rootReducer;
