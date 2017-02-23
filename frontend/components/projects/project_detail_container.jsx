import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project_actions';
import ProjectDetail from './project_detail';
import { createComment } from '../../actions/comment_actions';
const mapStateToProps = (state, ownProps) => {
  return  {
    project: state.projects[ownProps.params.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
    createComment: (comment) => dispatch(createComment(comment))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
