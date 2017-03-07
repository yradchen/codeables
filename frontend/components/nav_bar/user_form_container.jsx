import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import UserForm from './user_form';
import { setVisibility } from '../../actions/nav_bar_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    listVisibility: state.visibility
  };
}
;

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    fetchProjects: () => dispatch(fetchProjects()),
    setVisibility: (boolean) => dispatch(setVisibility(boolean))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
