import { motion } from "framer-motion";
import useStore from "../../store/useStore";

export default function PortfolioCard() {
    const { user } = useStore();

    const status = user?.portfolioStatus || {
        projects: 80,
        completed: 60,
        pending: 30
    };

    const portfolioItems = [
        { label: "Projects", value: `${status.projects}%` },
        { label: "Completed", value: `${status.completed}%` },
        { label: "Pending", value: `${status.pending}%` }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-[#11131e] border-[#1e2235] border rounded-2xl p-5 w-full flex flex-col shadow-sm transition h-full font-sans"
        >
            <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#1c2438] to-[#121625] border border-[#2d3a5e] flex items-center justify-center shadow-inner text-2xl">
                    🗂️
                </div>
                <h3 className="text-[20px] font-bold text-white">Portfolio Status</h3>
            </div>

            <ul className="flex-1 space-y-3.5">
                {portfolioItems.map((item) => (
                    <li key={item.label} className="flex justify-between border-b border-[#232633] pb-3.5">
                        <span className="flex items-center gap-2 text-[14px] text-gray-200">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                            {item.label}
                        </span>
                        <span className="text-[14px] font-bold text-gray-200">{item.value}</span>
                    </li>
                ))}
            </ul>

            <div className="flex justify-end mt-5">
                <span className="text-[11px] font-medium text-gray-400 hover:text-white cursor-pointer transition flex items-center gap-1">
                    View Portfolio →
                </span>
            </div>
        </motion.div>
    );
}