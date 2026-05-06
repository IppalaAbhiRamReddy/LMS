import DashboardLayout from "./components/layout/DashboardLayout";
import WelcomeBanner from "./components/dashboard/WelcomeBanner";
import StatsGrid from "./components/dashboard/StatsGrid";
import SkillProgressCard from "./components/dashboard/SkillProgressCard";
import CareerReadinessCard from "./components/dashboard/CareerReadinessCard";
import PortfolioCard from "./components/dashboard/PortfolioCard";
import AIInsightsCard from "./components/dashboard/AIInsightsCard";
import CourseProgressItem from "./components/dashboard/CourseProgressItem";
import ResumeCard from "./components/dashboard/ResumeCard";
import DeadlineList from "./components/dashboard/DeadlineList";
import LiveClassList from "./components/dashboard/LiveClassList";

import ContinueLearning from "./components/dashboard/ContinueLearning";
import LearningProgressChart from "./components/dashboard/LearningProgressChart";
import AvgScoreChart from "./components/dashboard/AvgScoreChart";

function App() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl flex flex-col xl:flex-row gap-8">

        {/* LEFT COLUMN: Main Content */}
        <div className="flex-1 space-y-8 min-w-0 mt-10">
          <WelcomeBanner />

          <section className="space-y-6">
            <StatsGrid />
          </section>

          <hr className="border-t border-gray-200 dark:border-white/30" />

          <section className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[95%] h-[95%]">
              <SkillProgressCard />
              <CareerReadinessCard />
              <AIInsightsCard />
              <PortfolioCard />
            </div>
          </section>
          <section className="space-y-6">
            <ContinueLearning />
            
            {/* Grid to hold the two charts side-by-side on larger screens */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <LearningProgressChart />
              </div>
              <div className="md:col-span-1">
                <AvgScoreChart />
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: Right Panel */}
        <div className="w-full xl:w-[340px] space-y-8 shrink-0 mt-10">
          <CourseProgressItem />
          <ResumeCard />
          <DeadlineList />
          <LiveClassList />
        </div>

      </div>
    </DashboardLayout>
  );
}

export default App;