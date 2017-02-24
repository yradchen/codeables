import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project_actions';
import ProjectDetail from './project_detail';
import { createComment, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  let comments;
    // projects: Object.keys(state.projects).map(id => state.projects[id])
  if (state.projects[ownProps.params.id]) {
    comments = Object.keys(state.projects[ownProps.params.id].comments);
    comments = comments.map(id => state.projects[ownProps.params.id].comments[id]);
  }
  return  {
    project: state.projects[ownProps.params.id],
    comments
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
