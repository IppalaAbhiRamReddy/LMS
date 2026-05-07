import useStore from "../../store/useStore";
import StatCard from "./StatCard";

export default function StatsGrid() {
  const { user } = useStore();

  const stats = [
    {
      title: "Courses Completed",
      value: user?.progress?.completedCourses?.toString() || "0",
      subtitle: "Lifetime progress →",
      icon: "📚",
      badgeContent: "+2 this month",
    },
    {
      title: "Total Hours Learned",
      value: `${user?.progress?.totalHours || 0}hrs`,
      subtitle: "Consistent learning",
      icon: "⏱️",
    },
    {
      title: "Assignments Done",
      value: user?.progress?.assignmentsDone?.toString() || "0",
      subtitle: "Keep it up! 🔴",
      icon: "📝",
      badgeContent: "Due soon",
    },
    {
      title: "Certificates Earned",
      value: user?.progress?.certificatesEarned?.toString() || "0",
      subtitle: "Achievements unlocked →",
      icon: "🏆",
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, index) => (
        <StatCard 
          key={index} 
          {...stat} 
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}
