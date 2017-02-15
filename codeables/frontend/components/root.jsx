import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Navbar from './navbar'
import SessionFormContainer from './session_form/session_form_container'

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  return (
    <Provider store={store}>
      <Router history={ hashHistory }>
        <Route path="/" component={ Navbar } >
        <Route onEnter={_redirectIfLoggedIn } >
          <Route path="/account/login" component={ SessionFormContainer } />
          <Route path="/account/register" component={ SessionFormContainer } />
        </Route>
        <Route path="/:notcreated" onEnter={_redirectIfLoggedIn} />
      </Route>
      </Router>
    </Provider>
  )
};

export default Root;
