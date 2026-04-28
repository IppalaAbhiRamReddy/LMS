export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#070b14] text-white font-sans flex">
      {/* Assuming Sidebar might go here later */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 px-6 py-12 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
