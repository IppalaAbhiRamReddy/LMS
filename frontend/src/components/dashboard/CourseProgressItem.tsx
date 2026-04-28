import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

export default function DailyStreak() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  // April 2026 data
  // Wed 1st
  const dates = [
    { num: null, shade: 0 }, { num: null, shade: 0 }, 
    { num: 1, shade: 3 }, { num: 2, shade: 3 }, { num: 3, shade: 1 }, { num: 4, shade: 3 }, { num: 5, shade: 3 },
    { num: 6, shade: 1 }, { num: 7, shade: 3 }, { num: 8, shade: 0 }, { num: 9, shade: 0 }, { num: 10, shade: 2 }, { num: 11, shade: 2 }, { num: 12, shade: 2 },
    { num: 13, shade: 0 }, { num: 14, shade: 1 }, { num: 15, shade: 3 }, { num: 16, shade: 2 }, { num: 17, shade: 3 }, { num: 18, shade: 0 }, { num: 19, shade: 0 },
    { num: 20, shade: 3 }, { num: 21, shade: 2 }, { num: 22, shade: 0 }, { num: 23, shade: 0 }, { num: 24, shade: 1 }, { num: 25, shade: 3 }, { num: 26, shade: 3 },
    { num: 27, shade: 1 }, { num: 28, shade: 3 }, { num: 29, shade: 3 }, { num: 30, shade: 3 }, 
    { num: 1, isNext: true, shade: 0 }, { num: 2, isNext: true, shade: 0 }, { num: 3, isNext: true, shade: 0 }
  ];

  const getShadeColor = (shade: number, isNext?: boolean) => {
    if (isNext) return "bg-[#161822] text-[#333645]";
    switch(shade) {
      case 1: return "bg-green-900 text-green-300";
      case 2: return "bg-green-600 text-white";
      case 3: return "bg-green-500 text-white";
      default: return "bg-[#1c1e29] text-gray-400";
    }
  }

  return (
    <Card className="bg-[#11131e] border-[#1e2235] rounded-xl overflow-hidden">
      <CardHeader className="pb-4 pt-5 px-5 flex flex-row items-center justify-between">
        <CardTitle className="text-base font-bold flex items-center gap-1.5 text-white">
          <span>🔥</span> Daily Streak
        </CardTitle>
        <div className="flex items-center space-x-3 text-sm text-gray-300 font-medium bg-[#161822] px-3 py-1.5 rounded-lg border border-[#1e2235]">
          <button className="hover:text-white"><ChevronLeft className="h-4 w-4" /></button>
          <span>April 2026</span>
          <button className="hover:text-white"><ChevronRight className="h-4 w-4" /></button>
        </div>
      </CardHeader>
      <CardContent className="px-5 pb-5">
        <div className="grid grid-cols-7 gap-1 text-center text-xs mb-3">
          {days.map(d => <div key={d} className="text-gray-400 font-medium">{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {dates.map((d, i) => (
            <div 
              key={i} 
              className={`h-7 w-8 rounded-md flex items-center justify-center text-xs font-semibold mx-auto ${
                d.num === null ? "bg-[#1c1e29] opacity-50" : getShadeColor(d.shade, d.isNext)
              }`}
            >
              {d.num}
            </div>
          ))}
        </div>
        
        {/* Legend */}
        <div className="mt-4 flex items-center gap-1.5 text-[10px] text-gray-500 font-medium">
          <div className="px-1.5 py-0.5 h-5 rounded-sm bg-[#1c1e29] flex items-center justify-center whitespace-nowrap">0%</div>
          <div className="px-1.5 py-0.5 h-5 rounded-sm bg-green-900 flex items-center justify-center text-green-300 whitespace-nowrap">1-20%</div>
          <div className="px-1.5 py-0.5 h-5 rounded-sm bg-green-700 flex items-center justify-center text-white whitespace-nowrap">20-50%</div>
          <div className="px-1.5 py-0.5 h-5 rounded-sm bg-green-600 flex items-center justify-center text-white whitespace-nowrap">50-70%</div>
          <div className="px-1.5 py-0.5 h-5 rounded-sm bg-green-500 flex items-center justify-center text-white whitespace-nowrap">70-100%</div>
        </div>
      </CardContent>
    </Card>
  );
}
