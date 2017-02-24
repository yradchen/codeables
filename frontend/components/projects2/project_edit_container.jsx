import { connect } from 'react-redux';
import { createProject, updateProject, fetchProject, deleteProject } from '../../actions/project_actions';
import { createInstruction, deleteInstruction } from '../..//actions/instruction_actions';
import ProjectEditPage from './project_edit';

const mapStateToProps = (state, ownProps) => {
  let project = { title:'', description:'', instructions: [] };
  let instructions = [];
  if (ownProps.params.projectId) {
    project = state.projects[parseInt(ownProps.params.projectId)];
    if (project) {
      if (project.instructions) {
        instructions = Object.keys(state.projects[ownProps.params.projectId].instructions);
        instructions = instructions.map(id => state.projects[ownProps.params.projectId].instructions[id]);
      }
    }
  }


  return { project, instructions };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  let action = createProject;
  if (ownProps.params.projectId) {
    action = updateProject;
  }
  return {
    action: (project) => dispatch(action(project)),
    fetchProject: (id) => dispatch(fetchProject(id)),
    createInstruction: (instruction) => dispatch(createInstruction(instruction)),
    deleteProject: (id) => dispatch(deleteProject(id)),
    deleteInstruction: (id) => dispatch(deleteInstruction(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectEditPage);
