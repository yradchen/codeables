import { connect } from 'react-redux';
import { createProject, updateProject, fetchProject } from '../../actions/project_actions';
import ProjectForm from './project_form';

const mapStateToProps = (state, ownProps) => {
  let project = { title:'', description:'' };
  if (ownProps.params.projectId) {
    project = state.projects[ownProps.params.projectId];
  }
  return { project };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = createProject;
  if (ownProps.params.projectId) {
    action = updateProject;
  }
  return {
    action: (project) => dispatch(action(project)),
    fetchProject: (id) => dispatch(fetchProject(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
