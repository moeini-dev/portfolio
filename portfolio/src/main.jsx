import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css';

// Pages
import Home from './pages/Home.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    
    <RouterProvider router={router}/>

  </React.StrictMode>,
)
