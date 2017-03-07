import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProjectReducer from './project_reducer';
import NavBarReducer from './nav_bar_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  projects: ProjectReducer,
  navBar: NavBarReducer
});

export default rootReducer;
