import { connect } from 'react-redux';
import { createInstruction, updateInstruction } from '../../util/instruction_api_util';
import StepEdit from './step_edit';

const mapStateToProps = (state, ownProps) => {
  let instruction = { step_title:'', step_detail:'', media: '', mediaUrl: '' };

  if (ownProps.params.projectId) {
    const project = state.projects[parseInt(ownProps.params.projectId)];
    const id = parseInt(ownProps.params.id);
    if (project.instructions[id]) {
      instruction = project.instructions[id];
    } else {
      let number = parseInt(ownProps.params.id.slice(1));
      let instructionNumber = parseInt(number + 1);
      instruction = { step_title: `Step ${instructionNumber}`, step_detail: "", media: '', mediaUrl: '' };
    }
  }
  return { instruction };
};
// {id: 12, step_title: "Step two:", step_detail: "hit create", media: "/flexbox.jpg"}
const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  if (ownProps.params.id[0] === "N") {
    action = createInstruction;
  } else {
    action = updateInstruction;
  }
  return {
    updateProject: (project) => dispatch(updateProject(project)),
    fetchProject: (id) => dispatch(fetchProject(id)),
    action: (instruction) => action(instruction)
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
