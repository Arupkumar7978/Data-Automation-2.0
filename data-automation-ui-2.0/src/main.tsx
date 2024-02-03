import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import './Configurations/index.ts';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './Global/Redux/Store.ts';
import { router } from './Configurations/Routers/Routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
