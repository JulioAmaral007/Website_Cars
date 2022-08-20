import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "../Pages/Sign-Up";
import Home from "../Pages/Home";
import PrivateRoutes from "./private";
import LogIn from "../Pages/Log-In";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<PrivateRoutes Item={Home} />} />
          <Route path="/" element={<LogIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route path="*" element={<LogIn />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default AppRoutes;
