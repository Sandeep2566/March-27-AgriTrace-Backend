import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import DashboardLayout from '../components/DashboardLayout.jsx';

const SupplyChainDashboard = () => {
  const navigate = useNavigate();

  // Clean, consistent inline SVG icons for each module (industry-style outlines)
  const Icon = ({ type }) => {
    const common = 'w-5 h-5 text-emerald-600';
    switch (type) {
      case 'batch-management':
        return (
          <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="7" height="7" rx="1.5"/>
            <rect x="13" y="4" width="7" height="7" rx="1.5"/>
            <rect x="4" y="13" width="7" height="7" rx="1.5"/>
            <path d="M16 16h4M18 14v4"/>
          </svg>
        );
      case 'traceability':
        return (
          <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="5"/>
            <path d="M20 20l-3.5-3.5"/>
            <path d="M9 11l2-2 2 3"/>
          </svg>
        );
      case 'transfer-management':
        return (
          <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 8h10m0 0-3-3m3 3-3 3"/>
            <path d="M17 16H7m0 0 3 3m-3-3 3-3"/>
          </svg>
        );
      case 'ml-analytics':
        return (
          <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12v6M10 8v10M15 11v7M20 6v12"/>
            <path d="M4 20h16"/>
          </svg>
        );
      case 'quality-pricing':
        return (
          <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l7 4v5c0 4.418-3.582 8-7 8s-7-3.582-7-8V7l7-4z"/>
            <path d="M8.5 13.5h7"/>
            <path d="M10 11c.7-.7 1.8-1 3-1"/>
          </svg>
        );
      case 'qr-codes':
        return (
          <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="6" height="6"/>
            <rect x="14" y="4" width="6" height="6"/>
            <rect x="4" y="14" width="6" height="6"/>
            <path d="M16 14h4M16 18h2M20 18v2M18 20h2"/>
          </svg>
        );
      case 'role-management':
        return (
          <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="8" r="3"/>
            <path d="M3 20v-1a6 6 0 0 1 12 0v1"/>
            <circle cx="18" cy="10" r="2"/>
            <path d="M18 20v-1a4 4 0 0 0-3-3.87"/>
          </svg>
        );
      case 'reports':
        return (
          <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/>
            <path d="M14 3v5h5"/>
            <path d="M9 13h6M9 17h6"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const features = [
    {
      id: 'batch-management',
      title: 'Batch Management',
      description: 'Create, manage, and monitor batches with full lifecycle tracking.',
      route: '/transparency/batch-management',
      features: ['Create new batches', 'View existing batches', 'Status monitoring']
    },
    {
      id: 'traceability',
      title: 'Traceability Explorer',
      description: 'Track the complete journey from farm to consumer with verification.',
      route: '/transparency/traceability',
      features: ['End-to-end tracking', 'Verification', 'History']
    },
    {
      id: 'transfer-management',
      title: 'Transfer Management',
      description: 'Manage secure transfers between stakeholders with full records.',
      route: '/transparency/transfers',
      features: ['Secure transfers', 'Stakeholder management', 'Ownership tracking']
    },
    {
      id: 'ml-analytics',
      title: 'ML Analytics',
      description: 'Analytics and predictions for quality and pricing insights.',
      route: '/transparency/analytics',
      features: ['Predictive analytics', 'Quality assessment', 'Price forecasting']
    },
    {
      id: 'quality-pricing',
      title: 'Quality & Pricing',
      description: 'Input and analyze quality metrics and pricing data.',
      route: '/transparency/quality-pricing',
      features: ['Quality metrics', 'Price analysis', 'Quality scoring']
    },
    {
      id: 'qr-codes',
      title: 'QR Code Generator',
      description: 'Generate QR codes for transparency and authentication.',
      route: '/transparency/qr-codes',
      features: ['QR generation', 'Consumer interface', 'Verification']
    },
    {
      id: 'role-management',
      title: 'Role Management',
      description: 'Manage user roles and permissions with access control.',
      route: '/transparency/roles',
      features: ['User management', 'Role assignment', 'Permission control']
    },
    {
      id: 'reports',
      title: 'Reports & Insights',
      description: 'Generate reports and gain insights from supply chain data.',
      route: '/transparency/reports',
      features: ['Custom reports', 'Visualization', 'Export']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <DashboardLayout>
      <motion.div 
        className="page-shell page-section"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Page Heading */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Supply Chain Control Center
          </h1>
          <p className="mt-2 text-slate-600 text-base sm:text-lg max-w-3xl">
            Manage batches, transfers, analytics, and reports from one place. Built with a clean, professional
            interface aligned to the landing-page theme for a consistent experience.
          </p>
        </header>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover="hover"
              className="group cursor-pointer"
              onClick={() => navigate(feature.route)}
            >
              <div className="h-full bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300">
                {/* Minimal Header Accent */}
                <div className="h-1 w-full bg-gradient-to-r from-emerald-500 to-teal-600" />

                {/* Card Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                      <Icon type={feature.id} />
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {feature.description}
                  </p>
                  {/* Feature List */}
                  <ul className="space-y-1.5 mb-5">
                    {feature.features.slice(0, 3).map((item, index) => (
                      <li key={index} className="flex items-center text-xs text-slate-500">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {/* Action Row */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400 group-hover:text-slate-500 transition-colors">
                      Open
                    </span>
                    <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-slate-200 flex items-center justify-center transition-colors">
                      <svg className="w-3 h-3 text-slate-400 group-hover:text-slate-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <style>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </DashboardLayout>
  );
};

export default SupplyChainDashboard;