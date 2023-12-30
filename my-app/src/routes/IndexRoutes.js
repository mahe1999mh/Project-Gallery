import React from "react";
import UserRoutes from "./UserRoutes";
import AuthenticationRoutes from "./AuthenticationRoutes";

const IndexRoutes = () => {
  const pathname = window.location.pathname.split("/")[1];
  return (
    <div>
      {pathname !== "admin" ? (
        <UserRoutes />
      ) : pathname === "login" ? (
        <UserRoutes />
      ) : pathname === "" ? (
        <UserRoutes />
      ) : (
        <AuthenticationRoutes />
      )}
    </div>
  );
};

export default IndexRoutes;
