import React from 'react';
import DataGrid from '../../Components/GridTable/DataGrid';

const index = () => {
  console.log('Invoice data');

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

  return (
    <>
      <DataGrid rows={rows} headers={headers} selectedRows={[]} />
    </>
  );
};

export default React.memo(index);
