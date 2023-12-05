import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Base from './Pages/Base/Base';
import './index.css';

import Login from './Pages/Login/Login';
import Reservations from './Pages/Reservations/Reservations';
import Locations from './Pages/Locations/Locations';
import Account from './Pages/Account/Account';
import Error from './Pages/Error/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Base />,
    errorElement: (
      <Base>
        <Error />
      </Base>
    ),
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/reservations',
        element: <Reservations />,
      },
      {
        path: '/locations',
        element: <Locations />,
      },
      {
        path: '/account',
        element: <Account />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
