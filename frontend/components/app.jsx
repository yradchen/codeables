import React from 'react';

import NavBar from './nav_bar/nav_bar';
import Footer from './footer/footer';
import NavBarContainer from './nav_bar/nav_bar_container';
import { setVisibility } from '../actions/nav_bar_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    listVisibility: state.navBar.listVisibility,
    loading: state.navBar.loading
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

const spinner = (loading) => {
  if (loading) {
    return (
      <section>
        <div id="loading-spinner"></div>
        <div id="grey-loader"></div>
      </section>
    )
  } else {
    return <div></div>
  }
}


const App = ({ children, setVisibility, listVisibility, loading }) => {
  let navBarflex = "nav-top";
  if (children.props.location.pathname.includes("account")) {
    navBarflex += " center"
  };
  return (
    <div>
      {spinner(loading)}
      <div onClick={removeVisibility(setVisibility, listVisibility)}>
        <NavBarContainer flex={navBarflex}/>
        { children }
        <Footer />
      </div>
    </div>
  )
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
