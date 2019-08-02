import { combineReducers } from 'redux';
import appReducer from '@containers/App/reducer';
import testingTabReducer from '@containers/TestingTab/reducer';

export default combineReducers({
  app: appReducer,
  testingTab: testingTabReducer,
});
