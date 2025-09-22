import React from "react";
import { motion } from "framer-motion";
import compostImg from "../assets/fitur-illustration.png"; // ganti sesuai ilustrasi kamu

export default function Benefit() {
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
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Benefit Website
      </motion.h2>

      {/* Konten */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Checklist */}
        <motion.ul
          className="space-y-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {benefits.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-4"
              variants={{
                hidden: { opacity: 0, x: -30 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Icon bulat hijau */}
              <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm shadow-sm">
                ✓
              </span>
              {/* Teks */}
              <span className="text-gray-700 text-lg">{item}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Gambar */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={compostImg}
            alt="Compost Life Cycle"
            className="max-w-xs md:max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
