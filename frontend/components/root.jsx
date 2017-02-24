import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app'
import SignUpFormContainer from './session_form/sign_up_form_container';
import LoginFormContainer from './session_form/login_form_container';
import Homepage from './homepage/homepage';

import ProjectDetailContainer from './projects/project_detail_container';
import ProjectEditContainer from './projects2/project_edit_container';
import ProjectFormContainer from './projects2/project_form_container';
import StepFormContainer from './steps/step_form_container';
import StepEditContainer from './steps/step_edit_container';
import { fetchProject } from '../actions/project_actions';

import SearchContainer from './search/search_container'
// import { fetchProject } from '../util/project_api_util';

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
{/* <Route onEnter={_checkAuthor} >
const _checkAuthor = (nextState, replace, aSync) => {
  const currentUser = store.getState().session.currentUser;
  if(!currentUser){
    replace('/');
    aSync();
  }

  store.dispatch(fetchProject(nextState.params.projectId)).then( (action) => {
    if (action.project.owner !== currentUser.username) {
      replace("/");
      aSync();
    }

  });
};
        </Route> */}
const Root = ({ store }) => {

  return (
    <Provider store={store}>
      <Router history={ hashHistory }>
        <Route component={ App } >
          <Route onEnter={_ensureLoggedIn} >
            <Route path="/editcodeable/new" component={ ProjectFormContainer} />
            <Route path="/editcodeable/:projectId/edit" component={ ProjectEditContainer} />
            <Route path="/editcodeable/:projectId/edit/project" component={ StepFormContainer }/>
            <Route path="/editcodeable/:projectId/edit/step/:id" component={ StepEditContainer } />
          </Route>

          <Route path="/projects/:id" component= {ProjectDetailContainer} />
          <Route path="/" component={ Homepage } />
          <Route path="/search" component={ SearchContainer } />
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
