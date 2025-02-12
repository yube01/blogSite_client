import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import Provider from './Pages/LoginRegistration/Provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider>
  <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>,
)
