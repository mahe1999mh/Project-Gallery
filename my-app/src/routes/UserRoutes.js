import { useRoutes } from "react-router-dom";
import SignIn from "../pages/admin/Login";
import SignUp from "../pages/user/SignUp";

const UserRoutes = () => {
  const routes = [
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/user/signUp",
      element: <SignUp />,
    },
  ];
  const router = useRoutes(routes);

  return <>{router}</>;
};

export default UserRoutes;
