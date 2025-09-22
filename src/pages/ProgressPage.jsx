import React from "react";
import { motion } from "framer-motion";

export default function ProgressPage() {
  const streak = 5; // contoh data streak

  return (
    <section className="pt-28 pb-16 px-6 max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Progress Tracker
      </motion.h2>

      <motion.div
        className="bg-orange-50 border border-orange-200 rounded-2xl p-8 shadow"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-orange-600 mb-4">
          🔥 Streak Kamu: {streak} Hari!
        </h3>
        <p className="text-gray-700 mb-6">
          Pertahankan streak ini untuk mendapatkan badge eksklusif!
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden mb-6">
          <motion.div
            className="bg-orange-500 h-4"
            initial={{ width: 0 }}
            whileInView={{ width: `${(streak / 7) * 100}%` }}
            transition={{ duration: 1 }}
          />
        </div>

        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
          Tambah Progres Hari Ini
        </button>
      </motion.div>
    </section>
  );
}
