import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Body/App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Colleges from './Body/Colleges.jsx';
import Navbar from './Body/components/navbar/Navbar.jsx';
import Admission from './Body/Admission.jsx';
import MyCollege from './Body/MyCollege.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Login from './Body/components/Login/Login.jsx';
import Register from './Body/components/Register/Register.jsx';
import NotFound from './Body/NotFound.jsx';
import AuthProvider from './authentication/AuthProvider.jsx';
import Profile from './Body/components/Profile.jsx';
import CollegeDetails from './Body/components/collegeDetails.jsx';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children : [
      {
        path: '/',
        element : <App/>
      },
      {
        path : '/colleges',
        element : <Colleges/>
      },
      {
        path : '/admission',
        element : <Admission/>
      },
      {
        path : '/myCollege',
        element : <MyCollege/>
      },
      {
        path : '/profile',
        element : <Profile/>
      },
      {
        path : '/college-details',
        element : <CollegeDetails/>
      }
    ]
  },
  {
    path : '/login',
    element : <Login/>
  },
  {
    path : '/register',
    element : <Register/>
  },
  {
    path : '*',
    element : <NotFound/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
