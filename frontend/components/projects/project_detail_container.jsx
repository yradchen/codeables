import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project_actions';
import ProjectDetail from './project_detail';

const mapStateToProps = (state, ownProps) => {
  return  {
    project: state.projects[ownProps.params.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
