import { connect } from 'react-redux';
import { createProject, updateProject, fetchProject } from '../../actions/project_actions';
import { createInstruction } from '../..//util/instruction_api_util';
import ProjectEditPage from './project_edit';

const mapStateToProps = (state, ownProps) => {
  let project = { title:'', description:'', instructions: [] };
  if (ownProps.params.projectId) {
    project = state.projects[parseInt(ownProps.params.projectId)];
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
    fetchProject: (id) => dispatch(fetchProject(id)),
    createInstruction: (instruction) => createInstruction(instruction)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectEditPage);
