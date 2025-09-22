import React from "react";
import heroImg from "../assets/hero.png"; // ganti sesuai nama file di assets

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-[#4CAF50] pt-28 pb-14">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Platform Edukasi Pengelolaan <br />
            <span className="text-green-700">Sisa Makanan Secara Bijak</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-xl">
            EcoBites Adalah Platform Edukasi Yang Mengajak Masyarakat Mengelola
            Sisa Makanan Secara Bijak Agar Tidak Terbuang Sia-Sia Dan Tetap
            Bermanfaat.
          </p>
          <button className="mt-6 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition">
            Mulai Sekarang
          </button>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="EcoBites Illustration"
            className="w-[420px] md:w-[480px]"
          />
        </div>
      </div>
    </section>
  );
}
