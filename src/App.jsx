import React from "react";
import { Routes, Route } from "react-router-dom";

// Landing
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Fitur from "./pages/Fitur";
import Benefit from "./pages/Benefit";
import Footer from "./components/Footer";
import ModulPage from "./pages/ModulPage";
import ChallengePage from "./pages/ChallengePage";
import ProgressPage from "./pages/ProgressPage";
import TargetUser from "./pages/TargetUser";

// Dashboard
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./pages/DashboardHome";
import DashboardModul from "./pages/DashboardModul";

// Auth
import Login from "./pages/Login";
import Register from "./pages/Register";

// Protected
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* Landing */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <section id="hero" className="pt-20"><Hero /></section>
            <section id="fitur" className="pt-20"><Fitur /></section>
            <section id="target" className="pt-20"><TargetUser /></section>
            <section id="benefit" className="pt-20"><Benefit /></section>
            <Footer />
          </>
        }
      />

      {/* Auth Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Landing pages biasa */}
      <Route path="/modul" element={<ModulPage />} />
      <Route path="/challenge" element={<ChallengePage />} />
      <Route path="/progress" element={<ProgressPage />} />

      {/* Dashboard pakai ProtectedRoute */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="modul" element={<DashboardModul />} />
      </Route>
    </Routes>
  );
}
