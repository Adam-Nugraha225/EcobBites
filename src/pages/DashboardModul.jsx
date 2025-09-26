// src/pages/DashboardModul.jsx
import React from "react";
import sayurImg from "../assets/sayur.png";
import nasiImg from "../assets/nasi.png";
import jenisImg from "../assets/jenis.png";

export default function DashboardModul() {
  const modulList = [
    {
      img: sayurImg,
      title: "Mengelola sisa sayur harian",
      desc: "Tips praktis mengelola sisa agar tidak terbuang",
    },
    {
      img: nasiImg,
      title: "Olahan nasi sisa jadi hidangan baru",
      desc: "Ubah nasi sisa jadi menu baru yang lezat!",
    },
    {
      img: jenisImg,
      title: "Kenali jenis sisa makanan",
      desc: "Mengenal sisa jenis makanan",
    },
    {
      img: sayurImg,
      title: "Mengelola sisa sayur harian",
      desc: "Tips praktis mengelola sisa agar tidak terbuang",
    },
    {
      img: nasiImg,
      title: "Olahan nasi sisa jadi hidangan baru",
      desc: "Ubah nasi sisa jadi menu baru yang lezat!",
    },
    {
      img: jenisImg,
      title: "Kenali jenis sisa makanan",
      desc: "Mengenal sisa jenis makanan",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Search bar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Cari modul edukasi..."
            className="w-full px-5 py-3 pl-12 pr-10 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-700"
          />
          {/* Icon search */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1110 2.5a7.5 7.5 0 016.65 14.15z"
            />
          </svg>
        </div>
      </div>

      {/* Grid modul */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {modulList.map((modul, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <img
              src={modul.img}
              alt={modul.title}
              className="w-20 h-20 mb-4 object-contain"
            />
            <h3 className="font-bold text-lg mb-2">{modul.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{modul.desc}</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              Baca Modul
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10">
        <button className="flex items-center gap-2 border px-6 py-2 rounded-lg hover:bg-gray-100">
          Next Page →
        </button>
      </div>
    </div>
  );
}
