import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "../routes/Routes";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { UtilityContext } from "../utilities/Provider";

export default function Layout() {
  const { changeMode } = useContext(UtilityContext);

  return (
    <Router>
      <div
        className="layout"
        style={{
          backgroundColor: changeMode?.background,
          transition: changeMode?.transition,
        }}
      >
        <Sidebar />
        <div className="pages">
          <Topbar />
          <Routers />
        </div>
      </div>
    </Router>
  );
}
