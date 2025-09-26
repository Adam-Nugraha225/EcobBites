// src/components/HeaderDashboard.jsx
import React from "react";
import userImg from "../assets/hero.png"; // ganti sesuai foto profil user

export default function HeaderDashboard() {
  return (
    <header className="flex justify-between items-center bg-white shadow-sm px-8 py-4">
      {/* Logo */}
      <div className="flex flex-col">
        <span className="text-green-700 font-bold text-2xl">ECOBITES</span>
        <span className="text-sm text-gray-500">Dari sisa jadi berguna</span>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <img
          src={userImg}
          alt="User"
          className="w-10 h-10 rounded-full border"
        />
        <span className="text-gray-800 font-medium">Elsa Ainun</span>
      </div>
    </header>
  );
}
