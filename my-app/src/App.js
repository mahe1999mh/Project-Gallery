import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import SignIn from './pages/admin/Login';
import Sidebar from './pages/admin/Sidebar';
import Users from './pages/admin/User';
import Product from './pages/admin/Product';
import Blog from './pages/admin/Blog';
import Dashboard from './pages/admin/Dashboard';
import CreateProject from './pages/admin/CreateProject';

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
      path: '/admin',
      element: <AdminLayout />,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />
        },
        {
          path: "users",
          element: <Users />
        },
        {
          path: "createProject",
          element: <CreateProject />
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


// import React from "react";
// import { Navigate, Outlet, Route, Routes, useRoutes } from "react-router-dom";
// import SignIn from "./pages/admin/Login";
// import Sidebar from "./pages/admin/Sidebar";
// import Users from "./pages/admin/User";
// import CreateProjectForm from "./pages/admin/CreateProjectForm/CreateProjectForm";
// import Product from "./pages/admin/Product";
// import Blog from "./pages/admin/Blog";

// const AdminLayout = () => (
//   <>
//     <Sidebar />
//     <Outlet />
//   </>
// );

// const PrivateRoute = ({ children, ...rest }) => {
//   const token = localStorage.getItem("token");
//   // Use lazy loading for private routes to avoid initial bundle bloat
//   const PrivateElement = React.lazy(() => Promise.resolve({ default: children }));
//   if (!token) {
//     return <Navigate to="/login" />;
//   }
//   return <Route {...rest} element={<PrivateElement />} />;
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
//             <PrivateRoute>
//               <Users />
//             </PrivateRoute>
//           ),
//         },
//         {
//           path: "createProject",
//           element: (
//             <PrivateRoute>
//               <CreateProjectForm />
//             </PrivateRoute>
//           ),
//         },
//         {
//           path: "products",
//           element: (
//             <PrivateRoute>
//               <Product />
//             </PrivateRoute>
//           ),
//         },
//         {
//           path: "blog",
//           element: (
//             <PrivateRoute>
//               <Blog />
//             </PrivateRoute>
//           ),
//         },
//       ],
//     },
//   ];

//   // Use memoization to prevent unnecessary rerenders of routes
//   const memoizedRoutes = React.useMemo(() => routes, [routes]);
//   const router = useRoutes(memoizedRoutes);

//   return <div>{router}</div>;
// };

// export default App;

