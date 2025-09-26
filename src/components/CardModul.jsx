import React from "react";

export default function CardModul({ img, title, desc }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 text-center">
      <img src={img} alt={title} className="w-20 h-20 mx-auto mb-4" />
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{desc}</p>
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
        Baca Modul
      </button>
    </div>
  );
}
