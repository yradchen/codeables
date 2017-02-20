import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';
import ProjectForm from './project_form';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project, obj) => dispatch(createProject(project, obj))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
