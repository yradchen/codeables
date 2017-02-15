import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserForm from './user_form';

// GreetingContainer passes as props to the presentational component currentUser from the state and the logout action creator. Set up mapStateToProps and mapDispatchToProps accordingly.
const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);