import React, { useEffect, useState } from "react";
import UserRoutes from "./UserRoutes";
import AuthenticationRoutes from "./AuthenticationRoutes";

const IndexRoutes = () => {
  const [pathname, setPathname] = useState(
    window.location.pathname.split("/")[1]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPathname(window.location.pathname.split("/")[1]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  let renderRoutes;

  if (pathname !== "admin" || pathname === "login" || pathname === "") {
    renderRoutes = <UserRoutes />;
  } else {
    renderRoutes = <AuthenticationRoutes />;
  }

  return <div>{renderRoutes}</div>;
};

export default IndexRoutes;
