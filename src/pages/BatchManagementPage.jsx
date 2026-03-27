import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout.jsx';
import BatchForm from '../components/BatchForm.js';
import BatchDetails from '../components/BatchDetails.js';

const BatchManagementPage = () => {
  const navigate = useNavigate();

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
          <span className="text-slate-600 font-medium">Batch Management</span>
        </nav>

        {/* Page Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">Batch Management</h1>
            <p className="text-lg text-slate-600 mt-1">Create and manage agricultural produce batches</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm border border-emerald-100">
              <div className="text-2xl font-bold text-emerald-600">127</div>
              <div className="text-sm text-slate-500">Active Batches</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm border border-emerald-100">
              <div className="text-2xl font-bold text-teal-600">89</div>
              <div className="text-sm text-slate-500">Completed</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm border border-emerald-100">
              <div className="text-2xl font-bold text-green-600">12</div>
              <div className="text-sm text-slate-500">In Transit</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm border border-emerald-100">
              <div className="text-2xl font-bold text-emerald-700">3</div>
              <div className="text-sm text-slate-500">Pending</div>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Create New Batch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white/90 backdrop-blur rounded-2xl shadow-sm border border-emerald-100 p-6 h-fit">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-800">Create New Batch</h2>
                  <p className="text-sm text-slate-500">Register new agricultural produce batch</p>
                </div>
              </div>
              <BatchForm />
            </div>
          </motion.div>

          {/* Existing Batches */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white/90 backdrop-blur rounded-2xl shadow-sm border border-emerald-100 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-800">Existing Batches</h2>
                  <p className="text-sm text-slate-500">View and manage all batch records</p>
                </div>
              </div>
              <BatchDetails />
            </div>
          </motion.div>
        </div>

        {/* Additional Features */}
        <motion.div
          className="mt-8 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-white/90 backdrop-blur rounded-xl p-6 shadow-sm border border-emerald-100 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Batch Analytics</h3>
            <p className="text-sm text-slate-600">View detailed analytics for batch performance</p>
          </div>

          <div className="bg-white/90 backdrop-blur rounded-xl p-6 shadow-sm border border-emerald-100 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Batch Timeline</h3>
            <p className="text-sm text-slate-600">Track batch lifecycle and milestones</p>
          </div>

          <div className="bg-white/90 backdrop-blur rounded-xl p-6 shadow-sm border border-emerald-100 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Export Reports</h3>
            <p className="text-sm text-slate-600">Generate and download batch reports</p>
          </div>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default BatchManagementPage;