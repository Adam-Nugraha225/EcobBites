import React from "react";

export default function ModulPage() {
  const modulList = [
    { title: "Mengelola sisa sayur harian", desc: "Tips praktis mengelola sisa agar tidak terbuang", img: "/src/assets/sayur.png" },
    { title: "Olahan nasi sisa jadi hidangan baru", desc: "Ubah nasi sisa jadi menu baru yang lezat!", img: "/src/assets/nasi.png" },
    { title: "Kenali jenis sisa makanan", desc: "Mengenal sisa jenis makanan", img: "/src/assets/jenis.png" },
    { title: "Mengelola sisa sayur harian", desc: "Tips praktis mengelola sisa agar tidak terbuang", img: "/src/assets/sayur.png" },
    { title: "Olahan nasi sisa jadi hidangan baru", desc: "Ubah nasi sisa jadi menu baru yang lezat!", img: "/src/assets/nasi.png" },
    { title: "Kenali jenis sisa makanan", desc: "Mengenal sisa jenis makanan", img: "/src/assets/jenis.png" },
  ];

  return (
    <section className="min-h-screen bg-green-50 pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Pilih Modul</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modulList.map((modul, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-lg hover:scale-[1.02] transition transform p-6 flex flex-col items-center"
            >
              <img src={modul.img} alt={modul.title} className="w-24 h-24 mb-4 object-contain" />
              <h3 className="font-semibold text-lg text-center">{modul.title}</h3>
              <p className="text-sm text-gray-600 text-center mb-4">{modul.desc}</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Baca Modul
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="flex items-center gap-2 text-green-700 font-semibold hover:underline">
            Next Page →
          </button>
        </div>
      </div>
    </section>
  );
}
