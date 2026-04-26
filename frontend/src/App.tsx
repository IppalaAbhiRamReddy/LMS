import SkillProgressCard from "./components/dashboard/SkillProgressCard";
import CareerReadinessCard from "./components/dashboard/CareerReadinessCard";
import PortfolioCard from "./components/dashboard/PortfolioCard";
import AIInsightsCard from "./components/dashboard/AIInsightsCard";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center p-10 bg-[#020617]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <SkillProgressCard />
        <CareerReadinessCard />
        <AIInsightsCard />
        <PortfolioCard />
      </div>
    </div>
  );
}

export default App;