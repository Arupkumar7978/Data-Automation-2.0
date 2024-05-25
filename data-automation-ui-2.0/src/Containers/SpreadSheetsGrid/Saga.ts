/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  all,
  call,
  debounce,
  delay,
  put,
  takeLatest
} from 'redux-saga/effects';
import {
  getAllWorkbooks,
  createWorkbook
} from '../../Global/Services/Workbook';
import { getAllWorkspaces } from '../../Global/Services/Workspace';
import {
  CREATE_WORKBOOK,
  GET_ALL_WORKBOOKS,
  GET_ALL_WORKSPACES
} from './Constants';
import {
  fetchAllWorkbooksSuccess,
  createNewWorkbookSuccess,
  fetchAllWorkspaceSuccess,
  fetchWorkbookByWorkspaceId
} from './Actions';

export function* handleGetAllWorkbooks(
  action: any
): Generator<any, void, any> {
  try {
    delay(1000);
    const response = yield call(getAllWorkbooks, action.payload);
    const { data, ...res } = response;
    yield put(
      fetchAllWorkbooksSuccess({ workbookDTO: data, response: res })
    );
    console.log('GET_ALL_WORKBOOKS_RESPONSE', response);
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetAllWorkspaces(): Generator<any, void, any> {
  try {
    const response = yield call(getAllWorkspaces);
    const { data, ...res } = response;
    yield put(
      fetchAllWorkspaceSuccess({ workspaceDTO: data, response: res })
    );
    console.log('GET_ALL_WORKSPACES_RESPONSE', response);
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
    yield put(fetchWorkbookByWorkspaceId(action.payload.workspaceId));

    console.log(
      'DATA_AUTOMATION/CREATE/NEW/WORKBOOK/SUCCESS',
      response
    );
  } catch (error) {
    console.log(error);
  }
}

function* getAllWorkspacesWatcher() {
  yield takeLatest(GET_ALL_WORKSPACES, handleGetAllWorkspaces);
}

function* createNewWorkbookWatcher() {
  yield takeLatest(CREATE_WORKBOOK, createNewWorkbookHandler);
}
function* getWorbookByWorkspaceId() {
  yield takeLatest(GET_ALL_WORKBOOKS, handleGetAllWorkbooks);
}

export function* commonSagaWatcher() {
  yield all([
    getAllWorkspacesWatcher(),
    createNewWorkbookWatcher(),
    getWorbookByWorkspaceId()
  ]);
}
