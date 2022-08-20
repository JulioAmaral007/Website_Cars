import React from "react";
import useAuth from "../Hooks/useAuth";
import SignUp from "../Pages/Sign-Up";

const PrivateRoutes = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <SignUp />;
};

export default PrivateRoutes;
