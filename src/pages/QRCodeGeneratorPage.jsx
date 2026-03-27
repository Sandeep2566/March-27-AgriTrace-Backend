import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout.jsx';
import QRCodeDisplay from '../components/QRCodeDisplay.js';

const QRCodeGeneratorPage = () => {
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

  const qrStats = [
    { label: 'QR Codes Generated', value: '2,847', trend: '+247' },
    { label: 'Scans This Month', value: '15,692', trend: '+1,204' },
    { label: 'Consumer Engagement', value: '89.3%', trend: '+5.2%' },
    { label: 'Verification Rate', value: '97.8%', trend: '+2.1%' }
  ];

  const recentScans = [
    { batchId: 'BATCH-789', product: 'Organic Tomatoes', scans: 456, location: 'Mumbai, India' },
    { batchId: 'BATCH-456', product: 'Fresh Carrots', scans: 234, location: 'Delhi, India' },
    { batchId: 'BATCH-123', product: 'Green Lettuce', scans: 178, location: 'Bangalore, India' }
  ];

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
          <span className="text-slate-600 font-medium">QR Code Generator</span>
        </nav>

        {/* Page Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">QR Code Generator</h1>
            <p className="text-lg text-slate-600 mt-1">Create QR codes for consumer transparency and product authentication</p>
          </div>

          {/* QR Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {qrStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white rounded-lg p-4 shadow-sm border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl font-bold text-emerald-700">{stat.value}</div>
                  <span className="text-xs px-2 py-1 rounded-full font-medium text-emerald-600 bg-emerald-100">
                    {stat.trend}
                  </span>
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* QR Code Generator */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-800">Generate QR Code</h2>
                  <p className="text-sm text-slate-500">Create QR codes for batch traceability</p>
                </div>
              </div>
              <QRCodeDisplay />
            </div>
          </motion.div>

          {/* QR Code Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-800">Scan Analytics</h2>
                  <p className="text-sm text-slate-500">Real-time scan statistics</p>
                </div>
              </div>

              <div className="space-y-4">
                {recentScans.map((scan, index) => (
                  <div key={index} className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-slate-800 text-sm">{scan.product}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">{scan.scans} scans</span>
                    </div>
                    <div className="text-xs text-slate-600">
                      <div>Batch: {scan.batchId}</div>
                      <div>Location: {scan.location}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                View All Analytics
              </button>
            </div>
          </motion.div>
        </div>

        {/* QR Code Features */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Mobile Optimized</h3>
            <p className="text-sm text-slate-600">QR codes optimized for mobile scanning with high readability</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Blockchain Verified</h3>
            <p className="text-sm text-slate-600">Each QR code links to blockchain-verified traceability data</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Consumer Insights</h3>
            <p className="text-sm text-slate-600">Track consumer engagement and scanning patterns</p>
          </div>
        </motion.div>

        {/* Consumer Experience Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Consumer Experience</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="text-emerald-100">Instant access to complete product journey</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="text-emerald-100">Quality certifications and safety information</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="text-emerald-100">Farm origin details and harvest information</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="text-emerald-100">Blockchain-verified authenticity</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="text-lg font-semibold mb-4">Sample QR Code</h4>
                  <div className="w-32 h-32 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <div className="w-24 h-24 bg-slate-800 rounded grid grid-cols-8 gap-0.5 p-1">
                      {Array.from({ length: 36 }, (_, i) => (
                        <div key={i} className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-slate-800'}`}></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-emerald-100 text-sm">Scan to view product details</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default QRCodeGeneratorPage;