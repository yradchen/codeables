import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project_actions';
import ProjectDetail from './project_detail';
import { createComment, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  
  let comments = [];
  let instructions = [];

    // projects: Object.keys(state.projects).map(id => state.projects[id])
  if (state.projects[ownProps.params.id]) {
    if (state.projects[ownProps.params.id].comments) {
      comments = Object.keys(state.projects[ownProps.params.id].comments);
      comments = comments.map(id => state.projects[ownProps.params.id].comments[id]);
    }
    if (state.projects[ownProps.params.id].instructions) {
      instructions = Object.keys(state.projects[ownProps.params.id].instructions);
      instructions = instructions.map(id => state.projects[ownProps.params.id].instructions[id]);
    }
  }
  return  {
    project: state.projects[ownProps.params.id],
    comments,
    instructions,
    currentUser: state.session.currentUser
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
