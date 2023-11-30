import React from 'react';
import { useRoutes } from 'react-router-dom';
import SignIn from './pages/admin/Login';
import Sidebar from './pages/admin/Sidebar';

const App = () => {
  const routes = [
    {
      path: '/',
      element: <SignIn />,
    },
    {
      path:'/admin/dashboard',
      element: <Sidebar />,
    }
  ];

  const router = useRoutes(routes);

  return (
    <div>
      {router}
    </div>
  );
};

export default App;
