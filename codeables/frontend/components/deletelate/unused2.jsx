// import React from 'react';
// import UserFormContainer from './user_form_container';
// import SessionFormContainer from '../session_form/session_form_container'

const NavBar = ({ children }) => {
  return (<div>
    <UserFormContainer />
    { children }
  </div>
)
};

export default Navbar;


file navbar

const realNavBar = () => {
  return (
  <header>
    <h2>images and stuff</h2>
    <UserFormContainer />
  </header>
  )
}

const App = ({ children }) => {
  return (
  <div>
    <Navbar />
    { children }
    <Footer />
  </div>
  )
}

// route
