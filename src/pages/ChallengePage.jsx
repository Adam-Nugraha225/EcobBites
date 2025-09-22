import React from "react";

export default function ChallengePage() {
  const challenges = [
    { title: "Tantangan 7 Hari Zero Waste", desc: "Kurangi sampah setiap hari selama seminggu." },
    { title: "Kreasikan Resep Nasi Sisa", desc: "Gunakan nasi sisa dan buat menu baru." },
    { title: "Stop Membuang Sayur", desc: "Manfaatkan sayur sisa untuk sup atau tumis." },
  ];

  return (
    <section className="min-h-screen bg-green-50 pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Challenge & Badges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-lg hover:scale-[1.02] transition transform p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
              <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
                Ikuti Challenge
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
