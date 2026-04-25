import WelcomeBanner from "./components/dashboard/WelcomeBanner";
import StatsGrid from "./components/dashboard/StatsGrid";

/**
 * App Component
 * The main entry point for the LMS Dashboard application.
 * Assembles the WelcomeBanner and StatsGrid for the initial task.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white font-sans p-6 md:p-10">
      <div className="mx-auto max-w-7xl space-y-10">
        {/* DASHBOARD HEADER */}
        <WelcomeBanner />

        {/* STATISTICS SECTION */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
              Performance Overview
            </h2>
            <button className="text-sm font-medium text-blue-400 hover:underline">
              View All Insights →
            </button>
          </div>
          <StatsGrid />
        </section>
      </div>
    </div>
  );
}
