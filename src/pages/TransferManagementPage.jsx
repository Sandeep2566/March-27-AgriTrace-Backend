import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout.jsx';
import TransferForm from '../components/TransferForm.js';

const TransferManagementPage = () => {
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

  const recentTransfers = [
    { id: 'TXN-001', batch: 'BATCH-789', from: 'Farm Co.', to: 'Distributor A', status: 'Completed', date: '2025-09-29' },
    { id: 'TXN-002', batch: 'BATCH-456', from: 'Distributor A', to: 'Retailer B', status: 'In Transit', date: '2025-09-30' },
    { id: 'TXN-003', batch: 'BATCH-123', from: 'Farm Co.', to: 'Processor C', status: 'Pending', date: '2025-09-30' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-emerald-600 bg-emerald-100';
      case 'In Transit': return 'text-blue-600 bg-blue-100';
      case 'Pending': return 'text-orange-600 bg-orange-100';
      default: return 'text-slate-600 bg-slate-100';
    }
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
          <span className="text-slate-600 font-medium">Transfer Management</span>
        </nav>

        {/* Page Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">Transfer Management</h1>
            <p className="text-lg text-slate-600 mt-1">Manage secure blockchain transfers between stakeholders</p>
          </div>

          {/* Transfer Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
              <div className="text-2xl font-bold text-emerald-700">45</div>
              <div className="text-sm text-slate-500">Total Transfers</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
              <div className="text-2xl font-bold text-emerald-600">38</div>
              <div className="text-sm text-slate-500">Completed</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
              <div className="text-2xl font-bold text-teal-700">5</div>
              <div className="text-sm text-slate-500">In Transit</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
              <div className="text-2xl font-bold text-orange-600">2</div>
              <div className="text-sm text-slate-500">Pending</div>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Create New Transfer */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-800">Initiate Transfer</h2>
                  <p className="text-sm text-slate-500">Transfer produce ownership securely</p>
                </div>
              </div>
              <TransferForm />
            </div>
          </motion.div>

          {/* Transfer Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-800">Transfer Status</h2>
                  <p className="text-sm text-slate-500">Monitor ongoing transfers</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">TXN-002</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-teal-100 text-teal-700">In Transit</span>
                  </div>
                  <p className="text-sm text-slate-600">BATCH-456 → Retailer B</p>
                  <div className="mt-2 bg-white rounded-full h-2">
                    <div className="bg-teal-600 h-2 rounded-full w-2/3"></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">67% Complete</p>
                </div>

                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">TXN-003</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">Pending</span>
                  </div>
                  <p className="text-sm text-slate-600">BATCH-123 → Processor C</p>
                  <p className="text-xs text-slate-500 mt-1">Awaiting confirmation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Transfers Table */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-800">Recent Transfers</h2>
                  <p className="text-sm text-slate-500">Latest transfer transactions</p>
                </div>
              </div>
              <button className="text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors">
                View All →
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Transfer ID</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Batch</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">From</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">To</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransfers.map((transfer) => (
                    <tr key={transfer.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-medium text-slate-900">{transfer.id}</td>
                      <td className="py-3 px-4 text-slate-600">{transfer.batch}</td>
                      <td className="py-3 px-4 text-slate-600">{transfer.from}</td>
                      <td className="py-3 px-4 text-slate-600">{transfer.to}</td>
                      <td className="py-3 px-4">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(transfer.status)}`}>
                          {transfer.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-600">{transfer.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Transfer Features */}
        <motion.div
          className="mt-8 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Secure Transfers</h3>
            <p className="text-sm text-slate-600">Blockchain-secured ownership transfers with multi-signature verification</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Real-time Tracking</h3>
            <p className="text-sm text-slate-600">Monitor transfer progress with live updates and notifications</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Audit Trail</h3>
            <p className="text-sm text-slate-600">Complete documentation and audit trail for compliance</p>
          </div>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default TransferManagementPage;