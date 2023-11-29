import React from 'react';
import { useRoutes } from 'react-router-dom';
import SignIn from './pages/login ui/Login';

const App = () => {
  const routes = [
    {
      path: '/',
      element: <SignIn />,
    },
  ];

  const router = useRoutes(routes);

  return (
    <div>
      {router}
    </div>
  );
};

export default App;
