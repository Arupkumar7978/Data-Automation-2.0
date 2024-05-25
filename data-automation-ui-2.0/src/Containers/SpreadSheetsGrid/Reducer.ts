/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Constants from './Constants';
import { WorkbookDTO, WorkspaceDTO } from './types';
import { produce } from 'immer';

interface InitialState {
  workbookDTO: {
    data: Array<WorkbookDTO>;
    loading: boolean;
    response: any;
    success: boolean;
  };
  workspaceDTO: {
    data: Array<WorkspaceDTO>;
    loading: boolean;
    response: any;
    success: boolean;
  };
  globalLoading: boolean;
  response: any;
  success: boolean;
}

const initialState: InitialState = {
  workbookDTO: {
    data: [],
    loading: false,
    response: undefined,
    success: false
  },
  workspaceDTO: {
    data: [],
    loading: false,
    response: undefined,
    success: false
  },
  globalLoading: false,
  success: false,
  response: {}
};

const WorkbookReducer = (state = initialState, action: any) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case Constants.CREATE_WORKBOOK:
      case Constants.GET_ALL_WORKBOOKS:
        draftState.globalLoading = true;
        draftState.success = false;
        draftState.workbookDTO.loading = true;
        break;
      case Constants.CREATE_WORKSPACE:
      case Constants.GET_ALL_WORKSPACES:
        draftState.globalLoading = true;
        draftState.success = false;
        draftState.workspaceDTO.loading = true;
        break;

      case Constants.CREATE_WORKBOOK_SUCCESS:
        draftState.response = action.payload.response;
        draftState.globalLoading = false;
        draftState.success = true;
        break;

      case Constants.CREATE_WORKSPACES_SUCCESS:
        draftState.response = action.payload.response;
        draftState.globalLoading = false;
        draftState.success = true;
        break;

      case Constants.GET_ALL_WORKBOOKS_SUCCESS:
        draftState.workbookDTO = {
          data: action.payload.workbookDTO,
          response: action.payload.response,
          success: true,
          loading: false
        };
        draftState.globalLoading = false;
        draftState.success = true;
        break;
      case Constants.GET_ALL_WORKSPACES_SUCCESS:
        draftState.workspaceDTO = {
          data: action.payload.workspaceDTO,
          response: action.payload.response,
          success: true,
          loading: false
        };
        draftState.globalLoading = false;
        draftState.success = true;
        break;

      default:
        break;
    }
  });

export default WorkbookReducer;
