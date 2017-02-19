import { connect } from 'react-redux';
import { logout, login } from '../../actions/project_actions';
import ProjectForm from './project_form';

const mapStateToProps = (state) => ({
  project: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user))
  };
};

export default connect({

});
