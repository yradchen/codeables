import { connect } from 'react-redux';
import { logout, signup } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signup: user => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
