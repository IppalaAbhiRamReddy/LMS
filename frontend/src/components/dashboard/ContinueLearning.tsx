import React from 'react';
import { Play, ArrowRight, Atom, Terminal, BookOpen } from 'lucide-react';
import useStore from '../../store/useStore';

const ContinueLearning: React.FC = () => {
  const { user } = useStore();
  const getIcon = (type: string) => {
    switch (type) {
      case 'atom': return <Atom className="w-6 h-6 text-pink-400" />;
      case 'terminal': return <Terminal className="w-6 h-6 text-green-400" />;
      default: return <BookOpen className="w-6 h-6 text-blue-400" />;
    }
  };

  const getIconBg = (type: string) => {
    switch (type) {
      case 'atom': return 'bg-pink-500/10';
      case 'terminal': return 'bg-green-500/10';
      default: return 'bg-blue-500/10';
    }
  };

  const courses = user?.continueLearning?.length ? user.continueLearning : [
    {
      title: 'React — Advanced Patterns & Hooks',
      subtitle: 'Module 6 of 9 • Next: Custom Hooks Deep Dive • 45 min left',
      progress: 74,
      iconType: 'atom',
      progressColor: 'bg-blue-500'
    },
    {
      title: 'Python for Data Science & Machine Learning',
      subtitle: 'Module 4 of 8 • Next: Pandas DataFrames • 1h 20min left',
      progress: 52,
      iconType: 'terminal',
      progressColor: 'bg-purple-500'
    }
  ];

  return (
    <div className="bg-[#12141a] rounded-2xl p-6 border border-gray-800 font-sans">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 text-white">
          <Play className="w-5 h-5 fill-current text-blue-500" />
          <h3 className="font-semibold text-lg">Continue Learning</h3>
        </div>
        <a href="#" className="text-blue-500 text-sm hover:text-blue-400 flex items-center transition-colors">
          View All <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>

      <div className="space-y-4">
        {courses.map((course, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center justify-between bg-[#1a1d24] p-4 rounded-xl border border-gray-800/50 hover:border-gray-700 transition-colors gap-4">

            <div className="flex items-center gap-4 flex-1 w-full">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${getIconBg(course.iconType)}`}>
                {getIcon(course.iconType)}
              </div>

              <div className="flex-1 pr-6">
                <h4 className="text-white font-medium text-sm mb-1">{course.title}</h4>
                <p className="text-gray-400 text-xs mb-3">{course.subtitle}</p>

                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${course.progressColor} transition-all duration-1000`}
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-blue-500 text-xs font-medium">{course.progress}%</span>
                </div>
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap w-full md:w-auto">
              Continue
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueLearning;