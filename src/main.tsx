import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App.tsx";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.tsx";
import ForgetPassword from "./pages/ForgetPassword.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/app" element={localStorage.getItem("user") ? <App /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
