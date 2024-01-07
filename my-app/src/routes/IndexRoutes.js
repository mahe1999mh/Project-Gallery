import React from "react";
import UserRoutes from "./UserRoutes";
import AuthenticationRoutes from "./AuthenticationRoutes";

const IndexRoutes = () => {
  const pathname = window.location.pathname.split("/")[1];
  let renderRoutes;

  if (pathname !== "admin" || pathname === "login" || pathname === "") {
    renderRoutes = <UserRoutes />;
  } else {
    renderRoutes = <AuthenticationRoutes />;
  }

  return <div>{renderRoutes}</div>;
};

export default IndexRoutes;
