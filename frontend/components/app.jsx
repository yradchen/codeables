import React from 'react';
// import UserFormContainer from './user/user_form_container';
import NavBar from './nav_bar/nav_bar'
import Footer from './footer/footer'

const App = ({ children }) => {
  let navBarflex = "nav-top"
  if (children.props.location.pathname.includes("account")) {
    navBarflex += " center"
  };
  return (
  <div>
    <NavBar flex={navBarflex}/>
    { children }
    <Footer />
  </div>
  )
}
{/* <Footer /> */}
export default App;
