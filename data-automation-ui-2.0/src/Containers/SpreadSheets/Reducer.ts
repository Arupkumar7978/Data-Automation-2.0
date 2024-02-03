/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Constants from './Constants';
import { WorkbookDTO } from './types';
import { produce } from 'immer';

interface InitialState {
  workbookDTO: Array<WorkbookDTO>;
  loading: boolean;
  response: any;
}

const initialState: InitialState = {
  workbookDTO: [],
  loading: false,
  response: {}
};

const WorkbookReducer = (state = initialState, action: any) =>
  produce(state, () => {
    switch (action.type) {
      case Constants.CREATE_WORKBOOK:
      case Constants.GET_ALL_WORKBOOKS:
        return { ...state, loading: true };

      case Constants.CREATE_WORKBOOK_SUCCESS:
        return {
          ...state,
          response: action.payload.response,
          loading: false
        };
      case Constants.GET_ALL_WORKBOOKS_SUCCESS:
        return {
          ...state,
          response: action.payload.response,
          workbookDTO: action.payload.workbookDTO,
          loading: false
        };

      default:
        return { ...state };
    }
  });

export default WorkbookReducer;
