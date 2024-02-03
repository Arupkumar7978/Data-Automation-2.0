import { GrFormRefresh } from 'react-icons/gr';
import { MdDelete, MdEdit, MdInfo } from 'react-icons/md';

export const MODAL_FIELDS_CONFIG = {
  CREATE: [
    {
      fieldType: 'TEXTFIELD',
      label: 'Workbook Name',
      helperText: 'Workbook name is mandatatory',
      filedProps: {
        required: true
      },
      name: 'workbookName'
    },
    {
      fieldType: 'TEXTFIELD',
      label: 'Description',
      filedProps: {
        multiline: true,
        maxRows: 4
      },
      name: 'description'
    }
  ]
};

export const MODAL_HEADER_CONFIG = {
  CREATE: {
    title: 'Create Workbook',
    description: 'Workbook creation might take some time '
  }
};

export const SpreadActionButtonsConfig = [
  {
    key: 1,
    setIcon: { icon: <GrFormRefresh /> },
    label: 'Refresh'
  },
  {
    key: 2,
    setIcon: { icon: <MdDelete /> },
    label: 'Delete'
  },
  {
    key: 3,
    setIcon: { icon: <MdEdit /> },
    label: 'Edit'
  },
  {
    key: 4,
    setIcon: { icon: <MdInfo /> },
    label: 'View Details'
  }
];

export const CREATE_WORKBOOK_INITIAL_STATE = {
  workbookName: '',
  description: ''
};

export const FOOTER_ACTION_BUTTONS = {
  NEXT: 'Next',
  CLOSE: 'Close',
  SUBMIT: 'Submit',
  CREATE: 'Create'
};

export const PRIMARY_ACTION_BUTTONS = {
  CREATE_WORKBOOK: 'Create Workbook',
};
