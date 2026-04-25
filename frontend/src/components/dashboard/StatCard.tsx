import { Card, CardContent } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: LucideIcon;
  badgeContent?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
  iconBgColor?: string;
  iconColor?: string;
  delay?: number;
}

/**
 * StatCard Component
 * A reusable card for displaying dashboard statistics.
 */
export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  badgeContent,
  badgeVariant = "secondary",
  iconBgColor = "bg-blue-500/10",
  iconColor = "text-blue-400",
  delay = 0
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -5 }}
    >
      <Card className="border border-gray-800 bg-[#111827] text-white transition-colors hover:border-gray-700">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            {/* Left Content */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-400">{title}</p>
              <h3 className="text-3xl font-bold tracking-tight">{value}</h3>
              <p className="text-sm text-gray-400">
                {subtitle}
              </p>
            </div>

            {/* Right Content: Icon & Optional Badge */}
            <div className="flex flex-col items-end gap-4">
              <div className={`rounded-xl ${iconBgColor} p-3 ${iconColor}`}>
                <Icon size={24} />
              </div>
              {badgeContent && (
                <Badge variant={badgeVariant} className="rounded-md font-semibold">
                  {badgeContent}
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
