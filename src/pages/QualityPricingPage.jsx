import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout.jsx';
import PriceQualityForm from '../components/PriceQualityForm.js';

const QualityPricingPage = () => {
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

  const qualityMetrics = [
    { label: 'Average Quality Score', value: '8.7/10', change: '+0.3', trend: 'up' },
    { label: 'Quality Assessments', value: '1,247', change: '+124', trend: 'up' },
    { label: 'Failed Inspections', value: '23', change: '-5', trend: 'down' },
    { label: 'Compliance Rate', value: '96.2%', change: '+2.1%', trend: 'up' }
  ];

  const priceData = [
    { product: 'Tomatoes', currentPrice: '$2.45/kg', prediction: '$2.67/kg', trend: 'up', confidence: '92%' },
    { product: 'Carrots', currentPrice: '$1.89/kg', prediction: '$1.82/kg', trend: 'down', confidence: '88%' },
    { product: 'Lettuce', currentPrice: '$3.21/kg', prediction: '$3.35/kg', trend: 'up', confidence: '91%' },
  ];

  const getTrendIcon = (trend) => {
    if (trend === 'up') {
      return (
        <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
        </svg>
      );
    }
    return (
      <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-9.2 9.2M7 7v10h10" />
      </svg>
    );
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
          <span className="text-slate-600 font-medium">Quality & Pricing</span>
        </nav>

        {/* Page Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">Quality & Pricing Management</h1>
            <p className="text-lg text-slate-600 mt-1">Monitor quality metrics and market pricing intelligence</p>
          </div>

          {/* Quality Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {qualityMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="bg-white rounded-lg p-4 shadow-sm border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl font-bold text-green-600">{metric.value}</div>
                  <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
                    metric.trend === 'up' ? 'text-emerald-700 bg-emerald-100' : 'text-teal-700 bg-teal-100'
                  }`}>
                    {getTrendIcon(metric.trend)}
                    {metric.change}
                  </div>
                </div>
                <div className="text-sm text-slate-500">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Quality & Price Input Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-800">Quality & Price Assessment</h2>
                  <p className="text-sm text-slate-500">Input quality metrics and pricing data</p>
                </div>
              </div>
              <PriceQualityForm />
            </div>
          </motion.div>

          {/* Market Intelligence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-800">Market Intelligence</h2>
                  <p className="text-sm text-slate-500">Real-time price predictions</p>
                </div>
              </div>

              <div className="space-y-4">
                {priceData.map((item, index) => (
                  <div key={index} className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-slate-800">{item.product}</span>
                      <div className="flex items-center gap-1">
                        {getTrendIcon(item.trend)}
                        <span className="text-xs text-slate-500">{item.confidence}</span>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600">
                      <div>Current: <span className="font-medium">{item.currentPrice}</span></div>
                      <div>Predicted: <span className="font-medium">{item.prediction}</span></div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                View Detailed Analysis
              </button>
            </div>
          </motion.div>
        </div>

        {/* Quality Standards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-800">Quality Standards & Certifications</h2>
                <p className="text-sm text-slate-500">Industry compliance and certification tracking</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-emerald-800 mb-2">Organic Certification</h3>
                <p className="text-sm text-emerald-600">96% of batches certified</p>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-blue-800 mb-2">Safety Standards</h3>
                <p className="text-sm text-blue-600">100% HACCP compliant</p>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-purple-800 mb-2">Quality Assurance</h3>
                <p className="text-sm text-purple-600">ISO 22000 certified</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Trends */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Price Trend Analysis</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-700">Weekly Average</span>
                <span className="font-semibold text-slate-800">$2.34/kg</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-700">Monthly Peak</span>
                <span className="font-semibold text-slate-800">$2.89/kg</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-700">Seasonal Low</span>
                <span className="font-semibold text-slate-800">$1.95/kg</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Quality Distribution</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Grade A (9-10)</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-slate-200 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full w-3/4"></div>
                  </div>
                  <span className="text-sm font-medium">75%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Grade B (7-8)</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-1/5"></div>
                  </div>
                  <span className="text-sm font-medium">20%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Grade C (5-6)</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-slate-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full w-1/20"></div>
                  </div>
                  <span className="text-sm font-medium">5%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default QualityPricingPage;