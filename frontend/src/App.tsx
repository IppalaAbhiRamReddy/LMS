import DashboardLayout from "./components/layout/DashboardLayout";
import WelcomeBanner from "./components/dashboard/WelcomeBanner";
import StatsGrid from "./components/dashboard/StatsGrid";
import SkillProgressCard from "./components/dashboard/SkillProgressCard";
import CareerReadinessCard from "./components/dashboard/CareerReadinessCard";
import PortfolioCard from "./components/dashboard/PortfolioCard";
import AIInsightsCard from "./components/dashboard/AIInsightsCard";
import DailyStreak from "./components/dashboard/DailyStreak";
import ResumeCard from "./components/dashboard/ResumeCard";
import DeadlineList from "./components/dashboard/DeadlineList";
import LiveClassList from "./components/dashboard/LiveClassList";

function App() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl flex flex-col xl:flex-row gap-8">
        
        {/* LEFT COLUMN: Main Content */}
        <div className="flex-1 space-y-8 min-w-0">
          <WelcomeBanner />

          <section className="space-y-6">
            <StatsGrid />
          </section>

          <section className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillProgressCard />
              <CareerReadinessCard />
              <AIInsightsCard />
              <PortfolioCard />
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: Right Panel */}
        <div className="w-full xl:w-[340px] space-y-8 shrink-0">
          <DailyStreak />
          <ResumeCard />
          <DeadlineList />
          <LiveClassList />
        </div>
        
      </div>
    </DashboardLayout>
  );
}

export default App;