import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout.jsx';
import MLAnalytics from '../components/MLAnalytics.js';
import BatchMLAnalytics from '../components/BatchMLAnalytics.js';

const MLAnalyticsPage = () => {
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

  const mlMetrics = [
    { label: 'Model Accuracy', value: '94.7%', trend: '+2.3%', color: 'emerald' },
    { label: 'Predictions Made', value: '15,247', trend: '+12%', color: 'emerald' },
    { label: 'Quality Score', value: '8.9/10', trend: '+0.4', color: 'emerald' },
    { label: 'Price Accuracy', value: '91.2%', trend: '+1.8%', color: 'emerald' }
  ];

  const getTrendColor = (color) => {
    const colors = {
      emerald: 'text-emerald-600 bg-emerald-100',
  blue: 'text-emerald-600 bg-emerald-100',
  purple: 'text-emerald-600 bg-emerald-100',
  orange: 'text-emerald-600 bg-emerald-100'
    };
    return colors[color] || 'text-slate-600 bg-slate-100';
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
          <span className="text-slate-600 font-medium">ML Analytics</span>
        </nav>

        {/* Page Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">ML Analytics Dashboard</h1>
            <p className="text-lg text-slate-600 mt-1">AI-powered insights for quality assessment and price forecasting</p>
          </div>

          {/* ML Performance Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mlMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="bg-white rounded-lg p-4 shadow-sm border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`text-xl font-bold ${getTrendColor(metric.color).replace('bg-', 'text-').replace('-100', '-600')}`}>
                    {metric.value}
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${getTrendColor(metric.color)}`}>
                    {metric.trend}
                  </span>
                </div>
                <div className="text-sm text-slate-500">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Analytics Sections */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* General ML Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-800">Market Analytics</h2>
                  <p className="text-sm text-slate-500">General market trends and predictions</p>
                </div>
              </div>
              <MLAnalytics />
            </div>
          </motion.div>

          {/* Batch-specific Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-800">Batch Analytics</h2>
                  <p className="text-sm text-slate-500">Individual batch performance insights</p>
                </div>
              </div>
              <BatchMLAnalytics />
            </div>
          </motion.div>
        </div>

        {/* AI Model Information */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Quality Prediction</h3>
            <p className="text-sm text-slate-600 mb-3">AI model predicts quality scores based on multiple factors</p>
            <div className="text-xs text-slate-500">
              <div>Model: Random Forest</div>
              <div>Accuracy: 94.7%</div>
              <div>Last Updated: 2 hours ago</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Price Forecasting</h3>
            <p className="text-sm text-slate-600 mb-3">Market price predictions using historical and real-time data</p>
            <div className="text-xs text-slate-500">
              <div>Model: LSTM Neural Network</div>
              <div>Accuracy: 91.2%</div>
              <div>Last Updated: 1 hour ago</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Demand Analysis</h3>
            <p className="text-sm text-slate-600 mb-3">Predict market demand patterns and seasonal trends</p>
            <div className="text-xs text-slate-500">
              <div>Model: Gradient Boosting</div>
              <div>Accuracy: 88.9%</div>
              <div>Last Updated: 3 hours ago</div>
            </div>
          </div>
        </motion.div>

        {/* Insights Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">AI-Powered Insights</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="text-emerald-100">Quality scores have improved by 12% this month due to better harvesting practices</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="text-emerald-100">Predicted 15% increase in tomato prices for next quarter</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="text-emerald-100">Seasonal demand pattern suggests optimal harvest timing</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="text-lg font-semibold mb-2">Model Performance</h4>
                  <div className="text-3xl font-bold mb-2">92.8%</div>
                  <p className="text-teal-100 text-sm">Average Accuracy</p>
                  <div className="mt-4 bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-11/12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
            Export Analytics Report
          </button>
          <button className="px-6 py-3 bg-white text-emerald-700 border border-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
            Configure Models
          </button>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default MLAnalyticsPage;