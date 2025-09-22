import React, { useState } from "react";
import { motion } from "framer-motion";

export default function StreakTracker() {
  // Simulasi progress (7 hari)
  const [streak, setStreak] = useState([true, true, false, false, false, false, false]);

  // Fungsi untuk toggle hari
  const toggleDay = (index) => {
    setStreak((prev) =>
      prev.map((day, i) => (i === index ? !day : day))
    );
  };

  const totalProgress = streak.filter(Boolean).length;
  const percentage = (totalProgress / streak.length) * 100;

  return (
    <section className="bg-green-50 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Judul */}
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Tantangan #7HariTanpaMubazir
        </h2>
        <p className="text-gray-600 mb-8">
          Tandai setiap hari kamu berhasil mengurangi sisa makanan. 
          Lihat progresmu dan jangan putus streak!
        </p>

        {/* Progress Bar */}
        <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-8">
          <motion.div
            className="h-4 bg-green-600"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* 7 Hari Tracker */}
        <div className="grid grid-cols-7 gap-4 max-w-lg mx-auto">
          {streak.map((day, index) => (
            <motion.button
              key={index}
              onClick={() => toggleDay(index)}
              whileTap={{ scale: 0.9 }}
              className={`p-4 rounded-xl shadow-md text-lg font-bold transition ${
                day
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-500 hover:bg-green-100"
              }`}
            >
              {index + 1}
            </motion.button>
          ))}
        </div>

        {/* Info */}
        <p className="mt-6 text-gray-700 font-medium">
          {totalProgress} / 7 hari berhasil ✅
        </p>
      </div>
    </section>
  );
}
