import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm flex items-center justify-between px-8 py-4">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold text-green-700">ECOBITES</h1>
        <p className="text-sm text-gray-500 -mt-1">Dari sisa jadi berguna</p>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/50"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border"
        />
        <span className="font-medium text-gray-700">Elsa Ainun</span>
      </div>
    </header>
  );
}
