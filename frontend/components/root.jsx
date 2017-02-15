import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app'
import SignUpFormContainer from './session_form/sign_up_form_container';
import LoginFormContainer from './session_form/login_form_container';

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
        <Route path="/" component={ App } >
          <Route onEnter={_redirectIfLoggedIn } >
            <Route path="/account/login" component={ LoginFormContainer } />
            <Route path="/account/register" component={ SignUpFormContainer } />
          </Route>
        <Route path="/:notcreated" onEnter={_redirectIfLoggedIn} />
      </Route>
      </Router>
    </Provider>
  )
};

export default Root;
