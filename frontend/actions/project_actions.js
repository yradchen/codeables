import * as ProjectAPIUtil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';


const receiveAllProjects = (projects) => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
});

const removeProject = (project) => ({
  type: REMOVE_PROJECT,
  project
});

export const fetchProjects = () => dispatch => (
  ProjectAPIUtil.fetchProjects().then(
    projects => dispatch(receiveAllProjects(projects))
  )
);
export const fetchSpecificProjects = (search) => dispatch => (
  ProjectAPIUtil.fetchSpecificProjects(search).then(
    projects => dispatch(receiveAllProjects(projects))
  )
);

export const fetchProject = (id) => dispatch => (
  ProjectAPIUtil.fetchProject(id).then(
    project => dispatch(receiveProject(project))
  )
);

export const createProject = (project) => dispatch => (
  ProjectAPIUtil.createProject(project).then(
    project => dispatch(receiveProject(project))
  )
);

export const updateProject = (project) => dispatch => (
  ProjectAPIUtil.updateProject(project).then(
    project => dispatch(receiveProject(project))
  )
);

export const deleteProject = (id) => dispatch => (
  ProjectAPIUtil.deleteProject(id).then(
    project => dispatch(removeProject(project))
  )
);
