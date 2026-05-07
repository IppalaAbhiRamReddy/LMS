import React from 'react';
import { NavLink } from 'react-router-dom';
import useStore from '../../store/useStore';
import { 
  LayoutDashboard, 
  BookOpen, 
  Video, 
  FileEdit, 
  PieChart, 
  Award, 
  FileText, 
  Briefcase 
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const { user } = useStore();
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Courses', path: '/courses', icon: BookOpen },
    { name: 'Live Classes', path: '/live-classes', icon: Video, badge: true },
    { name: 'Assignments', path: '/assignments', icon: FileEdit },
    { name: 'Progress', path: '/progress', icon: PieChart },
    { name: 'Certificates', path: '/certificates', icon: Award },
    { name: 'Resume', path: '/resume', icon: FileText },
    { name: 'Placement', path: '/placement', icon: Briefcase, highlight: true },
  ];

  return (
    <aside className="w-64 h-screen bg-[#12141a] text-gray-400 flex flex-col fixed left-0 top-0 border-r border-gray-800">
      {/* Logo Area */}
      <div className="h-20 flex items-center px-6 border-b border-gray-800">
        <h1 className="text-xl font-bold text-white tracking-widest">
          ALGO<br/><span className="text-sm text-gray-400">ASCEND.IN</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              isActive 
                ? 'bg-blue-600/10 text-blue-500' 
                : item.highlight 
                  ? 'text-pink-500 hover:bg-gray-800/50'
                  : 'hover:bg-gray-800/50 hover:text-gray-200'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
            {item.badge && (
              <span className="ml-auto w-2 h-2 rounded-full bg-red-500"></span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom User Profile */}
      <div className="p-4 border-t border-gray-800">
        <NavLink 
          to="/profile"
          className={({ isActive }) => `flex items-center p-3 rounded-xl cursor-pointer transition-colors ${
            isActive 
              ? 'bg-blue-600/30 text-blue-500' 
              : 'bg-blue-600/20 text-blue-500 hover:bg-blue-600/30'
          }`}
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-600 text-white font-bold text-xs">
            {user ? user.name.split(' ').map(n => n[0]).join('') : '...'}
          </div>
          <span className="ml-3 font-medium text-sm">{user?.name || 'User'}</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;