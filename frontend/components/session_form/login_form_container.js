import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import LoginForm from './login_form';


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

//
// justify-content (horizontal setting)
// flex-start: Items align to the left side of the container.
// flex-end: Items align to the right side of the container.
// center: Items align at the center of the container.
// space-between: Items display with equal spacing between them.
// space-around: Items display with equal spacing around them.

// align-items - aligns items vertically and accepts the following values:
//
// flex-start: Items align to the top of the container.
// flex-end: Items align to the bottom of the container.
// center: Items align at the vertical center of the container.
// baseline: Items display at the baseline of the container.
// stretch: Items are stretched to fit the container.


// flex-direction -direction items are placed in the container, and accepts the following values:
//
// row: Items are placed the same as the text direction.
// row-reverse: Items are placed opposite to the text direction.
// column: Items are placed top to bottom.
// column-reverse: Items are placed bottom to top.

// align-self accepts same value as align-items

//
// Oh no! The frogs are all squeezed onto a single row of lilypads. Spread them out using the flex-wrap property, which accepts the following values:
//
// nowrap: Every item is fit to a single line.
// wrap: Items wrap around to additional lines.
// wrap-reverse: Items wrap around to additional lines in reverse.

// 
// The frogs are spread all over the pond, but the lilypads are bunched at the top. You can use align-content to set how multiple lines are spaced apart from each other. This property takes the following values:
//
// flex-start: Lines are packed at the top of the container.
// flex-end: Lines are packed at the bottom of the container.
// center: Lines are packed at the vertical center of the container.
// space-between: Lines display with equal spacing between them.
// space-around: Lines display with equal spacing around them.
// stretch: Lines are stretched to fit the container.
