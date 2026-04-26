import { Brain } from "lucide-react";

export default function AIInsightsCard() {
    return (
        <div className="bg-card border border-border rounded-2xl p-6 w-full flex flex-col
                    shadow-md hover:-translate-y-2 hover:shadow-pink-500/20 transition">

            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-[#1e293b]">
                    <Brain className="text-pink-400 w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold">AI Insights</h3>
            </div>

            <ul className="flex-1 space-y-3 text-base">
                {[
                    "Improve DSA practice consistency",
                    "Add 1 real-world project to portfolio",
                    "Focus on System Design basics"
                ].map((item) => (
                    <li key={item} className="flex items-center gap-2 border-b border-border pb-2">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        {item}
                    </li>
                ))}
            </ul>

            <div className="flex justify-end mt-4">
                <button className="px-3 py-1 text-sm rounded-md bg-red-400 text-white hover:bg-red-500">
                    View →
                </button>
            </div>
        </div>
    );
}