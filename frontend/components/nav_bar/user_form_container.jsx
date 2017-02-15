import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import UserForm from './user_form';

// GreetingContainer passes as props to the presentational component currentUser from the state and the logout action creator. Set up mapStateToProps and mapDispatchToProps accordingly.
const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
