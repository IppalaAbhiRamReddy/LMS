import StatCard from "./StatCard";
import { BookOpen, Clock, FileCheck, Award } from "lucide-react";

/**
 * StatsGrid Component
 * Displays a grid of four StatCard components representing user activity.
 */
export default function StatsGrid() {
  const stats = [
    {
      title: "Courses Enrolled",
      value: 7,
      subtitle: "3 In Progress →",
      icon: BookOpen,
      badgeContent: "+2 this month",
      badgeVariant: "secondary" as const,
      iconBgColor: "bg-blue-500/10",
      iconColor: "text-blue-400",
    },
    {
      title: "Total Hours Learned",
      value: "128 hrs",
      subtitle: "12 hours this week",
      icon: Clock,
      badgeContent: "Top 5%",
      badgeVariant: "secondary" as const,
      iconBgColor: "bg-purple-500/10",
      iconColor: "text-purple-400",
    },
    {
      title: "Assignments Done",
      value: "24/30",
      subtitle: "6 Pending",
      icon: FileCheck,
      badgeContent: "92% Score",
      badgeVariant: "secondary" as const,
      iconBgColor: "bg-green-500/10",
      iconColor: "text-green-400",
    },
    {
      title: "Certificates Earned",
      value: 4,
      subtitle: "2 in progress →",
      icon: Award,
      badgeContent: "Verified",
      badgeVariant: "secondary" as const,
      iconBgColor: "bg-orange-500/10",
      iconColor: "text-orange-400",
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
