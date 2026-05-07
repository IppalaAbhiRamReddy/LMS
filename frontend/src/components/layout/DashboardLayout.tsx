import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'; // Make sure this path is correct
import Navbar from './Navbar';   // Make sure this path is correct

export default function DashboardLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#070b14] text-white font-sans flex">
      {/* Assuming Sidebar might go here later */}
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 ml-64">
        <Navbar />
        <main className="flex-1 px-6 py-12 overflow-y-auto pt-24">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
}
