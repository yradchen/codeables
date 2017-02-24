import { RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT } from '../actions/project_actions';
import merge from 'lodash/merge';
import { RECEIVE_INSTRUCTION, REMOVE_INSTRUCTION } from '../actions/instruction_actions';
import { REMOVE_COMMENT, RECEIVE_COMMENT } from '../actions/comment_actions';

const _projects = Object.freeze({
  // "": {
  //   title: '',
  //   description: '',
  //   owner: '',
  //   cover_img: '',
  //   instructions: []
  // }
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
    case RECEIVE_INSTRUCTION:
      newState = merge({}, state);
      let project = newState[action.instruction.project_id];
      project.instructions[action.instruction.id] = action.instruction;
      return newState;
    case REMOVE_INSTRUCTION:
      newState = merge({}, state);
      delete newState[action.instruction.project_id].instructions[action.instruction.id];
      return newState;
    case REMOVE_COMMENT:
      newState = merge({}, state);
      let project_id = action.comment.project_id;
      let commentId = action.comment.id;
      delete newState[project_id].comments[commentId];
      return newState;
    case RECEIVE_COMMENT:
      newState = merge({}, state);
      project_id = action.comment.project_id;
      commentId = action.comment.id;
      newState[project_id].comments[commentId] = action.comment;
    return newState;
    default:
      return state;
  }
};

export default ProjectReducer;
