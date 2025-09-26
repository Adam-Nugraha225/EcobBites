import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import sayurImg from "../assets/sayur.png";
import nasiImg from "../assets/nasi.png";
import jenisImg from "../assets/jenis.png";
import fiturIllustration from "../assets/fitur-illustration.png";

export default function Fitur() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); // state modal

  const handleLoginClick = () => setShowModal(true); // munculkan modal
  const handleModalLogin = () => {
    setShowModal(false);
    navigate("/login"); // redirect ke login
  };

  const fadeUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.25, delayChildren: 0.2 } } };

  // Tombol nakal
  const MovingButton = () => {
    const [pos, setPos] = useState({ top: 0, left: 0 });
    const moveButton = () => {
      const offset = 100; // rentang pergerakan
      const top = Math.floor(Math.random() * offset) - offset / 2;
      const left = Math.floor(Math.random() * offset) - offset / 2;
      setPos({ top, left });
    };
    return (
      <button
        onMouseEnter={moveButton}
        style={{ position: "relative", top: pos.top, left: pos.left }}
        className="px-4 py-2 rounded-lg border bg-gray-100 hover:bg-gray-200 transition"
      >
        Batal
      </button>
    );
  };

  return (
    <section className="pt-16 pb-20 px-6 max-w-6xl mx-auto relative overflow-hidden">
      {/* Judul Fitur Utama */}
      <motion.h2 className="text-2xl md:text-3xl font-bold text-center mb-8" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        Fitur Utama
      </motion.h2>

      {/* Bagian Fitur Utama */}
      <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
        {/* Ilustrasi Fitur */}
        <motion.div className="col-span-1 flex justify-center" initial={{ opacity: 0, scale: 0.7, rotate: -10 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }}>
          <img src={fiturIllustration} alt="Ilustrasi Fitur" className="w-64 md:w-72 drop-shadow-xl" />
        </motion.div>

        {/* Box Fitur */}
        <motion.div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer}>
          {[
            { title: "📗 Modul Edukasi", desc: "Belajar tips praktis mengelola sisa makanan." },
            { title: "🎯 Challenge & Badges", desc: "Ikuti tantangan, raih lencana seru." },
            { title: "🔥 Progress Tracker", desc: "Pantau progres dan streak harianmu." },
          ].map((item, idx) => (
            <motion.div key={idx} variants={fadeUp} whileHover={{ y: -8, scale: 1.03 }} transition={{ type: "spring", stiffness: 200 }} className="border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all bg-white">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bagian Modul Gratis */}
      <motion.h3 className="text-2xl font-bold text-center mb-4" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }}>
        🎁 Coba Modul Edukasi Gratis
      </motion.h3>
      <motion.p className="text-center text-gray-600 mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}>
        Nikmati beberapa modul tanpa login. Untuk akses penuh silahkan daftar!
      </motion.p>

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
        {[
          { img: sayurImg, title: "Mengelola sisa sayur harian", desc: "Tips praktis mengelola sisa agar tidak terbuang" },
          { img: nasiImg, title: "Olahan nasi sisa jadi hidangan baru", desc: "Ubah nasi sisa jadi menu baru yang lezat!" },
          { img: jenisImg, title: "Kenali jenis sisa makanan", desc: "Mengenal sisa jenis makanan" },
        ].map((item, idx) => (
          <motion.div key={idx} variants={fadeUp} whileHover={{ y: -8, scale: 1.03 }} transition={{ type: "spring", stiffness: 200 }} className="border rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all bg-white">
            <img src={item.img} alt={item.title} className="w-20 mx-auto mb-4" />
            <h4 className="font-semibold text-lg">{item.title}</h4>
            <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">Baca Modul</button>
          </motion.div>
        ))}
      </motion.div>

      {/* Tombol Login Semua Modul */}
      <motion.div className="text-center">
        <button onClick={handleLoginClick} className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-900 hover:scale-105 transition-all duration-300">
          Login untuk akses semua modul
        </button>
      </motion.div>

      {/* Modal Login */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-96 text-center relative">
            <h3 className="text-lg font-bold mb-4">Login dulu ya 👋</h3>
            <p className="text-gray-600 mb-6">Silahkan login untuk mengakses semua modul edukasi.</p>
            <div className="flex justify-center gap-4">
              <MovingButton /> {/* tombol nakal */}
              <button onClick={handleModalLogin} className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition">
                Login Sekarang
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
