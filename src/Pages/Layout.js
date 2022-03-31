import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
    </Routes>
  );
};

export default Layout;
