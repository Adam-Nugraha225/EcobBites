import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Fitur from "./pages/Fitur";
import Benefit from "./pages/Benefit";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import StreakTracker from "./components/StreakTracker";

// ✅ Import halaman baru
import ModulPage from "./pages/ModulPage";
import ChallengePage from "./pages/ChallengePage";
import ProgressPage from "./pages/ProgressPage";

export default function App() {
  return (
    <div className="font-sans">
      {/* ✅ Splash Screen */}
      <SplashScreen />

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

              {/* ✅ Benefit Section */}
              <section id="benefit" className="pt-20">
                <Benefit />
              </section>

              {/* ✅ Modul Section */}
              <section id="modul" className="pt-28 pb-16 px-6 bg-gray-100">
                <div className="max-w-6xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">
                    Modul Edukasi
                  </h2>
                  <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    Belajar mengelola sisa makanan dengan cara yang seru dan
                    praktis. Modul-modul ini dirancang untuk membantu kamu
                    menerapkan gaya hidup minim sampah tanpa ribet.
                  </p>

                  {/* Card Grid Modul */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                      <h3 className="font-bold text-xl text-green-700 mb-2">
                        Dasar-dasar Zero Waste
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Pahami konsep zero waste dan langkah awal memulai dari
                        rumah.
                      </p>
                      <a
                        href="/modul"
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition inline-block"
                      >
                        Lihat Modul
                      </a>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                      <h3 className="font-bold text-xl text-green-700 mb-2">
                        Resep Kreatif Sisa Makanan
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Olah makanan sisa menjadi hidangan baru yang lezat & sehat.
                      </p>
                      <a
                        href="/modul"
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition inline-block"
                      >
                        Lihat Modul
                      </a>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                      <h3 className="font-bold text-xl text-green-700 mb-2">
                        Kompos untuk Pemula
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Panduan praktis membuat kompos di rumah tanpa bau.
                      </p>
                      <a
                        href="/modul"
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition inline-block"
                      >
                        Lihat Modul
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* ✅ Tentang Section */}
              <section id="tentang" className="pt-28 pb-16 px-6 bg-green-50">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  {/* Gambar */}
                  <div className="flex justify-center">
                    <img
                      src="src/assets/Hero.png"
                      alt="Tentang Kami"
                      className="w-72 md:w-96"
                    />
                  </div>

                  {/* Konten */}
                  <div>
                    <h2 className="text-3xl font-bold text-green-700 mb-4">
                      Tentang EcoBites
                    </h2>
                    <p className="text-gray-700 mb-4">
                      EcoBites adalah platform edukasi yang mengajak masyarakat
                      untuk mengelola sisa makanan secara bijak. Kami percaya
                      setiap makanan memiliki nilai, dan dengan pengelolaan yang
                      tepat, kita bisa mengurangi sampah sekaligus
                      berkontribusi pada lingkungan yang lebih sehat.
                    </p>
                    <p className="text-gray-700 mb-6">
                      Misi kami adalah menciptakan gaya hidup berkelanjutan yang
                      menyenangkan dan mudah diterapkan oleh semua orang — mulai
                      dari remaja, ibu rumah tangga, hingga pekerja sibuk.
                    </p>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                      Pelajari Lebih Lanjut
                    </button>
                  </div>
                </div>
              </section>

              {/* ✅ Streak Tracker */}
              <StreakTracker />
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
