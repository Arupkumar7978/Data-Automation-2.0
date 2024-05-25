/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import WorkspacesDataGrid from './WorkspaceGrid';
import WorkbookGrid from './WorkbooksGrid';
import Modal from '../../Components/Modal/Modal';
import { CreateModalFields } from './SpreadSheetModals/CreateModal';
import { MODAL_HEADER_CONFIG } from './SpreadConstants';
import { useSelector, useDispatch } from 'react-redux';
import { spreadSheetStyles } from './style';
import {
  fetchAllWorkspaces,
  fetchWorkbookByWorkspaceId
} from './Actions';
import Loader from '../../Components/Loader';

const SpreadSheets: React.FC = () => {
  console.log('SpreadSheets Rendered');
  const classes = spreadSheetStyles();

  const dispatch = useDispatch();

  const [open, setOpen] = useState({
    createWorkbookDialog: false,
    createWorkspaceDialog: false
  });

  const [isWorkspaceDetails, setIsWorkspaceDetails] = useState(false);

  const [selectedWorkspaceData, setselectedWorkspaceData] = useState(
    {}
  );
  const { workbookDTO, workspaceDTO, globalLoading } = useSelector(
    (state: any) => state.commonWorkspaceAndWorkbook
  );

  const { data: workbookData } = workbookDTO;
  const { data: workspaceData } = workspaceDTO;

  console.log('workspaceData', workspaceData);
  console.log('workbookData', workbookData);
  console.log('globalLoading', globalLoading);

  const handleGridRefresh = () => dispatch(fetchAllWorkspaces());

  const handleOnRowClick = (
    workspaceId: number,
    workspaceData: any
  ) => {
    setselectedWorkspaceData(workspaceData);
    setIsWorkspaceDetails(true);
    dispatch(fetchWorkbookByWorkspaceId(workspaceId));
  };

  return (
    <>
      {!isWorkspaceDetails && (
        <WorkspacesDataGrid
          workspacesData={workspaceData}
          handleGridRefresh={handleGridRefresh}
          setOpen={setOpen}
          handleOnRowClick={handleOnRowClick}
          isWorkspaceDetails={isWorkspaceDetails}
        />
      )}

      {globalLoading && isWorkspaceDetails && (
        <div className={classes.loaderDiv}>
          <Loader />
        </div>
      )}

      {isWorkspaceDetails && !globalLoading && (
        <WorkbookGrid
          workbookData={workbookData}
          handleGridRefresh={handleGridRefresh}
          setOpen={setOpen}
          setIsWorkspaceDetails={setIsWorkspaceDetails}
          isWorkspaceDetails={isWorkspaceDetails}
          selectedWorkspaceData={selectedWorkspaceData}
        />
      )}

      <Modal
        children={
          <CreateModalFields
            setOpen={setOpen}
            type="createWorkbookDialog"
            data={selectedWorkspaceData}
          />
        }
        headerConfig={MODAL_HEADER_CONFIG.CREATE}
        open={open.createWorkbookDialog}
        modalType={'confirm'}
      />
    </>
  );
};

export default SpreadSheets;
