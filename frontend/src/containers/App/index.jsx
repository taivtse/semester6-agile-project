import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';

import { createBrowserHistory } from 'history';

import Header from '@components/Header';
import TestingTab from '@containers/TestingTab';
import FormUserInfo from '@components/FormUserInfo';

import {
  WrapApp,
  WrapBodyApp,
  WrapHeaderApp,
} from './styled';

const history = createBrowserHistory();

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <WrapApp>
        <Router history={history}>
          <WrapHeaderApp>
            <Header />
          </WrapHeaderApp>
          <WrapBodyApp>
            <Switch style={{ height: '100%' }}>
              {/* <Route path="/" exact component={SharedArticleTab} /> */}
              <Route path="/" exact component={FormUserInfo} />
              <Route path="/test" exact component={TestingTab} />
              <Route path="/test/form-user-information" component={FormUserInfo} />
            </Switch>
          </WrapBodyApp>
        </Router>
      </WrapApp>
    );
  }
}
