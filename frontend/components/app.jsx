import React from 'react';

import NavBar from './nav_bar/nav_bar';
import Footer from './footer/footer';
import NavBarContainer from './nav_bar/nav_bar_container';
import { setVisibility } from '../actions/nav_bar_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    listVisibility: state.navBar.listVisibility
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibility: (boolean) => dispatch(setVisibility(boolean))
  }
}

const removeVisibility = (setVisibility, listVisibility) => {
  return (e) => {
    if (listVisibility) {
      setVisibility(false);
    }
  }
}


const App = ({ children, setVisibility, listVisibility }) => {
  let navBarflex = "nav-top";
  if (children.props.location.pathname.includes("account")) {
    navBarflex += " center"
  };
  return (
  <div onClick={removeVisibility(setVisibility, listVisibility)}>
    <NavBarContainer flex={navBarflex}/>
    { children }
    <Footer />
  </div>
  )
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
