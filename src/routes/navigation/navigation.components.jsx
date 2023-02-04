import React from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      navigation.components
      <Outlet />
    </div>
  );
};

export default Navigation;
