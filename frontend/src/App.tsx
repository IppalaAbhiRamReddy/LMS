import { useEffect } from 'react';
import useStore from './store/useStore';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import LiveClasses from "./pages/LiveClasses";
import Assignments from "./pages/Assignments";
import Progress from "./pages/Progress";
import Certificates from "./pages/Certificates";
import Resume from "./pages/Resume";
import Placement from "./pages/Placement";
import Profile from "./pages/Profile";
import WelcomeBanner from "./components/dashboard/WelcomeBanner";
import StatsGrid from "./components/dashboard/StatsGrid";
import SkillProgressCard from "./components/dashboard/SkillProgressCard";
import CareerReadinessCard from "./components/dashboard/CareerReadinessCard";
import AIInsightsCard from "./components/dashboard/AIInsightsCard";
import PortfolioCard from "./components/dashboard/PortfolioCard";
import ContinueLearning from "./components/dashboard/ContinueLearning";
import LearningProgressChart from "./components/dashboard/LearningProgressChart";
import AvgScoreChart from "./components/dashboard/AvgScoreChart";
import CourseProgressItem from "./components/dashboard/CourseProgressItem";
import ResumeCard from "./components/dashboard/ResumeCard";
import DeadlineList from "./components/dashboard/DeadlineList";
import LiveClassList from "./components/dashboard/LiveClassList";

function App() {
  const { getUser } = useStore();

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <Router>
      <DashboardLayout>
        <div className="mx-auto max-w-7xl flex flex-col xl:flex-row gap-8">

          {/* LEFT COLUMN: Main Content */}
          <div className="flex-1 space-y-8 min-w-0 mt-10">
            <WelcomeBanner />

            <section className="space-y-6">
              <StatsGrid />
            </section>

            <hr className="border-t border-gray-200 dark:border-white/10" />

            <section className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </Router>
  );
}

export default App;