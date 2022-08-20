import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "../Pages/Sign-Up";
import Home from "../Pages/Home";

import LogIn from "../Pages/Log-In";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route path="/" element={<LogIn />} />
          <Route exact path="/SignUp" element={<SignUp />} />

          <Route path="*" element={<LogIn />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default AppRoutes;
