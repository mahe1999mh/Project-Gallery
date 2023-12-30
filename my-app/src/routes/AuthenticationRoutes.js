import React from "react";
import Blog from "../pages/admin/Blog";
import Product from "../pages/admin/Product";
import CreateProject from "../pages/admin/CreateProject";
import Users from "../pages/admin/User";
import Dashboard from "@mui/icons-material/Dashboard";
import SignIn from "../pages/admin/Login";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import Sidebar from "../pages/admin/Sidebar";
import SignUp from "../pages/user/SignUp";

const AdminLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

const AuthenticationRoutes = () => {
  const token = localStorage.getItem("token");
  const routes = [
    {
      path: "/admin",
      element: <SignIn />,
    },
    {
      path: "/admin/login",
      element: <SignIn />,
    },
    {
      path: "/admin",
      element: token ? <AdminLayout /> : <Navigate to={`/login`} replace />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "createProject",
          element: <CreateProject />,
        },
        {
          path: "products",
          element: <Product />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
      ],
    },
  ];

  const router = useRoutes(routes);

  return <div>{router}</div>;
};

export default AuthenticationRoutes;
