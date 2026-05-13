import useStore from "../../store/useStore";
import StatCard from "./StatCard";

export default function StatsGrid() {
  const { user } = useStore();
  const stats = [
    {
      title: "Courses Enrolled",
      value: user?.progress?.completedCourses?.toString() || "0",
      subtitle: "Active progress →",
      icon: "📚",
      badgeContent: "+2 this month",
    },
    {
      title: "Total Hours Learned",
      value: `${user?.progress?.totalHours || 0}hrs`,
      subtitle: "Learning time",
      icon: "⏱️",
    },
    {
      title: "Assignments Done",
      value: `${user?.progress?.assignmentsDone || 0}/50`,
      subtitle: "Tasks completed",
      icon: "📝",
      badgeContent: "Due soon",
    },
    {
      title: "Certificates Earned",
      value: user?.progress?.certificatesEarned?.toString() || "0",
      subtitle: "Achievements",
      icon: "🏆",
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          subtitle={stat.subtitle}
          icon={stat.icon}
          badgeContent={stat.badgeContent}
        />
      ))}
    </div>
  );
}