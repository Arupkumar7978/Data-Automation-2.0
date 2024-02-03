/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import SpreadDataGrid from './SpreadGrid';
import Modal from '../../Components/Modal/Modal';
import { CreateModalFields } from './SpreadSheetModals/CreateModal';
import {
  MODAL_HEADER_CONFIG,
  PRIMARY_ACTION_BUTTONS
} from './SpreadConstants';
import { useSelector, useDispatch } from 'react-redux';
import { VscGitPullRequestCreate } from 'react-icons/vsc';
import Typography from '../../Components/Typography/Typography';
import { spreadSheetStyles } from './style';
import Button from '../../Components/Button/Button';
import { fetchAllWorkbooks } from './Actions';

const SpreadSheets: React.FC = () => {
  console.log('SpreadSheets Rendered');
  const classes = spreadSheetStyles();

  const dispatch = useDispatch();

  const [open, setOpen] = useState({ createDialog: false });
  const workbookData = useSelector(
    (state: any) => state.workbook.workbookDTO
  );

  const handleGridRefresh = () => dispatch(fetchAllWorkbooks());

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
            {PRIMARY_ACTION_BUTTONS.CREATE_WORKBOOK}
          </Button>
        </div>
        <SpreadDataGrid
          workbookData={workbookData}
          handleGridRefresh={handleGridRefresh}
        />
      </div>
      <Modal
        children={<CreateModalFields setOpen={setOpen} />}
        headerConfig={MODAL_HEADER_CONFIG.CREATE}
        open={open.createDialog}
        modalType={'confirm'}
      />
    </>
  );
};

export default SpreadSheets;
