import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarAuth from "../components/NavbarAuth"; // ✅ Navbar khusus untuk halaman register/login

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email wajib diisi";
    if (!formData.password) newErrors.password = "Password wajib diisi";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("✅ Login berhasil!");
      setTimeout(() => {
        navigate("/"); // redirect ke beranda setelah login
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar Auth */}
      <NavbarAuth />

      <div className="pt-24 flex">
        {/* Kiri - Banner */}
        <div className="hidden md:flex w-1/2 bg-green-600 text-white flex-col justify-center items-center p-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            SELAMAT DATANG KEMBALI
          </h1>
          <p className="text-lg max-w-md text-center">
            Masuk ke akunmu dan lanjutkan perjalanan mengurangi sisa makanan.
          </p>
          <img
            src="src/assets/Hero.png"
            alt="Food Waste Illustration"
            className="mt-8 w-80"
          />
        </div>

        {/* Kanan - Form Login */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 md:px-16">
          <form
            className="w-full max-w-md space-y-4"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Input Email */}
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:outline-none ${
                  errors.email ? "border-red-500" : "focus:ring-green-500"
                }`}
                placeholder="Masukkan email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Input Password */}
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:outline-none ${
                  errors.password ? "border-red-500" : "focus:ring-green-500"
                }`}
                placeholder="Masukkan password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Ingat Saya + Lupa Password */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Ingat Saya</span>
              </label>
              <Link to="#" className="text-green-600 hover:underline">
                Lupa Kata Sandi?
              </Link>
            </div>

            {/* Tombol Login */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Masuk
            </button>
          </form>

          {/* Social Login */}
          <div className="flex items-center my-6 w-full max-w-md">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-3 text-gray-500 text-sm">Atau Masuk Dengan</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <div className="flex space-x-3">
            <button className="border rounded-lg px-6 py-2 hover:bg-gray-50">
              <i className="fab fa-facebook-f text-blue-600"></i>
            </button>
            <button className="border rounded-lg px-6 py-2 hover:bg-gray-50">
              <i className="fab fa-google text-red-500"></i>
            </button>
            <button className="border rounded-lg px-6 py-2 hover:bg-gray-50">
              <i className="fab fa-apple text-black"></i>
            </button>
          </div>

          {/* Link ke Register */}
          <p className="text-sm text-gray-600 mt-6">
            Belum punya akun?{" "}
            <Link to="/register" className="text-green-600 hover:underline">
              Daftar di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
