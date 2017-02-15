import React from 'react';
// import UserFormContainer from './user/user_form_container';
import NavBar from './nav_bar/nav_bar'
import Footer from './footer/footer'

const App = ({ children }) => {
  return (
  <div>
    <NavBar />
    { children }
    <Footer />
  </div>
  )
}
{/* <Footer /> */}
export default App;
