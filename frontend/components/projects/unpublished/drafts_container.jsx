import { fetchSpecificProjects } from '../../../actions/project_actions';
import Drafts from './drafts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    projects: Object.keys(state.projects).map(id => state.projects[id]),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpecificProjects: (search) => dispatch(fetchSpecificProjects(search))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drafts);
