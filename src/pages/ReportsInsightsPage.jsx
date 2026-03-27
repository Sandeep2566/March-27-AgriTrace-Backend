import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout.jsx';

const ReportsInsightsPage = () => {
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

  const reportTypes = [
    {
      title: 'Supply Chain Overview',
      description: 'Comprehensive overview of entire supply chain performance',
      icon: '📊',
      color: 'blue',
      metrics: ['Total Batches', 'Active Transfers', 'Quality Scores', 'Revenue']
    },
    {
      title: 'Quality Analytics',
      description: 'Detailed quality assessment and compliance reports',
      icon: '🎯',
      color: 'emerald',
      metrics: ['Quality Trends', 'Compliance Rate', 'Failed Inspections', 'Certifications']
    },
    {
      title: 'Financial Insights',
      description: 'Revenue analysis, pricing trends, and financial performance',
      icon: '💰',
      color: 'green',
      metrics: ['Revenue Growth', 'Price Trends', 'Cost Analysis', 'Profit Margins']
    },
    {
      title: 'Traceability Report',
      description: 'End-to-end traceability and blockchain verification reports',
      icon: '🔍',
      color: 'purple',
      metrics: ['Trace Coverage', 'Verification Rate', 'Consumer Scans', 'Chain Integrity']
    },
    {
      title: 'Stakeholder Activity',
      description: 'User engagement, role performance, and activity analytics',
      icon: '👥',
      color: 'orange',
      metrics: ['Active Users', 'Role Distribution', 'Engagement Rate', 'Task Completion']
    },
    {
      title: 'Predictive Analytics',
      description: 'AI-powered predictions and market forecasting reports',
      icon: '🔮',
      color: 'indigo',
      metrics: ['Price Forecasts', 'Demand Predictions', 'Quality Projections', 'Risk Assessment']
    }
  ];

  const recentReports = [
    { name: 'Q3 Supply Chain Report', type: 'PDF', size: '2.4 MB', date: '2025-09-28', downloads: 247 },
    { name: 'September Quality Analysis', type: 'Excel', size: '1.8 MB', date: '2025-09-27', downloads: 156 },
    { name: 'Traceability Audit Report', type: 'PDF', size: '3.2 MB', date: '2025-09-25', downloads: 89 }
  ];

  // Unify all report card headers to landing-page green gradient regardless of type
  const getColorClasses = () => 'from-emerald-500 to-teal-600 text-white';

  const handleGenerateReport = (reportType) => {
    console.log(`Generating ${reportType} report...`);
    // In a real implementation, this would trigger report generation
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
          <span className="text-slate-600 font-medium">Reports & Insights</span>
        </nav>

        {/* Page Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">Reports & Insights</h1>
            <p className="text-lg text-slate-600 mt-1">Generate comprehensive reports and gain data-driven insights</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
              <div className="text-2xl font-bold text-emerald-600">247</div>
              <div className="text-sm text-slate-500">Reports Generated</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
              <div className="text-2xl font-bold text-emerald-600">89.2%</div>
              <div className="text-sm text-slate-500">Data Accuracy</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
              <div className="text-2xl font-bold text-emerald-600">1,456</div>
              <div className="text-sm text-slate-500">Downloads</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
              <div className="text-2xl font-bold text-emerald-600">24/7</div>
              <div className="text-sm text-slate-500">Real-time Data</div>
            </div>
          </div>
        </motion.div>

        {/* Report Types Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {reportTypes.map((report, index) => (
            <motion.div
              key={report.title}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onClick={() => handleGenerateReport(report.title)}
            >
              {/* Card Header */}
              <div className={`h-16 bg-gradient-to-r ${getColorClasses(report.color)} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                <span className="text-2xl relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  {report.icon}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                  {report.title}
                </h3>
                
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {report.description}
                </p>

                {/* Metrics List */}
                <ul className="space-y-1 mb-4">
                  {report.metrics.slice(0, 3).map((metric, metricIndex) => (
                    <li key={metricIndex} className="flex items-center text-xs text-slate-500">
                      <div className="w-1 h-1 rounded-full bg-slate-400 mr-2 flex-shrink-0"></div>
                      {metric}
                    </li>
                  ))}
                </ul>

                {/* Generate Button */}
                <button className="w-full py-2 px-4 bg-slate-100 group-hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors text-sm">
                  Generate Report
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Recent Reports & Custom Report Builder */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Reports */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-slate-800">Recent Reports</h2>
                    <p className="text-sm text-slate-500">Latest generated reports</p>
                  </div>
                </div>
                <button className="text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors">
                  View All →
                </button>
              </div>

              <div className="space-y-4">
                {recentReports.map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        report.type === 'PDF' ? 'bg-emerald-100' : 'bg-teal-100'
                      }`}>
                        {report.type === 'PDF' ? (
                          <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-slate-800 text-sm">{report.name}</div>
                        <div className="text-xs text-slate-500">{report.size} • {report.downloads} downloads</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-600">{report.date}</div>
                      <button className="text-xs text-teal-600 hover:text-teal-700 transition-colors">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Custom Report Builder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-800">Custom Report</h2>
                  <p className="text-sm text-slate-500">Build your own report</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Report Type</label>
                  <select className="w-full p-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                    <option>Supply Chain Overview</option>
                    <option>Quality Analytics</option>
                    <option>Financial Insights</option>
                    <option>Traceability Report</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Date Range</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input type="date" className="w-full p-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500" />
                    <input type="date" className="w-full p-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Format</label>
                  <div className="flex gap-2">
                    <label className="flex items-center">
                      <input type="radio" name="format" className="mr-2" defaultChecked />
                      <span className="text-sm">PDF</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="format" className="mr-2" />
                      <span className="text-sm">Excel</span>
                    </label>
                  </div>
                </div>

                <button className="w-full py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors">
                  Generate Custom Report
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Insights Dashboard */}
        <motion.div
          className="mt-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Key Business Insights</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <p className="text-teal-100">Supply chain efficiency improved by 23% this quarter</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <p className="text-teal-100">Quality scores consistently above industry standards</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <p className="text-teal-100">Consumer engagement through QR codes increased 45%</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-lg font-semibold mb-2">Data Coverage</h4>
                <div className="text-3xl font-bold mb-2">98.7%</div>
                <p className="text-teal-100 text-sm">Supply Chain Visibility</p>
                <div className="mt-4 bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-11/12"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </motion.div>
    </DashboardLayout>
  );
};

export default ReportsInsightsPage;