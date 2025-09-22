import React from "react";
import { Link } from "react-router-dom";
import sayurImg from "../assets/sayur.png";
import nasiImg from "../assets/nasi.png";
import jenisImg from "../assets/jenis.png";
import fiturIllustration from "../assets/fitur-illustration.png";

export default function Fitur() {
  return (
    <section className="pt-16 pb-16 px-6 max-w-6xl mx-auto">
      {/* Judul */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Fitur Utama
      </h2>

      {/* Bagian Fitur Utama */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center mb-16">
        {/* Gambar kiri */}
        <div className="col-span-1 flex justify-center">
          <img
            src={fiturIllustration}
            alt="Ilustrasi Fitur"
            className="w-60 animate-fade-in"
          />
        </div>

        {/* Box Fitur */}
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Modul Edukasi */}
          <Link
            to="/modul"
            className="border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-green-500 hover:bg-green-50 hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              📗 Modul Edukasi
            </h3>
            <p className="text-gray-600 text-sm">
              Belajar tips praktis mengelola sisa makanan.
            </p>
          </Link>

          {/* Challenge & Badges */}
          <Link
            to="/challenge"
            className="border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-pink-500 hover:bg-pink-50 hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              🎯 Challenge & Badges
            </h3>
            <p className="text-gray-600 text-sm">
              Ikuti tantangan, raih lencana seru.
            </p>
          </Link>

          {/* Progress Tracker */}
          <Link
            to="/progress"
            className="border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-orange-500 hover:bg-orange-50 hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              🔥 Progress Tracker
            </h3>
            <p className="text-gray-600 text-sm">
              Pantau progres dan streak harianmu.
            </p>
          </Link>
        </div>
      </div>

      {/* Bagian Modul Gratis */}
      <h3 className="text-xl font-bold text-center mb-2">
        Coba Modul Edukasi Gratis
      </h3>
      <p className="text-center text-gray-600 mb-10">
        Nikmati beberapa modul tanpa login. Untuk akses penuh silahkan daftar!
      </p>

      {/* Kartu Modul */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[...Array(6)].map((_, index) => {
          const data = [
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
          const { img, title, desc } = data[index % data.length];
          return (
            <div
              key={index}
              className="border rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:scale-[1.03] transition-transform duration-200 ease-in-out bg-white"
            >
              <img
                src={img}
                alt={title}
                className="w-20 mx-auto mb-4 animate-fade-in"
              />
              <h4 className="font-semibold text-lg">{title}</h4>
              <p className="text-sm text-gray-600 mb-4">{desc}</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Baca Modul
              </button>
            </div>
          );
        })}
      </div>

      {/* Tombol Login */}
      <div className="text-center">
        <button className="bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
          Login untuk akses semua modul
        </button>
      </div>
    </section>
  );
}
