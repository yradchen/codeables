import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app'
import SignUpFormContainer from './session_form/sign_up_form_container';
import LoginFormContainer from './session_form/login_form_container';
import Homepage from './homepage/homepage';
import ProjectDetailContainer from './projects/project_detail_container';
import ProjectEditContainer from './projects/project_edit_overview_container';
import NewProjectFormContainer from './projects/new_project_form_container';
import ProjectFormContainer from './projects/forms/project_form_container';
import InstructionEditContainer from './projects/forms/instruction_edit_container';
import SearchContainer from './search/search_container'
import DraftsContainer from './projects/unpublished/drafts_container';

const _ensureLoggedIn = (store) => {
  return (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/account/login');
    }
  }

};


const _redirectIfLoggedIn = (store) => {
  return (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }
}

const _redirectIfBadLink = (nextState, replace) => {
  replace('/')
}

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router onUpdate={() => window.scrollTo(0, 0)} history={ hashHistory }>
        <Route component={ App } >
          <Route onEnter={_ensureLoggedIn(store)} >
            <Route path="/editcodeable/new" component={ NewProjectFormContainer} />
            <Route path="/editcodeable/:projectId/edit" component={ ProjectEditContainer} />
            <Route path="/editcodeable/:projectId/edit/project" component={ ProjectFormContainer }/>
            <Route path="/editcodeable/:projectId/edit/step/:instructionId" component={ InstructionEditContainer } />
            <Route path="/projects/:id" component= {ProjectDetailContainer} />
          </Route>
          <Route path="/mycodeables/drafts" component={DraftsContainer} />

          <Route path="/" component={ Homepage } />
          <Route path="/search/" component={ SearchContainer } />
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
