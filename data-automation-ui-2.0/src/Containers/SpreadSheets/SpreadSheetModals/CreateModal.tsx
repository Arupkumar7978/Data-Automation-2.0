/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useMemo, useState } from 'react';
import {
  CREATE_WORKBOOK_INITIAL_STATE,
  FOOTER_ACTION_BUTTONS,
  MODAL_FIELDS_CONFIG
} from '../SpreadConstants';
import { CreateWorkbookStateType } from '../types';
import { spreadSheetStyles } from '../style';
import Button from '../../../Components/Button/Button';
import { GetModalConfigs } from '../../../Components/UIWINDOW/ModalConfigParser';

export const CreateModalFields = ({
  setOpen
}: {
  setOpen: (prev: any) => void;
}) => {
  const classes = spreadSheetStyles();

  const [createAndUpdatedWorkbook, setWorkbookAndDescription] =
    useState<CreateWorkbookStateType>(CREATE_WORKBOOK_INITIAL_STATE);

  const handleFieldsChange = (e: any) => {
    setWorkbookAndDescription((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const isCreatedButtonDisabled = useMemo(
    () =>
      !(createAndUpdatedWorkbook?.workbookName as string).trim()
        .length,
    [createAndUpdatedWorkbook.workbookName]
  );

  const closeDialog = useCallback(
    () =>
      setOpen((prev: any) => ({
        ...prev,
        createDialog: false
      })),
    [setOpen]
  );

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
        >
          {FOOTER_ACTION_BUTTONS.CREATE}
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
