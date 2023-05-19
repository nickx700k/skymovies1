import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "../routes/Routes";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Layout() {
  return (
    <Router>
      <div className="layout">
        <Sidebar />
        <div className="pages">
          <Topbar />
          <Routers />
        </div>
      </div>
    </Router>
  );
}
