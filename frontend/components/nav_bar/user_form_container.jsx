import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import UserForm from './user_form';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,

});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    fetchProjects: () => dispatch(fetchProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
