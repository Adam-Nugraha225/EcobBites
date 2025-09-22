import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Fitur from "./pages/Fitur";
import Benefit from "./pages/Benefit";
import Footer from "./components/Footer";
import StreakTracker from "./components/StreakTracker";

// ✅ Import halaman baru
import ModulPage from "./pages/ModulPage";
import ChallengePage from "./pages/ChallengePage";
import ProgressPage from "./pages/ProgressPage";

// ✅ Import TargetUser
import TargetUser from "./pages/TargetUser";

export default function App() {
  return (
    <div className="font-sans">
      {/* ✅ Navbar di semua halaman */}
      <Navbar />

      {/* ✅ Routing */}
      <Routes>
        {/* ✅ Landing Page */}
        <Route
          path="/"
          element={
            <>
              {/* ✅ Hero Section */}
              <section id="hero" className="pt-20">
                <Hero />
              </section>

              

              {/* ✅ Fitur Section */}
              <section id="fitur" className="pt-20">
                <Fitur />
              </section>

              {/* ✅ Target User Section */}
              <section id="target" className="pt-20">
                <TargetUser />
              </section>

              {/* ✅ Benefit Section */}
              <section id="benefit" className="pt-20">
                <Benefit />
              </section>
            </>
          }
        />

        {/* ✅ Halaman Modul Edukasi */}
        <Route path="/modul" element={<ModulPage />} />

        {/* ✅ Halaman Challenge & Badges */}
        <Route path="/challenge" element={<ChallengePage />} />

        {/* ✅ Halaman Progress Tracker */}
        <Route path="/progress" element={<ProgressPage />} />
      </Routes>

      {/* ✅ Footer di semua halaman */}
      <Footer />
    </div>
  );
}
