import React, { useContext } from "react";
import useAuth from "../Hooks/useAuth";
import LogIn from "../Pages/Log-In";

function PrivateRoutes({ Item }) {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <LogIn />;
}

export default PrivateRoutes;
