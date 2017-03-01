import { connect } from 'react-redux';
import { createProject, updateProject, fetchProject } from '../../actions/project_actions';
import Projectform from './project_form';

const mapStateToProps = (state, ownProps) => {

  let project = { title:'', description:'', cover_img: '', imageUrl: '', owner: '' };
  if (ownProps.params.projectId) {
    if (state.projects[parseInt(ownProps.params.projectId)]); {
      project = state.projects[parseInt(ownProps.params.projectId)];
    }
  }
  return { project };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateProject: (project) => dispatch(updateProject(project)),
    fetchProject: (id) => dispatch(fetchProject(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projectform);
