import { Briefcase } from "lucide-react";

export default function CareerReadinessCard() {
    return (
        <div className="bg-card border border-border rounded-2xl p-6 w-full flex flex-col
                    shadow-md hover:-translate-y-2 hover:shadow-purple-500/20 transition">

            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-[#1e293b]">
                    <Briefcase className="text-purple-400 w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold">Career Readiness</h3>
            </div>

            <ul className="flex-1 space-y-3 text-base">
                {[
                    ["Resume Score", "80%"],
                    ["Interview Ready", "60%"],
                    ["Skills Match", "30%"]
                ].map(([label, value]) => (
                    <li key={label} className="flex justify-between border-b border-border pb-2">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                            {label}
                        </span>
                        <span className="font-medium">{value}</span>
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