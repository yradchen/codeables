import { connect } from 'react-redux';
import { fetchProjects } from '../../actions/project_actions';
import ProjectIndex from './project_index';

const mapStateToProps = (state) => {
    return {
      projects: Object.keys(state.projects).map(id => state.projects[id])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      fetchProjects: () => dispatch(fetchProjects())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);
