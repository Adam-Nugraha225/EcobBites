// src/pages/TargetUser.jsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import RemajaImg from "../assets/remaja.png";
import IbuImg from "../assets/ibu.png";
import PekerjaImg from "../assets/pekerja.png";

export default function TargetUser() {
  // respect user preference for reduced motion
  const reduceMotion = useReducedMotion();

  const users = [
    { title: "Remaja", desc: "Belajar kelola sisa makanan dengan cara praktis.", img: RemajaImg },
    { title: "Ibu Rumah Tangga", desc: "Dapur hemat, minim sampah.", img: IbuImg },
    { title: "Pekerja Sibuk", desc: "Gaya hidup sehat dan ramah lingkungan.", img: PekerjaImg },
  ];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40, rotate: -6, scale: 0.98 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        delay: i * 0.14,
        duration: 0.7,
        type: "spring",
        stiffness: 90,
        damping: 14,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-2xl font-bold mb-6">Untuk Siapa EcoBites?</h2>
      <p className="text-gray-600 mb-8">Solusi sederhana untuk berbagai gaya hidup — cocok untuk siapa saja.</p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4"
        variants={container}
        initial={reduceMotion ? "visible" : "hidden"}
        whileInView={reduceMotion ? "visible" : "visible"}
        viewport={{ once: true, amount: 0.35 }}
      >
        {users.map((u, i) => (
          <motion.article
            key={u.title}
            className="p-8 bg-white rounded-2xl border-4 border-gray-300 hover:border-green-500 transition-colors ease-in-out"
            variants={cardVariant}
            custom={i}
            initial={reduceMotion ? { opacity: 1, y: 0 } : "hidden"}
            whileInView={reduceMotion ? { opacity: 1, y: 0 } : "visible"}
            viewport={{ once: true, amount: 0.35 }}
            whileHover={{
              y: -12,
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(16,24,40,0.12)",
            }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
          >
            {/* image with subtle pop animation */}
            <motion.img
              src={u.img}
              alt={u.title}
              className="w-28 h-28 mx-auto mb-4 rounded-full object-cover border-4 border-white shadow-sm"
              initial={reduceMotion ? {} : { scale: 0.96 }}
              animate={reduceMotion ? {} : { scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
            />

            <h3 className="font-semibold text-lg mb-2">{u.title}</h3>
            <p className="text-gray-600 text-sm">{u.desc}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
