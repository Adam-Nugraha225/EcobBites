import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000); // animasi tampil selama 3 detik
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-green-50 z-[9999]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animasi Tulisan */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-600 via-yellow-400 to-green-600 text-transparent bg-clip-text"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            EcoBites
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
