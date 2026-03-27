import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems = [
    {
      title: 'Dashboard',
      subtitle: 'Overview',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2V7z" />
        </svg>
      ),
      path: '/transparency'
    },
    {
      title: 'Batch Management',
      subtitle: 'Create & Monitor',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      path: '/transparency/batch-management'
    },
    {
      title: 'Traceability',
      subtitle: 'Track Journey',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
        </svg>
      ),
      path: '/transparency/traceability'
    },
    {
      title: 'Transfers',
      subtitle: 'Ownership',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      path: '/transparency/transfers'
    },
    {
      title: 'ML Analytics',
      subtitle: 'AI Insights',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      path: '/transparency/analytics'
    },
    {
      title: 'Quality & Pricing',
      subtitle: 'Assessment',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      path: '/transparency/quality-pricing'
    },
    {
      title: 'QR Codes',
      subtitle: 'Consumer Access',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
        </svg>
      ),
      path: '/transparency/qr-codes'
    },
    {
      title: 'Role Management',
      subtitle: 'Access Control',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      path: '/transparency/roles'
    },
    {
      title: 'Reports',
      subtitle: 'Insights',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      path: '/transparency/reports'
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  const isActive = (path) => {
    if (path === '/transparency') {
      return location.pathname === '/transparency';
    }
    return location.pathname === path;
  };

  const getItemClasses = (item) => {
    const active = isActive(item.path);
    return `
      group relative flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-300 cursor-pointer
      ${active 
        ? 'bg-emerald-100/80 text-emerald-700 shadow-sm border-l-4 border-emerald-500' 
        : 'text-gray-600 hover:text-emerald-700 hover:bg-emerald-50/50'
      }
    `;
  };

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeOut"
      }
    },
    closed: {
      x: "-100%",
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const SidebarContent = ({ isMobile = false }) => (
    <div className="relative h-full flex flex-col">
      {/* Mobile Header - only show close button for mobile */}
      {isMobile && (
        <div className="flex items-center justify-between p-4 border-b border-emerald-100/60">
          <h2 className="text-lg font-bold text-emerald-700">Menu</h2>
          <button
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        <div>
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Main Navigation
          </h3>
          
          {sidebarItems.map((item, index) => (
            <div
              key={item.path}
              className={getItemClasses(item)}
              onClick={() => handleNavigation(item.path)}
            >
              <div className={`
                flex items-center justify-center w-8 h-8 rounded-lg transition-colors
                ${isActive(item.path) 
                  ? 'text-emerald-600 bg-emerald-100/50' 
                  : 'text-gray-500 group-hover:text-emerald-600 group-hover:bg-emerald-100/30'
                }
              `}>
                {item.icon}
              </div>
              
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold truncate ${
                  isActive(item.path) ? 'text-emerald-700' : 'text-gray-700 group-hover:text-emerald-700'
                }`}>
                  {item.title}
                </p>
                <p className={`text-xs truncate ${
                  isActive(item.path) ? 'text-emerald-600' : 'text-gray-500 group-hover:text-emerald-600'
                }`}>
                  {item.subtitle}
                </p>
              </div>

              {/* Active indicator - now handled by border-l-4 in getItemClasses */}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Desktop Sidebar - Always sticky/fixed positioning, stops above footer */}
      <aside className="hidden lg:flex lg:flex-col lg:w-72 lg:fixed lg:left-0 lg:top-20 lg:z-30" 
             style={{ bottom: '250px' }}>
        <div className="flex flex-col h-full bg-white border-l border-gray-200">
          <SidebarContent />
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <motion.aside
        className="lg:hidden fixed top-0 left-0 h-full w-72 bg-white border-r border-gray-200 z-50 shadow-xl"
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <SidebarContent isMobile={true} />
      </motion.aside>
    </>
  );
};

export default Sidebar;