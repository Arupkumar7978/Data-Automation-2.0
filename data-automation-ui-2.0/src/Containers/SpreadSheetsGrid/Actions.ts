/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Constants from './Constants';
import { WorkbookDTO, WorkspaceDTO } from './types';

export const fetchWorkbookByWorkspaceId = (payload: number) => ({
  type: Constants.GET_ALL_WORKBOOKS,
  payload
});

export const fetchAllWorkbooksSuccess = (payload: any) => ({
  type: Constants.GET_ALL_WORKBOOKS_SUCCESS,
  payload
});

export const createNewWorkbook = (
  payload: Omit<WorkbookDTO, 'createdOn' | 'updatedOn'>
) => ({
  type: Constants.CREATE_WORKBOOK,
  payload
});

export const createNewWorkbookSuccess = (payload: any) => ({
  type: Constants.CREATE_WORKBOOK_SUCCESS,
  payload
});

export const fetchAllWorkspaces = () => ({
  type: Constants.GET_ALL_WORKSPACES
});

export const fetchAllWorkspaceSuccess = (payload: any) => ({
  type: Constants.GET_ALL_WORKSPACES_SUCCESS,
  payload
});

export const createNewWorkspace = (
  payload: Omit<WorkspaceDTO, 'createdOn' | 'updatedOn'>
) => ({
  type: Constants.CREATE_WORKSPACE,
  payload
});

export const createNewWorkspaceSuccess = (payload: any) => ({
  type: Constants.CREATE_WORKSPACES_SUCCESS,
  payload
});
