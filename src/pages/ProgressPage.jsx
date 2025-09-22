import React from "react";

export default function ProgressPage() {
  return (
    <section className="min-h-screen bg-green-50 pt-24 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Halo, User!</h2>

        {/* Progress Section */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h3 className="font-semibold text-xl mb-4">Progres Saya</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-xl h-24 flex items-center justify-center"
              >
                <span className="text-gray-500">Level {i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Section */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold text-xl mb-4">Pencapaian Saya</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-xl h-24 flex items-center justify-center"
              >
                🏆 Badge {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
