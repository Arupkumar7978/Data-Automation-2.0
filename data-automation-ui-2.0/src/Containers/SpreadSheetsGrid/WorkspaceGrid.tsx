/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { spreadSheetStyles } from './style';
import DataGrid from '../../Components/GridTable/DataGrid';
import Typography from '../../Components/Typography/Typography';
import { VscGitPullRequestCreate } from 'react-icons/vsc';
import { SpreadActionButtonsConfig } from './SpreadConstants';
import Fade from '@mui/material/Fade';

import {
  PRIMARY_KEY_LIST,
  WorkbookTableHeaders as workspaceTableHeaders
} from '../../Global/Constants';
import Button from '../../Components/Button/Button';
import { getDisableState } from './helper';
import { PRIMARY_ACTION_BUTTONS } from './SpreadConstants';
import { fetchAllWorkspaces } from './Actions';

const WorkspacesDataGrid = ({
  workspacesData,
  handleGridRefresh,
  setOpen,
  handleOnRowClick,
  isWorkspaceDetails
}: {
  workspacesData: any;
  handleGridRefresh: () => void;
  handleOnRowClick: (workspaceId: number, row: any) => void;
  setOpen: (prev: any) => void;
  isWorkspaceDetails: boolean;
}) => {
  const classes = spreadSheetStyles();
  const dispatch = useDispatch();

  const fetchAllWorkspacesCallback = React.useCallback(
    () => dispatch(fetchAllWorkspaces()),
    [dispatch]
  );

  useEffect(() => {
    fetchAllWorkspacesCallback();
  }, [fetchAllWorkspacesCallback]);

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

  // const handleOnRowClick = (workbookUUID: string) => {
  //   const hostURL = window.location.origin;
  //   window.open(
  //     `${hostURL}/data-automation-ui/spreadsheets/open/${workbookUUID}`
  //   );
  // };

  return (
    <Fade in={!isWorkspaceDetails}>
      <div className={classes.root}>
        <div className={classes.sectionHeader}>
          <div className={classes.backArrowContainer}>
            <Typography variant="heading" size="large">
              Workspaces
            </Typography>
          </div>
          <Button
            variant="secondary"
            setIcon={{ icon: <VscGitPullRequestCreate /> }}
            className={classes.commonButtonStyle}
            onClick={() =>
              setOpen((prev: any) => ({
                ...prev,
                createWorkspaceDialog: true
              }))
            }
          >
            {PRIMARY_ACTION_BUTTONS.ADD_WORKSPACE}
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
            rows={workspacesData}
            headers={[workspaceTableHeaders]}
            selectedRows={[]}
            handleOnRowClick={handleOnRowClick}
            primaryKey={PRIMARY_KEY_LIST.PRIMRY_KEY_WORKSPACE_TABLE}
          />
        </div>
      </div>
    </Fade>
  );
};

export default React.memo(WorkspacesDataGrid);
