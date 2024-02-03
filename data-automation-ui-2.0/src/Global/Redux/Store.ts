import createSagaMiddleware from '@redux-saga/core';
import { legacy_createStore, applyMiddleware } from 'redux';
import Reducers from './Reducers';
import { getAllWorkbooksWatcher } from '../../Containers/SpreadSheets/Saga';

const sagaMiddleWare = createSagaMiddleware();
const middleWares = [sagaMiddleWare];
const store = legacy_createStore(
  Reducers,
  {},
  applyMiddleware(...middleWares)
);

sagaMiddleWare.run(getAllWorkbooksWatcher);
export default store;
