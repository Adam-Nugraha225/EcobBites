import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.png"; // ganti sesuai nama file di assets

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-[#4CAF50] pt-28 pb-14">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Platform Edukasi Pengelolaan <br />
            <span className="text-green-700">Sisa Makanan Secara Bijak</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-gray-600 text-lg max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            EcoBites Adalah Platform Edukasi Yang Mengajak Masyarakat Mengelola
            Sisa Makanan Secara Bijak Agar Tidak Terbuang Sia-Sia Dan Tetap
            Bermanfaat.
          </motion.p>

          <motion.button
            className="mt-6 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Mulai Sekarang
          </motion.button>
        </motion.div>

        {/* Right image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <img
            src={heroImg}
            alt="EcoBites Illustration"
            className="w-[420px] md:w-[480px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
