import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app'
import SignUpFormContainer from './session_form/sign_up_form_container';
import LoginFormContainer from './session_form/login_form_container';
import Homepage from './homepage/homepage';
// import ProjectIndexContainer from './projects/project_index_container';
import ProjectDetailContainer from './projects/project_detail_container';
import ProjectFormContainer from './projects/project_form_container';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/account/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  const _redirectIfBadLink = (nextState, replace) => {
    replace('/')
  }
            //
            // <Route path="/projects" component={ ProjectIndexContainer }/>
  return (
    <Provider store={store}>
      <Router history={ hashHistory }>
        <Route component={ App } >
          <Route path="/new" component={ ProjectFormContainer } onEnter={_ensureLoggedIn}/>

          <Route path="/projects/:id" component= {ProjectDetailContainer} />
          <Route path="/" component={ Homepage } />
            <Route onEnter={_redirectIfLoggedIn } >
              <Route path="/account/login" component={ LoginFormContainer } />
              <Route path="/account/register" component={ SignUpFormContainer } />
          </Route>
        <Route path="/:notcreated" onEnter={_redirectIfBadLink} />
      </Route>
      </Router>
    </Provider>
  )
};

export default Root;
