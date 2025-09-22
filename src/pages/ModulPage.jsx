import React from "react";
import { motion } from "framer-motion";

export default function ModulPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const modules = [
    { title: "Dasar-dasar Zero Waste", desc: "Pelajari langkah awal memulai gaya hidup zero waste." },
    { title: "Resep Kreatif", desc: "Ubah makanan sisa menjadi hidangan baru yang lezat." },
    { title: "Kompos untuk Pemula", desc: "Panduan membuat kompos di rumah dengan mudah." },
  ];

  return (
    <section className="pt-28 pb-16 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Modul Edukasi
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {modules.map((modul, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="border rounded-2xl p-6 shadow hover:shadow-lg bg-white hover:scale-[1.03] transition-transform duration-200 ease-in-out"
          >
            <h3 className="text-xl font-bold text-green-700 mb-2">{modul.title}</h3>
            <p className="text-gray-600">{modul.desc}</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              Baca Modul
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
