import { connect } from 'react-redux';
import { createInstruction, updateInstruction, fetchInstruction, deleteInstruction } from '../../actions/instruction_actions';
import StepEdit from './step_edit';
import { fetchProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  let instruction = { step_title:'', step_detail:'', media: '', mediaUrl: '', project_id: '', id: '' };
  const project = state.projects[parseInt(ownProps.params.projectId)];
  const arrayIndex = parseInt(ownProps.params.id);
  if (project) {
    instruction = project.instructions[arrayIndex];
  }
  return { instruction, project };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProject: (project) => dispatch(fetchProject(project)),
    fetchInstruction: (instruction) => dispatch(fetchInstruction(instruction)),
    updateInstruction: (instruction) => dispatch(updateInstruction(instruction)),
    deleteInstruction: (id) => dispatch(deleteInstruction(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepEdit);
