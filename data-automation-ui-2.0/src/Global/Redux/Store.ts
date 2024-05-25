import createSagaMiddleware from '@redux-saga/core';
import { legacy_createStore, applyMiddleware } from 'redux';
import Reducers from './Reducers';
import { commonSagaWatcher } from '../../Containers/SpreadSheetsGrid/Saga';

const sagaMiddleWare = createSagaMiddleware();
const middleWares = [sagaMiddleWare];
const store = legacy_createStore(
  Reducers,
  {},
  applyMiddleware(...middleWares)
);

sagaMiddleWare.run(commonSagaWatcher);
export default store;
