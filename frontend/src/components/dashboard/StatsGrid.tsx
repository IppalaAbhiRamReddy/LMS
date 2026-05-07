import useStore from "../../store/useStore";
import StatCard from "./StatCard";

export default function StatsGrid() {
  const { user } = useStore();

  const stats = [
    {
      title: "Courses Enrolled",
      value: "7",
      subtitle: "3 In Progress →",
      icon: "📚",
      badgeContent: "+2 this month",
    },
    {
      title: "Total Hours Learned",
      value: "128hrs",
      subtitle: "12 hours this week",
      icon: "⏱️",
    },
    {
      title: "Assignments Done",
      value: "24/30",
      subtitle: "6 Pending 🔴",
      icon: "📝",
      badgeContent: "Due Apr 10",
    },
    {
      title: "Certificates Earned",
      value: "4",
      subtitle: "2 in progress →",
      icon: "🏆",
    }
  ];
}