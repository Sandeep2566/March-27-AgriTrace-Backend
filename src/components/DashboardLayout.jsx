import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Sidebar from './Sidebar.jsx';

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Default to true for desktop

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50/30 via-teal-50/20 to-green-50/30">
      {/* Navbar - Full width */}
      <Navbar />
      
      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        
        {/* Main content area - offset by sidebar on desktop */}
        <div className="flex-1 lg:ml-72 flex flex-col">
          {/* Mobile menu button */}
          <div className="lg:hidden sticky top-0 z-30 bg-white/95 backdrop-blur-xl border-b border-emerald-100/60 px-4 py-3">
            <button
              onClick={toggleSidebar}
              className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="text-sm font-medium">Menu</span>
            </button>
          </div>
          
          {/* Page content */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
      
      {/* Footer - Full width */}
      <Footer />
    </div>
  );
};

export default DashboardLayout;