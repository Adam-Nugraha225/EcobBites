import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardHome from "./DashboardHome";
import DashboardModul from "./DashboardModul";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("home"); // default dashboard home

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return (
          <>
            {/* Halo User */}
            <section>
              <h1 className="text-2xl font-bold">Halo, User!</h1>
              <p className="text-black-700 cursor-pointer">
                Yuk Kelola Makanamu Lebih Bijak Hari Ini!
              </p>
            </section>

            {/* Profil + Streak */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profil User */}
              <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/100"
                  alt="User Avatar"
                  className="w-20 h-20 rounded-full"
                />
                <div>
                  <h2 className="text-xl font-bold">User</h2>
                  <p className="text-gray-500">@User12345</p>
                </div>
              </div>

              {/* Streak */}
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl shadow-md">
                <h2 className="font-bold text-lg mb-4 text-orange-700">
                  🔥 30 Days
                </h2>
                <div className="flex justify-between">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <span className="w-4 h-4 rounded-full border-2 border-orange-500 bg-white"></span>
                        <span className="text-sm mt-1">{day}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </section>

            {/* Progress Saya */}
            <section>
              <h2 className="text-xl font-bold mb-4">Progress Saya</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Mengolah Sisa Nasi",
                    progress: 80,
                    color: "bg-red-200",
                  },
                  {
                    title: "Mengolah Sisa Roti",
                    progress: 50,
                    color: "bg-green-200",
                  },
                  {
                    title: "Mengolah Sisa Tulang Ayam",
                    progress: 100,
                    color: "bg-orange-200",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`${item.color} p-6 rounded-xl shadow-md`}
                  >
                    <h3 className="font-semibold mb-3">{item.title}</h3>
                    <div className="w-full bg-gray-300 rounded-full h-3">
                      <div
                        className="bg-black h-3 rounded-full transition-all duration-700"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-700 mt-2">
                      Progress {item.progress}%
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </>
        );

      case "modul":
        return <DashboardModul />;

      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="h-screen bg-[#E6F4EA] flex flex-col">
      {/* Header (full lebar, fixed di atas) */}
      <Header />

      <div className="flex flex-1 pt-0">
        {/* Sidebar */}
        <Sidebar activePage={activePage} setActivePage={setActivePage} />

        {/* Main Content */}
        <main className="flex-1 p-8 space-y-10 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
