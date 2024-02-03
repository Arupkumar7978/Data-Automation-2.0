/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, debounce, put } from 'redux-saga/effects';
import { getAllWorkbooks } from '../../Global/Services/Workbook';
import { GET_ALL_WORKBOOKS } from './Constants';
import { fetchAllWorkbooksSuccess } from './Actions';

export function* handleGetAllWorkbooks() {
  try {
    const response: any = yield call(getAllWorkbooks);
    const { data, ...res } = response;
    yield put(
      fetchAllWorkbooksSuccess({ workbookDTO: data, response: res })
    );
    console.log('GET_ALL_WORKBOOKS_RESPONSE', response);
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
