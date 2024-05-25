import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import ErrorPage from '../../Components/Error';
import SpreadSheets from '../../Containers/SpreadSheetsGrid';
import InvoiceData from '../../Containers/InvoiceData';
import UserLogin from '../../Containers/Authentication/UserLogin';
import { BASE_URI, PATH_CONSTANTS } from './constants';
import SpreadSheet from '../../Containers/SpreadSheet';

export const router = createBrowserRouter([
  {
    path: `/${BASE_URI}`,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: `/${BASE_URI}/${PATH_CONSTANTS.SPREADSHEETS}`,
        element: <SpreadSheets />,
        errorElement: <ErrorPage />
      },
      {
        path: `/${BASE_URI}/${PATH_CONSTANTS.INVOICE_DATA}`,
        element: <InvoiceData />,
        errorElement: <ErrorPage />
      },
      {
        path: `/${BASE_URI}/${PATH_CONSTANTS.SPREADSHEETS}/open/:workbookUUID`,
        element: <SpreadSheet />,
        errorElement: <ErrorPage />
      }
    ]
  },
  {
    path: `/${BASE_URI}/auth/user-authentication/user-login/session`,
    element: <UserLogin />
  }
]);
