/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllWorkbooks } from './Actions';
import { spreadSheetStyles } from './style';
import DataGrid from '../../Components/GridTable/DataGrid';
import { VscGitPullRequestCreate } from 'react-icons/vsc';
import Typography from '../../Components/Typography/Typography';
import { SpreadActionButtonsConfig } from './SpreadConstants';
import {
  PRIMARY_KEY_LIST,
  WorkbookTableHeaders
} from '../../Global/Constants';
import Button from '../../Components/Button/Button';
import { getDisableState } from './helper';

const SpreadDataGrid = ({
  setOpen
}: {
  setOpen: (prev: any) => void;
}) => {
  const workbookData = useSelector(
    (state: any) => state.workbook.workbookDTO
  );
  const classes = spreadSheetStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllWorkbooks());
  }, []);

  const handleGridRefresh = () => dispatch(fetchAllWorkbooks());

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

  return (
    <>
      <div className={classes.root}>
        <div className={classes.sectionHeader}>
          <Typography variant="heading" size="large">
            Spreadsheets
          </Typography>
          <Button
            variant="secondary"
            setIcon={{ icon: <VscGitPullRequestCreate /> }}
            className={classes.commonButtonStyle}
            onClick={() =>
              setOpen((prev: any) => ({
                ...prev,
                createDialog: true
              }))
            }
          >
            Create Workbook
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
            handleOnRowClick={(rowId: number) => {
              console.log(rowId);
            }}
            primaryKey={PRIMARY_KEY_LIST.PRIMRY_KEY_WORKBOOK_TABLE}
          />
        </div>
      </div>
    </>
  );
};

export default SpreadDataGrid;
