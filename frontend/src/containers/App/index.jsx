import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';

import { createBrowserHistory } from 'history';

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
              <Route path="/" exact component={() => (<h1>Hello ReactJS</h1>)} />
            </Switch>
          </WrapBodyApp>
        </Router>
      </WrapApp>
    );
  }
}
