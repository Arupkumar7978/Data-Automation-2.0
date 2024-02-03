/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllWorkbooks } from './Actions';
import { spreadSheetStyles } from './style';
import DataGrid from '../../Components/GridTable/DataGrid';

import { SpreadActionButtonsConfig } from './SpreadConstants';
import {
  PRIMARY_KEY_LIST,
  WorkbookTableHeaders
} from '../../Global/Constants';
import Button from '../../Components/Button/Button';
import { getDisableState } from './helper';

const SpreadDataGrid = ({
  workbookData,
  handleGridRefresh
}: {
  workbookData: any;
  handleGridRefresh: () => void;
}) => {
  const classes = spreadSheetStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllWorkbooks());
  }, []);

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
      <div className={classes.tableToolbarActions}>
        {SpreadActionButtonsConfig?.map(({ label, setIcon, key }) => (
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
        ))}
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
    </>
  );
};

export default SpreadDataGrid;
