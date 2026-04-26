import { BarChart3 } from "lucide-react";

export default function SkillProgressCard() {
    return (
        <div className="bg-card border border-border rounded-2xl p-6 w-full flex flex-col
                    shadow-md hover:-translate-y-2 hover:shadow-blue-500/20 transition">

            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-[#1e293b]">
                    <BarChart3 className="text-blue-400 w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold">Skill Progress</h3>
            </div>

            <div className="flex-1 space-y-4 text-base">
                {[
                    { name: "React", value: 80, color: "bg-blue-500" },
                    { name: "Python", value: 60, color: "bg-green-500" },
                    { name: "AWS", value: 30, color: "bg-yellow-500" }
                ].map((item) => (
                    <div key={item.name}>
                        <div className="flex justify-between mb-1">
                            <span>{item.name}</span>
                            <span className="font-medium">{item.value}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full">
                            <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-end mt-4">
                <button className="px-3 py-1 text-sm rounded-md bg-red-400 text-white hover:bg-red-500">
                    View →
                </button>
            </div>
        </div>
    );
}