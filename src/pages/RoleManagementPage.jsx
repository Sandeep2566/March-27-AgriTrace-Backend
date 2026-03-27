import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout.jsx';
import RoleManager from '../components/RoleManager.js';

const RoleManagementPage = () => {
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

  const roleStats = [
    { label: 'Total Users', value: '156', trend: '+12' },
    { label: 'Active Farmers', value: '67', trend: '+5' },
    { label: 'Distributors', value: '23', trend: '+2' },
    { label: 'Retailers', value: '41', trend: '+3' }
  ];

  const rolePermissions = [
    {
      role: 'Administrator',
      color: 'red',
      permissions: ['Full Access', 'User Management', 'System Configuration', 'Data Export'],
      userCount: 3
    },
    {
      role: 'Farmer',
      color: 'green',
      permissions: ['Create Batches', 'Update Quality', 'View Own Data', 'Generate QR Codes'],
      userCount: 67
    },
    {
      role: 'Distributor',
      color: 'blue',
      permissions: ['Transfer Ownership', 'Update Location', 'View Supply Chain', 'Price Updates'],
      userCount: 23
    },
    {
      role: 'Retailer',
      color: 'purple',
      permissions: ['View Products', 'Update Retail Info', 'Consumer Analytics', 'Quality Reports'],
      userCount: 41
    },
    {
      role: 'Inspector',
      color: 'orange',
      permissions: ['Quality Assessment', 'Compliance Check', 'Certification', 'Audit Reports'],
      userCount: 15
    },
    {
      role: 'Consumer',
      color: 'teal',
      permissions: ['View Traceability', 'Access QR Info', 'Product History', 'Feedback'],
      userCount: 7
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: 'text-red-600 bg-red-100 border-red-200',
      green: 'text-emerald-600 bg-emerald-100 border-emerald-200',
      blue: 'text-blue-600 bg-blue-100 border-blue-200',
      purple: 'text-purple-600 bg-purple-100 border-purple-200',
      orange: 'text-orange-600 bg-orange-100 border-orange-200',
      teal: 'text-teal-600 bg-teal-100 border-teal-200'
    };
    return colors[color] || 'text-slate-600 bg-slate-100 border-slate-200';
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
          <span className="text-slate-600 font-medium">Role Management</span>
        </nav>

        {/* Page Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">Role & Access Management</h1>
            <p className="text-lg text-slate-600 mt-1">Manage user roles, permissions, and access control</p>
          </div>

          {/* Role Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {roleStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white rounded-lg p-4 shadow-sm border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl font-bold text-red-600">{stat.value}</div>
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
          {/* Role Manager Component */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-800">User & Role Management</h2>
                  <p className="text-sm text-slate-500">Assign roles and manage user permissions</p>
                </div>
              </div>
              <RoleManager />
            </div>
          </motion.div>

          {/* Role Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-800">Access Levels</h2>
                  <p className="text-sm text-slate-500">Role-based access hierarchy</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-800 text-sm">Administrator</div>
                    <div className="text-xs text-slate-500">Full System Access</div>
                  </div>
                  <span className="text-xs font-medium text-red-600">Level 5</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-800 text-sm">Inspector</div>
                    <div className="text-xs text-slate-500">Quality & Compliance</div>
                  </div>
                  <span className="text-xs font-medium text-orange-600">Level 4</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-800 text-sm">Farmer</div>
                    <div className="text-xs text-slate-500">Production Control</div>
                  </div>
                  <span className="text-xs font-medium text-emerald-600">Level 3</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-800 text-sm">Distributor</div>
                    <div className="text-xs text-slate-500">Supply Chain</div>
                  </div>
                  <span className="text-xs font-medium text-blue-600">Level 2</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-800 text-sm">Retailer</div>
                    <div className="text-xs text-slate-500">Retail Operations</div>
                  </div>
                  <span className="text-xs font-medium text-purple-600">Level 1</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Role Permissions Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-800">Role Permissions</h2>
                <p className="text-sm text-slate-500">Detailed permissions for each role</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rolePermissions.map((role, index) => (
                <motion.div
                  key={role.role}
                  className={`p-4 rounded-xl border-2 ${getColorClasses(role.color)}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-slate-800">{role.role}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getColorClasses(role.color)}`}>
                      {role.userCount} users
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {role.permissions.map((permission, permIndex) => (
                      <li key={permIndex} className="flex items-center text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-2 flex-shrink-0"></div>
                        {permission}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Security Features */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Multi-Factor Authentication</h3>
            <p className="text-sm text-slate-600">Enhanced security with MFA for all user accounts</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Audit Logging</h3>
            <p className="text-sm text-slate-600">Complete audit trail of all user actions and changes</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Session Management</h3>
            <p className="text-sm text-slate-600">Automatic session timeout and concurrent login control</p>
          </div>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default RoleManagementPage;