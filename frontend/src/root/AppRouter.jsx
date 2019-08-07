import React from 'react';
import {
  Route,
  Switch,
  HashRouter,
} from 'react-router-dom';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import App from '@containers/App';
import store from './rootStore';

const history = createHashHistory();

const AppRouter = () => (
  <Provider store={store}>
    <HashRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default AppRouter;
