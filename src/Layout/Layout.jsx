import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <div>
      <Header location={location.pathname} />
      <Outlet />
      {/* {location.pathname === "/" ? (
        
      ) : null} */}
    </div>
  );
}

export default Layout;
