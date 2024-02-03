/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  all,
  call,
  debounce,
  put,
  takeLatest
} from 'redux-saga/effects';
import {
  getAllWorkbooks,
  createWorkbook
} from '../../Global/Services/Workbook';
import { CREATE_WORKBOOK, GET_ALL_WORKBOOKS } from './Constants';
import {
  fetchAllWorkbooksSuccess,
  createNewWorkbookSuccess
} from './Actions';

export function* handleGetAllWorkbooks(): Generator<any, void, any> {
  try {
    const response = yield call(getAllWorkbooks);
    const { data, ...res } = response;
    yield put(
      fetchAllWorkbooksSuccess({ workbookDTO: data, response: res })
    );
    console.log('GET_ALL_WORKBOOKS_RESPONSE', response);
  } catch (error) {
    console.log(error);
  }
}
export function* createNewWorkbookHandler(
  action: any
): Generator<any, void, any> {
  try {
    const response: any = yield call(createWorkbook, action.payload);
    yield put(createNewWorkbookSuccess({ response }));
    yield call(handleGetAllWorkbooks);
    console.log(
      'DATA_AUTOMATION/CREATE/NEW/WORKBOOK/SUCCESS',
      response
    );
  } catch (error) {
    console.log(error);
  }
}

function* debounceHandleGetAllWorkbooks() {
  yield call(handleGetAllWorkbooks);
}

export function* getAllWorkbooksWatcher() {
  yield debounce(
    100,
    GET_ALL_WORKBOOKS,
    debounceHandleGetAllWorkbooks
  );
}

function* createNewWorkbookWatcher() {
  yield takeLatest(CREATE_WORKBOOK, createNewWorkbookHandler);
}

export function* commonSagaWatcher() {
  yield all([getAllWorkbooksWatcher(), createNewWorkbookWatcher()]);
}
