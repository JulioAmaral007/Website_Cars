import React, { useContext } from "react";
import { AuthContext } from "../Contexts/auth";

export default function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
