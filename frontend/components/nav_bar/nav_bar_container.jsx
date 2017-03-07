import { connect } from 'react-redux';
import { fetchSpecificProjects } from '../../actions/project_actions';
import NavBar from './nav_bar';
import { setSearchTerms } from '../../actions/nav_bar_actions';

const mapStateToProps = (state) => {
  const keys = Object.keys(state.projects);
  const projects = keys.map((id) => (state.projects[id] ));
  return {
    projects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpecificProjects: (search) => dispatch(fetchSpecificProjects(search)),
    setSearchTerms: (searchTerms) => dispatch(setSearchTerms(searchTerms))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
