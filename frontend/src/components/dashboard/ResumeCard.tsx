import { Card, CardContent } from "../ui/Card";
import useStore from "../../store/useStore";

export default function ResumeCard() {
  const { user } = useStore();

  const stats = user?.resumeStats || {
    score: 80,
    skillsMatch: 30,
    interviewReady: 60
  };

  return (
    <Card className="bg-[#11131e] border-[#1e2235] rounded-xl relative overflow-hidden p-6 font-sans">
      <div className="text-[20px] font-bold text-white mb-6">Resume</div>
      
      <div className="space-y-6 mb-8">
        <div className="space-y-1.5">
          <div className="text-sm text-gray-400 font-medium">Resume Score</div>
          <div className="h-1.5 bg-[#1c1e29] rounded-full overflow-hidden">
            <div 
              className="h-full bg-pink-600 rounded-full transition-all duration-1000" 
              style={{ width: `${stats.score}%` }}
            ></div>
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="text-sm text-gray-400 font-medium">Interview Ready</div>
          <div className="h-1.5 bg-[#1c1e29] rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 rounded-full transition-all duration-1000"
              style={{ width: `${stats.interviewReady}%` }}
            ></div>
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="text-sm text-gray-400 font-medium">Skills Match</div>
          <div className="h-1.5 bg-[#1c1e29] rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-1000"
              style={{ width: `${stats.skillsMatch}%` }}
            ></div>
          </div>
        </div>
      </div>

      <button className="flex items-center space-x-2 text-sm font-medium text-pink-500 bg-pink-500/10 px-4 py-2 rounded-lg w-fit hover:bg-pink-500/20 transition-colors border border-pink-500/10">
        <span>📋</span>
        <span>View Full Profile</span>
      </button>
    </Card>
  );
}

