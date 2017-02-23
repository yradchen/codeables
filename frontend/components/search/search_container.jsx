import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import Searches from './search';
import { fetchSpecificProjects } from '../../actions/project_actions';


const mapStateToProps = (state) => {
  return {
    projects: Object.keys(state.projects).map(id => state.projects[id])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpecificProjects: (search) => dispatch(fetchSpecificProjects(search))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searches);
