import { connect } from 'react-redux';
import { createProject, updateProject, fetchProject } from '../../actions/project_actions';
import { updateInstruction, createInstruction, deleteInstruction } from '../../actions/instruction_actions';
import { createMedium } from '../../actions/medium_actions';
import ProjectEditPage from './project_edit_overview';

const mapStateToProps = (state, ownProps) => {
  let project = { title:'', description:'', instructions: [], medium: null };
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
  return {
    createMedium: (medium) => dispatch(createMedium(medium)),
    updateMedium: (medium) => dispatch(updateMedium(medium)),
    updateProject: (project) => dispatch(updateProject(project)),
    fetchProject: (id) => dispatch(fetchProject(id)),
    createInstruction: (instruction) => dispatch(createInstruction(instruction)),
    deleteInstruction: (id) => dispatch(deleteInstruction(id)),
    updateInstruction: (instruction) => dispatch(updateInstruction(instruction))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectEditPage);
