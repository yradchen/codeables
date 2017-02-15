import React from 'react';
import UserFormContainer from './user/user_form_container';
import SessionFormContainer from './session_form/session_form_container'

const App = ({ children }) => (
  <div>
    <UserFormContainer />
    { children }
  </div>
);

export default App;
