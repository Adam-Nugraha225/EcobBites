import React from "react";
import { motion } from "framer-motion";

export default function ChallengePage() {
  const challenges = [
    { title: "Tantangan Mingguan", desc: "Kurangi sisa makanan selama 7 hari berturut-turut." },
    { title: "Kreasi Resep", desc: "Ciptakan hidangan baru dari sisa makanan dan bagikan hasilnya." },
    { title: "Kompos Challenge", desc: "Kumpulkan sisa organik dan buat kompos selama sebulan." },
  ];

  return (
    <section className="pt-28 pb-16 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Challenge & Badges
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {challenges.map((challenge, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="border rounded-2xl p-6 shadow hover:shadow-lg bg-white hover:scale-[1.03] transition-transform duration-200 ease-in-out"
          >
            <h3 className="text-xl font-bold text-pink-600 mb-2">{challenge.title}</h3>
            <p className="text-gray-600">{challenge.desc}</p>
            <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
              Ikuti Challenge
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
