import React from "react";
import {
  Home,
  BookOpen,
  Award,
  TrendingUp,
  HelpCircle,
  FileText,
  Lock,
} from "lucide-react";

export default function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    { name: "Dashboard", key: "home", icon: <Home size={20} /> },
    { name: "Modul Edukasi", key: "modul", icon: <BookOpen size={20} /> },
    { name: "Challenge and badges", key: "challenge", icon: <Award size={20} /> },
    { name: "Progress Tracker", key: "progress", icon: <TrendingUp size={20} /> },
    { name: "Petunjuk", key: "petunjuk", icon: <HelpCircle size={20} /> },
    { name: "Syarat dan ketentuan", key: "syarat", icon: <FileText size={20} /> },
    { name: "Kebijakan Privasi", key: "privasi", icon: <Lock size={20} /> },
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r flex flex-col px-6 py-8">
      {/* Menu */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setActivePage(item.key)}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left transition ${
              activePage === item.key
                ? "bg-green-100 text-green-700 font-semibold"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
