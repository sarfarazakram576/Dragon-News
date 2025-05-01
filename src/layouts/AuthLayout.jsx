import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="mx-auto bg-base-200">
      <div className="mb-12">
        <Navbar></Navbar>
      </div>
<div className="pb-20">
<Outlet></Outlet>

</div>
    </div>
  );
};

export default AuthLayout;
