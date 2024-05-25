/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useMemo, useState } from 'react';
import {
  CREATE_WORKBOOK_INITIAL_STATE,
  FOOTER_ACTION_BUTTONS,
  MODAL_FIELDS_CONFIG
} from '../SpreadConstants';
import { CreateWorkbookStateType } from '../types';
import { spreadSheetStyles } from '../style';
import Button from '../../../Components/Button/Button';
import { GetModalConfigs } from '../../../Components/UIWINDOW/ModalConfigParser';
import { useDispatch, useSelector } from 'react-redux';
import { createNewWorkbook } from '../Actions';
import CircularProgress from '@mui/material/CircularProgress';

export const CreateModalFields = ({
  setOpen,
  type,
  data
}: {
  setOpen: (prev: any) => void;
  type: string;
  data: any;
}) => {
  const { workspaceId } = data;
  const classes = spreadSheetStyles();
  const { loading } = useSelector(
    (state: any) => state.commonWorkspaceAndWorkbook.workbookDTO
  );
  const dispatch = useDispatch();

  const [createAndUpdatedWorkbook, setWorkbookAndDescription] =
    useState<CreateWorkbookStateType>(CREATE_WORKBOOK_INITIAL_STATE);

  const handleFieldsChange = (e: any) => {
    setWorkbookAndDescription((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCreateWorkbook = () => {
    const createWorkbookPayload = {
      name: createAndUpdatedWorkbook.workbookName,
      description: createAndUpdatedWorkbook.description,
      workspaceId: workspaceId || 1,
      createdBy: 'arup.padhi',
      updatedBy: 'arup.padhi'
    };
    dispatch(createNewWorkbook(createWorkbookPayload));
    closeDialog();
  };

  const isCreatedButtonDisabled = useMemo(
    () =>
      !(createAndUpdatedWorkbook?.workbookName as string).trim()
        .length || loading,
    [createAndUpdatedWorkbook.workbookName, loading]
  );

  const closeDialog = useCallback(
    () =>
      setOpen((prev: any) => ({
        ...prev,
        [type]: false
      })),
    [setOpen, type]
  );

  // useEffect(() => {
  //   if (success) {
  //     closeDialog();
  //     handleGridRefresh?.();
  //     console.log('CREATION SUCCESS ... !!');
  //   }
  // }, [success]);

  return (
    <>
      {GetModalConfigs(
        MODAL_FIELDS_CONFIG.CREATE,
        handleFieldsChange,
        createAndUpdatedWorkbook
      )}
      <div className={classes.modalFooter}>
        <Button
          variant="primary"
          size="small"
          disabled={isCreatedButtonDisabled}
          onClick={handleCreateWorkbook}
        >
          {!loading ? (
            FOOTER_ACTION_BUTTONS.CREATE
          ) : (
            <>
              <CircularProgress color="inherit" size="1.25rem" />
              {'Creating...'}
            </>
          )}
        </Button>
        <Button
          variant="secondary"
          size="small"
          onClick={closeDialog}
        >
          {FOOTER_ACTION_BUTTONS.CLOSE}
        </Button>
      </div>
    </>
  );
};
