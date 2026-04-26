import WelcomeBanner from "./components/dashboard/WelcomeBanner";
import StatsGrid from "./components/dashboard/StatsGrid";
import SkillProgressCard from "./components/dashboard/SkillProgressCard";
import CareerReadinessCard from "./components/dashboard/CareerReadinessCard";
import PortfolioCard from "./components/dashboard/PortfolioCard";
import AIInsightsCard from "./components/dashboard/AIInsightsCard";

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans p-6 md:p-10 dark">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* DASHBOARD HEADER */}
        <WelcomeBanner />

        {/* QUICK STATS SECTION */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
              Performance Overview
            </h2>
            <button className="text-sm font-medium text-blue-400 hover:underline">
              View Insights →
            </button>
          </div>
          <StatsGrid />
        </section>

        {/* DETAILED INSIGHTS GRID */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
              Learning & Career Readiness
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SkillProgressCard />
            <CareerReadinessCard />
            <AIInsightsCard />
            <PortfolioCard />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;