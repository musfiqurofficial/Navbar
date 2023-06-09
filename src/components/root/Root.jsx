import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
