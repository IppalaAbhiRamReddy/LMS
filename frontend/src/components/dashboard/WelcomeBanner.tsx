import { Progress } from "../ui/Progress";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";
import { motion } from "framer-motion";

/**
 * WelcomeBanner Component
 * Renders the top greeting section of the dashboard with user name, 
 * overall progress, and streak indicators.
 */
export default function WelcomeBanner() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1e293b] to-[#0f172a] p-8 text-white shadow-xl"
    >
      {/* Decorative Background Shape */}
      <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
      
      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        {/* Left Content: Welcome Message & Progress */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">
              Welcome back, Alex Johnson 👋
            </h1>
            <p className="mt-2 text-gray-400">
              You're 68% through your program. 3 more weeks to graduation!
            </p>
          </div>

          <div className="max-w-md space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span>Overall Progress</span>
              <span className="text-blue-400">68%</span>
            </div>
            <Progress value={68} className="h-2 bg-gray-700" />
          </div>
        </div>

        {/* Right Content: Profile & Status Indicators */}
        <div className="flex items-center gap-6">
          {/* Status Pills */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              On track ✔
            </div>
            <div className="flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400">
              <span>🔥</span>
              14-day streak
            </div>
          </div>

          {/* Profile Avatar */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md"></div>
            <Avatar className="h-24 w-24 border-2 border-blue-500/50 shadow-2xl transition-transform hover:scale-105">
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop" alt="User Profile" />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
