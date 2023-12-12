import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import SignIn from './pages/admin/Login';
import Sidebar from './pages/admin/Sidebar';
import Users from './pages/admin/User';
import CreateProjectForm from './pages/admin/CreateProjectForm/CreateProjectForm';
import Product from './pages/admin/Product';
import Blog from './pages/admin/Blog';

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


// import React from "react";
// import { Navigate, Outlet, Route, Routes, useRoutes } from "react-router-dom";
// import SignIn from "./pages/admin/Login";
// import Sidebar from "./pages/admin/Sidebar";
// import Users from "./pages/admin/User";
// import CreateProjectForm from "./pages/admin/CreateProjectForm/CreateProjectForm";
// import Product from "./pages/admin/Product";
// import Blog from "./pages/admin/Blog";

// const AdminLayout = () => {
//   return (
//     <>
//       <Sidebar />
//       <Outlet />
//     </>
//   );
// };

// const PrivateRoute = ({ children, ...rest }) => {
//   const isAuthenticated = localStorage.getItem("token");
//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }
//   return (
//     <Routes>
//       <Route {...rest} element={<React.Fragment>{children}</React.Fragment>} />
//     </Routes>
//   );
// };

// const App = () => {
//   const routes = [
//     {
//       path: "/",
//       element: <SignIn />,
//     },
//     {
//       path: "/login",
//       element: <SignIn />,
//     },
//     {
//       path: "/admin/dashboard",
//       element: <AdminLayout />,
//       children: [
//         {
//           path: "users",
//           element: (
//             <PrivateRoute path="/">
//               <Users />
//             </PrivateRoute>
//           ),
//         },
//         {
//           path: "createProject",
//           element: (
//             <PrivateRoute path="/">
//               <CreateProjectForm />
//             </PrivateRoute>
//           ),
//         },
//         {
//           path: "products",
//           element: (
//             <PrivateRoute path="/">
//               <Product />
//             </PrivateRoute>
//           ),
//         },
//         {
//           path: "blog",
//           element: (
//             <PrivateRoute path="/">
//               <Blog />
//             </PrivateRoute>
//           ),
//         },
//       ],
//     },
//   ];

//   const router = useRoutes(routes);

//   return <div>{router}</div>;
// };

// export default App;
