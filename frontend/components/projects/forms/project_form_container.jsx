import { connect } from 'react-redux';
import { updateProject, fetchProject } from '../../../actions/project_actions';
import { updateInstruction} from '../../../actions/instruction_actions';
import Projectform from './project_form';
import { setLoadingState } from '../../../actions/nav_bar_actions';



const mapStateToProps = (state, ownProps) => {
  let formInfo = { title:'', description:'', cover_img: '', imageUrl: '', owner: '' };
  if (ownProps.params.projectId) {
    if (state.projects[parseInt(ownProps.params.projectId)]); {
      formInfo = state.projects[parseInt(ownProps.params.projectId)];
    }
  }
  return { currentUser: state.session.currentUser,
           formInfo };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // look at ownProps //
  return {
    updateProjectForm: (project) => dispatch(updateProject(project)),
    fetchProject: (id) => dispatch(fetchProject(id)),
    setLoadingState: (boolean) => dispatch(setLoadingState(boolean)),
    fetchInstruction: (instruction) => dispatch(fetchInstruction(instruction)),
    updateInstruction: (instruction) => dispatch(updateInstruction(instruction))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projectform);
