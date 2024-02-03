/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Constants from './Constants';
import { WorkbookDTO } from './types';

export const fetchAllWorkbooks = () => ({
  type: Constants.GET_ALL_WORKBOOKS
});

export const fetchAllWorkbooksSuccess = (payload: any) => ({
  type: Constants.GET_ALL_WORKBOOKS_SUCCESS,
  payload
});

export const createNewWorkbook = (payload: WorkbookDTO) => ({
  type: Constants.CREATE_WORKBOOK,
  payload
});

export const createNewWorkbookSuccess = () => ({
  type: Constants.CREATE_WORKBOOK_SUCCESS
});
