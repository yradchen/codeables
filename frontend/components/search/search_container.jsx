import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import Searches from './search';
import { fetchSpecificProjects } from '../../actions/project_actions';
import { setSearchTerms } from '../../actions/nav_bar_actions';

const mapStateToProps = (state) => {
  return {
    projects: Object.keys(state.projects).map(id => state.projects[id]),
    inputVal: state.navBar.searchTerms
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpecificProjects: (search) => dispatch(fetchSpecificProjects(search)),
    setSearchTerms: (searchTerms) => dispatch(setSearchTerms(searchTerms))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searches);
