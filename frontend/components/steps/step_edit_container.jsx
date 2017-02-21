import { connect } from 'react-redux';
// import { createInstruction, updateInstruction, fetchinstruction } from '../../actions/instruction_actions';
import StepEdit from './step_edit';

const mapStateToProps = (state, ownProps) => {
  let instruction = { step_title:'', step_detail:'', media: '', mediaUrl: '' };
  if (ownProps.params.projectId) {
    const project = state.projects[parseInt(ownProps.params.projectId)];
    const id = parseInt(ownProps.params.id);
    instruction = project.instructions[id];
  }
  return { instruction };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateProject: (project) => dispatch(updateProject(project)),
    fetchProject: (id) => dispatch(fetchProject(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepEdit);
// const mapStateToProps = (state, ownProps) => {
//   let project = { title:'', description:'', cover_img: '', imageUrl: '' };
//   if (ownProps.params.projectId) {
//     project = state.projects[parseInt(ownProps.params.projectId)];
//   }
//   return { project };
// };
// state.projects[parseInt(ownProps.params.projectId)]
// ownProps.params.projectId
