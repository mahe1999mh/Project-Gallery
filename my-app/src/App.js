import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import SignIn from './pages/admin/Login';
import Sidebar from './pages/admin/Sidebar';
import Users from './pages/admin/User';
import CreateProjectForm from './pages/admin/CreateProjectForm/CreateProjectForm';
import Product from './pages/admin/Product';
import Blog from './pages/admin/Blog';
import Login from './pages/admin/Login';

const AdminLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

const App = () => {
  const routes = [
    {
      path: '/',
      element: <SignIn />,
    },
    {
      path: '/login',
      element: <SignIn />,
    },
    {
      path: '/admin/dashboard',
      element: <AdminLayout />,
      children: [
        {
          path: "users",
          element: <Users />
        },
        {
          path: "createProject",
          element: <CreateProjectForm />
        },
        {
          path: "products",
          element: <Product />
        },
        {
          path: "blog",
          element: <Blog />
        }
      ]
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
