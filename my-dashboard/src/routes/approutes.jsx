import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Route */}
      <Route
       path="/login"
       element={
         <PublicRoute>
           <Login />
          </PublicRoute>
       }
    />

      {/* Private Route */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      {/* Optional: redirect unknown routes */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
