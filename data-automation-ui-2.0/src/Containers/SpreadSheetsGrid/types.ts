export interface WorkbookDTO {
  name: string;
  description: string;
  createdBy: string;
  createdOn: Date | string;
  updatedBy: string;
  updatedOn: Date | string;
  workspaceId: number;
}

export interface WorkspaceDTO {
  pk_workspace_id: number;
  name: string;
  description: string;
  createdBy: string;
  createdOn: Date | string;
  updatedBy: string;
  updatedOn: Date | string;
}
export type CreateWorkbookStateType = {
  workbookName: string;
  description: string;
};
