/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { spreadSheetStyles } from './style';
import DataGrid from '../../Components/GridTable/DataGrid';
import Typography from '../../Components/Typography/Typography';
import { MdSpaceDashboard } from 'react-icons/md';
import { SpreadActionButtonsConfig } from './SpreadConstants';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Fade from '@mui/material/Fade';
import { SiProtondrive as WorkspaceIcon } from 'react-icons/si';

import {
  PRIMARY_KEY_LIST,
  WorkbookTableHeaders
} from '../../Global/Constants';
import Button from '../../Components/Button/Button';
import { getDisableState } from './helper';
import { PRIMARY_ACTION_BUTTONS } from './SpreadConstants';

const WorkbooksDataGrid = ({
  workbookData,
  handleGridRefresh,
  setOpen,
  setIsWorkspaceDetails,
  isWorkspaceDetails,
  selectedWorkspaceData
}: {
  workbookData: any;
  handleGridRefresh: () => void;
  setOpen: (prev: any) => void;
  setIsWorkspaceDetails: (prev: any) => void;
  isWorkspaceDetails: boolean;
  selectedWorkspaceData: any;
}) => {
  const classes = spreadSheetStyles();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAllWorkbooks());
  // }, []);

  const GetGridActionsOnClick = (actionType: string) => {
    switch (actionType) {
      case 'REFRESH':
        return handleGridRefresh;
        break;

      default:
        // console.log('actionType', actionType);
        break;
    }
  };

  const handleOnRowClick = (workbookUUID: string) => {
    const hostURL = window.location.origin;
    window.open(
      `${hostURL}/data-automation-ui/spreadsheets/open/${workbookUUID}`
    );
  };

  const { name: selectedWorkspaceName } = selectedWorkspaceData;
  return (
    <Fade in={isWorkspaceDetails}>
      <div className={classes.treeAndGridContainer}>
        <div className={classes.foldersTree}>
          <div className={classes.treeHeader}>
            <WorkspaceIcon />
            <Typography
              variant="body"
              size="medium"
              className={classes.treeCompHeader}
            >
              {selectedWorkspaceName ?? 'Loading...'}
            </Typography>
          </div>
        </div>
        <div className={classes.root}>
          <div className={classes.sectionHeader}>
            <div className={classes.backArrowContainer}>
              <Button
                setIcon={{ icon: <IoMdArrowRoundBack /> }}
                variant="tertiary"
                className={classes.backArrowButton}
                onClick={() =>
                  setIsWorkspaceDetails((prev: any) => !prev)
                }
              />
              <Typography variant="heading" size="medium">
                {selectedWorkspaceName ?? 'Loading...'}
              </Typography>
            </div>
            <Button
              variant="secondary"
              setIcon={{ icon: <MdSpaceDashboard /> }}
              className={classes.commonButtonStyle}
              onClick={() =>
                setOpen((prev: any) => ({
                  ...prev,
                  createWorkbookDialog: true
                }))
              }
            >
              {PRIMARY_ACTION_BUTTONS.CREATE_WORKBOOK}
            </Button>
          </div>
          <div className={classes.tableToolbarActions}>
            {SpreadActionButtonsConfig?.map(
              ({ label, setIcon, key }) => (
                <Button
                  key={key}
                  variant="secondary"
                  size="small"
                  setIcon={setIcon}
                  onClick={GetGridActionsOnClick(
                    (label as string).toUpperCase()
                  )}
                  disabled={getDisableState(label)}
                >
                  {label}
                </Button>
              )
            )}
          </div>
          <div className={classes.gridContainer}>
            <DataGrid
              rows={workbookData}
              headers={[WorkbookTableHeaders]}
              selectedRows={[]}
              handleOnRowClick={handleOnRowClick}
              primaryKey={PRIMARY_KEY_LIST.PRIMRY_KEY_WORKBOOK_TABLE}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default React.memo(WorkbooksDataGrid);
