import React from "react";
import compostImg from "../assets/fitur-illustration.png"; // ganti sesuai ilustrasi kamu

export default function Benefit() {
  // Daftar benefit
  const benefits = [
    "Mengurangi sisa makanan terbuang.",
    "Membuat belanja lebih hemat.",
    "Menumbuhkan pola makan sehat & ramah lingkungan.",
    "Edukasi singkat dan mudah diterapkan.",
    "Wadah berbagi inspirasi berkelanjutan.",
    "Challenge & badges untuk jaga motivasi.",
  ];

  return (
    <section className="pt-28 pb-16 px-6 max-w-6xl mx-auto bg-white">
      {/* Judul */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Benefit Website
      </h2>

      {/* Konten */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Checklist */}
        <ul className="space-y-5">
          {benefits.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              {/* Icon bulat hijau */}
              <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm shadow-sm">
                ✓
              </span>
              {/* Teks */}
              <span className="text-gray-700 text-lg">{item}</span>
            </li>
          ))}
        </ul>

        {/* Gambar */}
        <div className="flex justify-center">
          <img
            src={compostImg}
            alt="Compost Life Cycle"
            className="max-w-xs md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
