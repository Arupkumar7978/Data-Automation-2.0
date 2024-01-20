import React from 'react';
import DataGrid from '../../Components/GridTable/DataGrid';
import { TextField } from '@mui/material';
import { SiGooglesheets } from 'react-icons/si';
import { spreadSheetStyles } from './style';
import Modal from '../../Components/Modal/Modal';
import Button from '../../Components/Button/Button';

const SpreadSheets = () => {
  const rows = [
    {
      id: 1,
      name: 'Priyesh',
      age: 23,
      position: 'Senior Development Director',
      platform: 'Jira Platform'
    },
    {
      id: 2,
      name: 'Arup',
      age: 22,
      position: 'Senior Product Director Jira Platform',
      platform: 'Jira Platform'
    },
    {
      id: 3,
      name: 'Prince',
      age: 22,
      position: 'Senior ML Director Confluence',
      platform: 'Jira Platform'
    },
    {
      id: 4,
      name: 'Atlassian',
      age: 15,
      position: 'Employer Itself',
      platform: 'Atlassian'
    },
    {
      id: 5,
      name: 'Atlassian',
      age: 15,
      position: 'Employer Itself',
      platform: 'Atlassian'
    },
    {
      id: 6,
      name: 'Atlassian',
      age: 15,
      position: 'Employer Itself',
      platform: 'Atlassian'
    },
    {
      id: 7,
      name: 'Atlassian',
      age: 15,
      position: 'Employer Itself',
      platform: 'Atlassian'
    },
    {
      id: 5,
      name: 'Atlassian',
      age: 15,
      position: 'Employer Itself',
      platform: 'Atlassian'
    },
    {
      id: 6,
      name: 'Atlassian',
      age: 15,
      position: 'Employer Itself',
      platform: 'Atlassian'
    },
    {
      id: 7,
      name: 'Atlassian',
      age: 15,
      position: 'Employer Itself',
      platform: 'Atlassian'
    },
    {
      id: 5,
      name: 'Atlassian',
      age: 15,
      position: 'Employer Itself',
      platform: 'Atlassian'
    },
    {
      id: 6,
      name: 'Atlassian',
      age: 15,
      position: 'Employer Itself',
      platform: 'Atlassian'
    },
    {
      id: 7,
      name: 'Atlassian',
      age: 15,
      position: 'Employer Itself',
      platform: 'Atlassian'
    },
    {
      id: 5,
      name: 'Atlassian',
      age: 15,
      position: 'Employer Itself',
      platform: 'Atlassian'
    },
    {
      id: 6,
      name: 'Atlassian',
      age: 15,
      position: 'Employer Itself',
      platform: 'Atlassian'
    },
    {
      id: 7,
      name: 'Atlassian',
      age: 15,
      position: 'Employer Itself',
      platform: 'Atlassian'
    }
  ];
  const headers = [
    {
      id: 'ID',
      name: 'Name',
      age: 'Age',
      position: 'Position',
      platform: 'Platform'
    }
  ];

  const classes = spreadSheetStyles();

  const [openSpreadsheetDialog, setOpenSpreadsheetDialog] =
    React.useState(false);

  const handleCreateSpreadSheet = () =>
    setOpenSpreadsheetDialog((prev) => !prev);

  return (
    <>
      <div className={classes.spreadSheetsContainer}>
        <div className={classes.primaryActions}>
          <Button
            variant="primary"
            size="medium"
            setIcon={{ icon: <SiGooglesheets />, alignment: 'left' }}
            // className={classes.commonButtonStyle}
            onClick={handleCreateSpreadSheet}
          >
            Create Spreadsheet
          </Button>
        </div>
        <DataGrid rows={rows} headers={headers} selectedRows={[]} />
      </div>
      <Modal
        open={openSpreadsheetDialog}
        modalType="confirm"
        headerConfig={{
          title: 'Create Spreadsheet',
          description: 'Spreadsheet creation might take some time.',
          hideCloseIcon: false
        }}
        children={
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              flexDirection: 'column',
              gap: '1rem',
              height: '100%'
            }}
          >
            <TextField
              variant="outlined"
              label={'Spreadsheet Name'}
              size="small"
              fullWidth
              required
              className={classes.commonTextfieldStyles}
            />
            <TextField
              variant="outlined"
              label={'Description'}
              size="small"
              multiline
              maxRows={4}
              fullWidth
            />
          </div>
        }
        footerContent={
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '0.25rem'
            }}
          >
            <Button variant="primary" size="small">
              Create
            </Button>
            <Button
              variant="primary"
              size="small"
              onClick={handleCreateSpreadSheet}
            >
              Close
            </Button>
          </div>
        }
      />
    </>
  );
};

export default React.memo(SpreadSheets);
