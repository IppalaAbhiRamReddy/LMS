import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Bell, Mail, Settings } from 'lucide-react';

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const location = useLocation();
  const matchRangesRef = useRef<Range[]>([]);
  const currentMatchIndexRef = useRef<number>(-1);

  // Map pathnames to Titles
  const getPageTitle = () => {
    const path = location.pathname;
    if (path.startsWith('/dashboard')) return 'Dashboard';
    if (path.startsWith('/courses')) return 'Courses';
    if (path.startsWith('/live-classes')) return 'Live Classes';
    if (path.startsWith('/assignments')) return 'Assignments';
    if (path.startsWith('/progress')) return 'Progress';
    if (path.startsWith('/certificates')) return 'Certificates';
    if (path.startsWith('/resume')) return 'Resume';
    if (path.startsWith('/placement')) return 'Placement';
    if (path.startsWith('/profile')) return 'Profile';
    return 'Dashboard';
  };

  // Effect to handle highlighting text on the current page
  useEffect(() => {
    // Check for CSS Custom Highlight API support
    if (!('highlights' in CSS)) {
      return;
    }

    // @ts-ignore - TS may not have CSS.highlights typed depending on version
    CSS.highlights.clear();
    matchRangesRef.current = [];
    currentMatchIndexRef.current = -1;

    if (!searchQuery.trim()) {
      return;
    }

    const query = searchQuery.toLowerCase();
    
    // Search only within the main content to avoid highlighting navbar/sidebar text
    const mainElement = document.querySelector('main');
    if (!mainElement) return;

    const treeWalker = document.createTreeWalker(mainElement, NodeFilter.SHOW_TEXT, {
      acceptNode: function(node) {
        if (node.parentElement?.tagName === 'SCRIPT' || node.parentElement?.tagName === 'STYLE') {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const ranges: Range[] = [];
    let currentNode = treeWalker.nextNode();

    while (currentNode) {
      const text = currentNode.nodeValue || '';
      const lowerText = text.toLowerCase();
      let startIndex = 0;

      while ((startIndex = lowerText.indexOf(query, startIndex)) !== -1) {
        const range = new Range();
        range.setStart(currentNode, startIndex);
        range.setEnd(currentNode, startIndex + query.length);
        ranges.push(range);
        startIndex += query.length;
      }
      currentNode = treeWalker.nextNode();
    }

    if (ranges.length > 0) {
      matchRangesRef.current = ranges;
      // @ts-ignore
      const highlight = new Highlight(...ranges);
      // @ts-ignore
      CSS.highlights.set("search-results", highlight);
    }

    return () => {
      // @ts-ignore
      if ('highlights' in CSS) CSS.highlights.clear();
    };
  }, [searchQuery, location.pathname]); // Re-run when query or page changes

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const ranges = matchRangesRef.current;
      if (ranges.length === 0) return;

      currentMatchIndexRef.current = (currentMatchIndexRef.current + 1) % ranges.length;
      const activeRange = ranges[currentMatchIndexRef.current];

      if ('highlights' in CSS) {
        // @ts-ignore
        const activeHighlight = new Highlight(activeRange);
        // @ts-ignore
        CSS.highlights.set('search-active', activeHighlight);
      }

      const parentElement = activeRange.startContainer.parentElement;
      if (parentElement) {
        parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  // You can dynamically generate this date or pass it as a prop
  const currentDate = "April 7, 2026 - Monday";

  return (
    <header className="h-20 bg-[#0b0c10] border-b border-gray-800 flex items-center justify-between px-8 fixed top-0 left-64 right-0 z-10">
      
      {/* Left Section: Date & Title */}
      <div className="flex flex-col">
        <span className="text-xs text-gray-500 font-medium">{currentDate}</span>
        <h2 className="text-2xl font-bold text-white mt-1">{getPageTitle()}</h2>
      </div>

      {/* Middle Section: Search Bar */}
      <div className="flex-1 max-w-xl mx-8">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-800 rounded-lg leading-5 bg-[#12141a] text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
            placeholder="Search anything on this page..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      {/* Right Section: Actions & Profile */}
      <div className="flex items-center space-x-4">
        
        {/* Notification Icons */}
        <button className="relative p-2 rounded-full hover:bg-gray-800 text-gray-400 transition-colors border border-gray-800">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#0b0c10]"></span>
        </button>
        
        <button className="p-2 rounded-full hover:bg-gray-800 text-gray-400 transition-colors border border-gray-800">
          <Mail className="h-5 w-5" />
        </button>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-800 mx-2"></div>

        {/* Small Avatar */}
        <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm cursor-pointer border-2 border-transparent hover:border-blue-400 transition-all">
          AJ
        </div>

        {/* Enroll Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          + Enroll Course
        </button>

        {/* Settings Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            className="p-2 rounded-full hover:bg-gray-800 text-gray-400 transition-colors border border-gray-800 ml-2"
          >
            <Settings className="h-5 w-5" />
          </button>

          {isSettingsOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#12141a] border border-gray-800 rounded-lg shadow-xl z-50">
              <div className="p-2">
                {location.pathname.startsWith('/dashboard') ? (
                  <button 
                    className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-800 rounded-md transition-colors"
                    onClick={() => setIsSettingsOpen(false)}
                  >
                    Logout
                  </button>
                ) : (
                  <div className="px-4 py-2 text-sm text-gray-300">
                    Current: {getPageTitle()}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        
      </div>
    </header>
  );
};

export default Navbar;