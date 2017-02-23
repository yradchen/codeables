import { connect } from 'react-redux';
import { fetchSpecificProjects } from '../../actions/project_actions';
import NavBar from './nav_bar';

const mapStateToProps = (state) => {
  // const projects = state.projects;
  let keys = Object.keys(state.projects);
  const projects = keys.map((id) => (state.projects[id] ));
  return {
    projects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpecificProjects: (search) => dispatch(fetchSpecificProjects(search))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
