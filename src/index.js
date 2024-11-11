import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import EmployeeDashboard from "./employee-dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EmployeeDashboard />
  </React.StrictMode>
);
