import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProjectReducer from './project_reducer';
import NavBarReducer from './nav_bar_reducer';
import MediumReducer from './medium_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  projects: ProjectReducer,
  navBar: NavBarReducer,
  medium: MediumReducer
});

export default rootReducer;
