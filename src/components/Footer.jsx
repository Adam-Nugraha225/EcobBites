import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 bg-green-600 text-white py-10 px-6 text-center">
      {/* CTA Challenge */}
      <h2 className="text-2xl font-bold mb-2">Ikuti #7HariTanpaMubazir</h2>
      <p className="text-sm mb-6">
        Ikuti Tantangan, Kumpulkan Badge, dan Bagikan Streak!
      </p>
      <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
        Mulai Tantangan
      </button>

      {/* Copyright */}
      <div className="mt-8 border-t border-green-500 pt-4 text-xs text-green-100">
        © {new Date().getFullYear()} EcoBites. Semua Hak Dilindungi.
      </div>
    </footer>
  );
}
