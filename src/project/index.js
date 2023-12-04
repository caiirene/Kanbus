import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "../users/signin";
import Account from "../users/account";
import Nav from "./nav";
import UserTable from "../users/table";
import Signup from "../users/signup";
import { Provider } from "react-redux";



function Project() {
  return (
      <div className="row">
        <div className="col-2">
          <Nav />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Navigate to="/project/home" />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
          </Routes>
        </div>
      </div>
  );
}

export default Project;