import { WorkbookDTO } from '../Containers/SpreadSheets/types';

export const FIREBASE_AUTH_SOURCES = [
  {
    provider: 'GOOGLE',
    source:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/225px-Google_%22G%22_logo.svg.png'
  },
  {
    provider: 'FACEBOOK',
    source:
      'https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg'
  }
];

export const USER_LOGIN_SECTION_CONFIG = {
  NAME: 'DATA AUTOMATION',
  USER_LOGIN_SUB_TITLE:
    'Welcome ! Please Login To Your Account From Here',
  ASK_FOR_MEMBERSHIP: 'Not a Member ?',
  JOIN_US_NOW: 'Join Us Now'
};

export const FOOTER_CONTENTS_LIST = [
  'Sign Up',
  'Log In',
  'Services',
  'About',
  'Developers',
  'Careers',
  'Privacy',
  'Terms',
  'Help'
];

export const BASE_URL = 'http://localhost:9090/api';

export const WorkbookTableHeaders = {
  name: 'Name',
  description: 'Description',
  createdBy: 'CreatedBy',
  createdOn: 'CreatedOn',
  updatedBy: 'UpdatedBy',
  updatedOn: 'UpdatedOn'
};

export const PRIMARY_KEY_LIST = {
  PRIMRY_KEY_WORKBOOK_TABLE: 'workbookUUID'
};
