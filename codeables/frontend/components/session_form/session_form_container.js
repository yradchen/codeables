import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state, ownProps) => {
  let submitText = "Create Account";
  let heading = "Sign up";
  if (ownProps.location .pathname.includes("login")) {
    submitText = "Login";
    heading = "login";
  }
  return {
    submitText,
    heading,
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const loggingIn = ownProps.location .pathname.includes("login");

  const processForm = loggingIn ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
