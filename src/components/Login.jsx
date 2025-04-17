import React, { useState } from 'react';
import { User, Lock, AlertCircle, BarChart2, Shield, TrendingUp, Clock, ChevronRight, Info, ArrowRight } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'about'

  // Dummy credentials
  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 'password123';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call with timeout
    setTimeout(() => {
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        onLogin();
      } else {
        setError('Invalid username or password');
      }
      setIsLoading(false);
    }, 800);
  };

  // Project highlights data
  const projectHighlights = [
    {
      icon: <BarChart2 size={20} className="text-blue-400" />,
      title: "Data Analysis",
      description: "Advanced analytics on 1,000+ insurance claims with 40+ attributes"
    },
    {
      icon: <Shield size={20} className="text-blue-400" />,
      title: "Fraud Detection",
      description: "ML-powered detection with 24.7% identified fraudulent claims"
    },
    {
      icon: <TrendingUp size={20} className="text-blue-400" />,
      title: "Business Intelligence",
      description: "Interactive Power BI dashboards for real-time monitoring"
    }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900 overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/30 via-slate-900 to-indigo-900/30"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-indigo-600/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 py-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left side - Info Panel */}
        <div className="hidden lg:flex lg:col-span-2 flex-col">
          <div className="h-full bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-lg rounded-xl shadow-xl border border-slate-700/50 p-8 flex flex-col">
            <div className="flex items-center mb-8">
              <div className="h-12 w-12 relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-4">
                <div className="text-2xl font-bold text-white">CW</div>
              </div>
              <h1 className="text-3xl font-bold text-white tracking-tight">
                <span className="text-blue-400">Claim</span>Wise
              </h1>
            </div>
            
            <h2 className="text-xl font-semibold text-white mb-4">Insurance Fraud Detection Platform</h2>
            <p className="text-slate-300 mb-8">Leveraging data science and business intelligence to detect and analyze insurance fraud patterns through interactive visualizations and machine learning models.</p>
            
            <div className="space-y-6 mb-8">
              {projectHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-slate-800/80 rounded-lg border border-slate-700/50">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{highlight.title}</h3>
                    <p className="text-sm text-slate-400">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-auto">
              <div className="bg-blue-900/30 border border-blue-700/30 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Info size={18} className="text-blue-400 mr-2" />
                  <h3 className="text-blue-300 font-medium">Key Findings</h3>
                </div>
                <p className="text-sm text-slate-300">Our analysis revealed that 24.7% of claims were fraudulent, with an average fraudulent claim value of $60.3K compared to $50.3K for legitimate claims.</p>
                
                <button 
                  onClick={() => setActiveTab('about')}
                  className="flex items-center text-sm text-blue-400 hover:text-blue-300 mt-2 transition-colors"
                >
                  Learn more <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Login/About Tabs */}
        <div className="col-span-1 lg:col-span-3">
          <div className="h-full bg-slate-800/50 backdrop-blur-xl rounded-xl shadow-xl border border-slate-700/50 overflow-hidden">
            {/* Tab navigation */}
            <div className="flex border-b border-slate-700/50">
              <button 
                className={`flex-1 py-4 text-center font-medium transition-colors ${activeTab === 'login' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400 hover:text-slate-300'}`}
                onClick={() => setActiveTab('login')}
              >
                Sign In
              </button>
              <button 
                className={`flex-1 py-4 text-center font-medium transition-colors ${activeTab === 'about' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400 hover:text-slate-300'}`}
                onClick={() => setActiveTab('about')}
              >
                About the Project
              </button>
            </div>
            
            {/* Login Content */}
            {activeTab === 'login' && (
              <div className="p-8">
                <div className="mb-8 text-center">
                  <div className="flex items-center justify-center lg:hidden mb-6">
                    <div className="h-12 w-12 relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-3">
                      <div className="text-2xl font-bold text-white">CW</div>
                    </div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                      <span className="text-blue-400">Claim</span>Wise
                    </h2>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Welcome Back</h2>
                  <p className="text-slate-400 text-sm">Sign in to access your insurance analytics dashboard</p>
                </div>

                {error && (
                  <div className="mb-6 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg flex items-center text-sm">
                    <AlertCircle size={18} className="mr-2 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-slate-300 mb-2">Username</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className="text-slate-400" />
                      </div>
                      <input
                        id="username"
                        name="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="username"
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-slate-600 rounded-lg bg-slate-700/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="admin"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="password" className="block text-sm font-medium text-slate-300">Password</label>
                      <a href="#" className="text-xs text-blue-400 hover:text-blue-300">Forgot password?</a>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock size={18} className="text-slate-400" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-slate-600 rounded-lg bg-slate-700/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="password123"
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-600 rounded bg-slate-700"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-400">
                      Remember me
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${
                        isLoading
                          ? "bg-blue-600/50 cursor-not-allowed"
                          : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      }`}
                    >
                      {isLoading ? "Signing in..." : "Sign in"}
                    </button>
                  </div>
                </form>

                <div className="mt-8 text-center text-xs text-slate-400">
                  <p>Use the following credentials to sign in:</p>
                  <p className="mt-1">Username: <span className="text-blue-400">admin</span> | Password: <span className="text-blue-400">password123</span></p>
                </div>
              </div>
            )}
            
            {/* About Content */}
            {activeTab === 'about' && (
              <div className="p-8 overflow-y-auto max-h-[600px]">
                <h2 className="text-2xl font-bold text-white mb-6">Insurance Claim Fraud Prediction</h2>
                
                <div className="space-y-6 text-slate-300">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Project Overview</h3>
                    <p className="mb-3">
                      The project "Insurance Claim Fraud Prediction" was formulated to respond to the increasing need for intelligent detection 
                      of fraud and generation of business insights in the insurance business. The data set used is of over 1,000 insurance claims, 
                      with more than 40 attributes to represent the insured individuals, policies, incidents descriptions & vehicles.
                    </p>
                    <p>
                      We utilized Power BI for our rich, interactive visualizations and machine learning models to detect potentially 
                      fraudulent claims, providing a powerful analytical framework to identify high risk claim profiles and support strategic business decision making.
                    </p>
                  </div>
                  
                  <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                    <h3 className="text-lg font-medium text-white mb-2">Key Findings</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <ArrowRight size={16} className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span>24.7% of analyzed claims (247 out of 1,000) were identified as fraudulent</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight size={16} className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span>Fraudulent claims averaged $60.3K versus $50.3K for legitimate claims</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight size={16} className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span>People aged 35-44 were most likely to submit fraudulent claims</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight size={16} className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span>Vehicle claims account for the highest percentage with a total worth of $37.9 million</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Dashboard Features</h3>
                    <p className="mb-3">
                      Our interactive Power BI dashboard provides comprehensive visualizations across three main pages:
                    </p>
                    <ul className="space-y-4 mb-3">
                      <li>
                        <h4 className="font-medium text-blue-300">1. Insurance Claim Data Analysis</h4>
                        <p className="text-sm text-slate-400">Overview of claims distribution by occupation, education level, age group, and geographic location.</p>
                      </li>
                      <li>
                        <h4 className="font-medium text-blue-300">2. Incident Claim Analysis</h4>
                        <p className="text-sm text-slate-400">Detailed breakdown of claims by incident type, vehicle age, severity, and temporal patterns.</p>
                      </li>
                      <li>
                        <h4 className="font-medium text-blue-300">3. Fraud Claims Analysis</h4>
                        <p className="text-sm text-slate-400">Comprehensive fraud detection metrics with demographic segmentation and trend analysis.</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Technology Stack</h3>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                      <div className="bg-slate-800/70 rounded-lg p-3 text-center border border-slate-700/50">
                        <p className="text-sm font-medium text-blue-400">Power BI</p>
                        <p className="text-xs text-slate-400">Visualization</p>
                      </div>
                      <div className="bg-slate-800/70 rounded-lg p-3 text-center border border-slate-700/50">
                        <p className="text-sm font-medium text-blue-400">Machine Learning</p>
                        <p className="text-xs text-slate-400">Predictive Analytics</p>
                      </div>
                      <div className="bg-slate-800/70 rounded-lg p-3 text-center border border-slate-700/50">
                        <p className="text-sm font-medium text-blue-400">Data Science</p>
                        <p className="text-xs text-slate-400">Statistical Analysis</p>
                      </div>
                      <div className="bg-slate-800/70 rounded-lg p-3 text-center border border-slate-700/50">
                        <p className="text-sm font-medium text-blue-400">React</p>
                        <p className="text-xs text-slate-400">Frontend Interface</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 text-center">
                    <button 
                      onClick={() => setActiveTab('login')}
                      className="inline-flex items-center justify-center py-2 px-6 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg text-sm transition-colors border border-blue-600/40"
                    >
                      Back to Login
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Login;