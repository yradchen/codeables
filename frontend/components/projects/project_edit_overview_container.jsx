import { connect } from 'react-redux';
import { createProject, updateProject, fetchProject } from '../../actions/project_actions';
import { updateInstruction, createInstruction, deleteInstruction } from '../../actions/instruction_actions';
import { createMedium, updateMedium } from '../../actions/medium_actions';
import ProjectEditPage from './project_edit_overview';

const mapStateToProps = (state, ownProps) => {
  let project = { title:'', description:'', instructions: [], medium: null };
  // debugger
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
  const userMedia = [];
  const projectMedia = [];
  const media = Object.keys(state.medium).forEach(id =>  {
    if (state.medium[id].mediable_type == "User") {
      userMedia.push(state.medium[id]);
    } else {
      projectMedia.push(state.medium[id]);
    }
  });

  return {
        project,
        instructions,
        userMedia,
        projectMedia };
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
