import { RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT } from '../actions/project_actions';
import merge from 'lodash/merge';


const _projects = Object.freeze({
  1: {
    title: '',
    description: '',
    owner: '',
    cover_img: '',
    instructions: []
  }
});

const ProjectReducer = (state = _projects, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      newState = merge({}, state);
      newState[action.project.id] = action.project;
      return newState;
    case REMOVE_PROJECT:
      newState = merge({}, state);
      delete newState[action.project.id];
      return newState;
    default:
      return state;
  }
};

export default ProjectReducer;
