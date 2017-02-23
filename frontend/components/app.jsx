import React from 'react';
// import UserFormContainer from './user/user_form_container';
import NavBar from './nav_bar/nav_bar'
import Footer from './footer/footer'
import NavBarContainer from './nav_bar/nav_bar_container'
const App = ({ children }) => {
  let navBarflex = "nav-top"
  if (children.props.location.pathname.includes("account")) {
    navBarflex += " center"
  };
  return (
  <div>
    <NavBarContainer flex={navBarflex}/>
    { children }
    <Footer />
  </div>
  )
}
{/* <Footer /> */}
export default App;
