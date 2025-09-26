import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarAuth from "../components/NavbarAuth";
import heroImg from "../assets/Hero.png"; // ✅ import gambar dengan benar

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.nama.trim()) newErrors.nama = "Nama wajib diisi";
    if (!formData.email.trim()) newErrors.email = "Email wajib diisi";
    if (!formData.password) newErrors.password = "Password wajib diisi";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Password tidak sama";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("✅ Registrasi berhasil! Kamu akan diarahkan ke halaman login.");
      setTimeout(() => {
        navigate("/login");
      }, 1200);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarAuth />
      <div className="pt-24 flex">
        {/* Kiri - Banner */}
        <div className="hidden md:flex w-1/2 bg-green-600 text-white flex-col justify-center items-center p-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            UBAH SISA MAKANAN <br /> JADI MANFAAT
          </h1>
          <p className="text-lg max-w-md text-center">
            EcoBites adalah platform edukasi yang mengajak masyarakat mengelola
            sisa makanan secara bijak agar tidak terbuang sia-sia.
          </p>
          <img src={heroImg} alt="Food Waste Illustration" className="mt-8 w-80" />
        </div>

        {/* Kanan - Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 md:px-16">
          <form
            className="w-full max-w-md space-y-4"
            onSubmit={handleSubmit}
            noValidate
          >
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:outline-none ${
                  errors.nama ? "border-red-500" : "focus:ring-green-500"
                }`}
                placeholder="Masukkan nama lengkap"
              />
              {errors.nama && (
                <p className="text-red-500 text-sm mt-1">{errors.nama}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-1">Email</label>
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

            <div>
              <label className="block text-gray-700 text-sm mb-1">Password</label>
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

            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Konfirmasi Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:outline-none ${
                  errors.confirmPassword
                    ? "border-red-500"
                    : "focus:ring-green-500"
                }`}
                placeholder="Masukkan ulang password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
              Daftar
            </button>
          </form>

          {/* Social login */}
          <div className="flex items-center my-6 w-full max-w-md">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-3 text-gray-500 text-sm">Atau Daftar Dengan</span>
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

          {/* Link ke Login */}
          <p className="text-sm text-gray-600 mt-6">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
