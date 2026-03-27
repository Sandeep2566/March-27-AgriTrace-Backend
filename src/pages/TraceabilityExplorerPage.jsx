import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout.jsx';
import TraceabilityView from '../components/TraceabilityView.jsx';

const TraceabilityExplorerPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [qrBatchId, setQrBatchId] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const batchId = params.get('batchId');
    if (batchId) setQrBatchId(batchId);
  }, [location.search]);

  const pageVariants = {
    initial: { opacity: 0, x: -20 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <DashboardLayout>
      <motion.div 
        className="page-shell page-section"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm mb-8">
          <button 
            onClick={() => navigate('/transparency')}
            className="text-emerald-600 hover:text-emerald-800 font-medium transition-colors"
          >
            Dashboard
          </button>
          <span className="text-slate-400">/</span>
          <span className="text-slate-600 font-medium">Traceability Explorer</span>
        </nav>

        {/* Page Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">Traceability Explorer</h1>
            <p className="text-lg text-slate-600 mt-1">Track the complete journey from farm to consumer</p>
            {qrBatchId && (
              <p className="text-sm font-medium text-emerald-700 mt-2">
                Showing traceability for Batch ID: <span className="font-semibold bg-emerald-100 px-2 py-1 rounded">{qrBatchId}</span>
              </p>
            )}
          </div>

          {/* Features Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div className="text-lg font-bold text-emerald-600">100%</div>
              </div>
              <div className="text-sm text-slate-500">Blockchain Verified</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div className="text-lg font-bold text-blue-600">Real-time</div>
              </div>
              <div className="text-sm text-slate-500">Live Tracking</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-lg font-bold text-purple-600">GPS</div>
              </div>
              <div className="text-sm text-slate-500">Location Tracking</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-lg font-bold text-orange-600">24/7</div>
              </div>
              <div className="text-sm text-slate-500">Monitoring</div>
            </div>
          </div>
        </motion.div>

        {/* Main Traceability Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-800">Supply Chain Journey</h2>
                <p className="text-sm text-slate-500">Complete traceability from origin to destination</p>
              </div>
            </div>
            
            <TraceabilityView initialBatchId={qrBatchId} />
          </div>
        </motion.div>

        {/* Additional Tools */}
        <motion.div
          className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2V7zm0 0V5a2 2 0 012-2h6l2 2h6a2 2 0 012 2v2M7 13h10" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Documentation</h3>
            <p className="text-sm text-slate-600 mb-4">Access all compliance documents and certificates</p>
            <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors">
              View Documents →
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Analytics Report</h3>
            <p className="text-sm text-slate-600 mb-4">Generate detailed traceability analytics report</p>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
              Generate Report →
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Share Traceability</h3>
            <p className="text-sm text-slate-600 mb-4">Share traceability information with stakeholders</p>
            <button className="text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors">
              Share Link →
            </button>
          </div>
        </motion.div>

        {/* Quick Search */}
        <motion.div
          className="mt-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Quick Batch Lookup</h3>
            <p className="text-emerald-100">Enter any batch ID to instantly view its traceability</p>
          </div>
          
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="text"
              placeholder="Enter Batch ID..."
              className="flex-1 px-4 py-3 rounded-lg border-0 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
              Search
            </button>
          </div>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default TraceabilityExplorerPage;