import React, { useEffect, useRef } from 'react';
import { Shield, PieChart, TrendingUp, AlertTriangle, Database, Award } from 'lucide-react';

const AboutPage = () => {
  const statsRef = useRef(null);
  
  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all sections with animation
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div id="about" className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white mt-32 pt-20">
      
      {/* Project Overview */}
      <div className="bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6 text-white">Project Overview</h2>
              <p className="text-lg text-gray-300 mb-4">
                The "Insurance Claim Fraud Prediction" project was developed to address the 
                growing need for intelligent fraud detection and business insights in the insurance industry.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                Using a comprehensive dataset of over 1,000 insurance claims with more than 40 attributes, 
                we've built a powerful analytical framework that combines business intelligence and 
                machine learning to transform data into actionable insights.
              </p>
              <div className="mt-8">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg mr-4">
                    <Database className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Comprehensive Dataset</h3>
                    <p className="text-gray-400">1,000+ insurance claims with 40+ attributes</p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg mr-4">
                    <PieChart className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Rich Visualizations</h3>
                    <p className="text-gray-400">Interactive Power BI dashboards for deeper insights</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-lg mr-4">
                    <AlertTriangle className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Fraud Detection</h3>
                    <p className="text-gray-400">Advanced ML models to identify potential fraud</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative p-1 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-xl animate-on-scroll">
              <div className="bg-slate-900 p-6 rounded-lg h-full">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-400">Policy Types</h4>
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">
                        Distribution
                      </span>
                    </div>
                    <div className="h-32 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-slate-700 relative">
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                          <div className="absolute top-0 left-0 w-full h-full" style={{
                            background: "conic-gradient(#3b82f6 0% 45%, #6366f1 45% 65%, #8b5cf6 65% 100%)"
                          }}></div>
                          <div className="absolute inset-3 bg-slate-800 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-400">Claim Amount</h4>
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">
                        By Type
                      </span>
                    </div>
                    <div className="h-32 flex items-end justify-between p-2">
                      <div className="w-1/4 bg-blue-500 rounded-t-sm h-1/2"></div>
                      <div className="w-1/4 bg-indigo-500 rounded-t-sm h-full"></div>
                      <div className="w-1/4 bg-purple-500 rounded-t-sm h-3/4"></div>
                      <div className="w-1/4 bg-sky-500 rounded-t-sm h-1/4"></div>
                    </div>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-400">Fraud Rate</h4>
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">
                        Monthly
                      </span>
                    </div>
                    <div className="h-32 flex items-center">
                      <div className="w-full h-16 relative">
                        <div className="absolute inset-0">
                          <svg viewBox="0 0 100 20" className="w-full h-full">
                            <path d="M0,10 Q20,20 40,10 T80,10 T100,10" fill="none" stroke="#3b82f6" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-400">Risk Score</h4>
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">
                        Prediction
                      </span>
                    </div>
                    <div className="h-32 flex items-center justify-center">
                      <div className="relative w-20 h-20">
                        <svg viewBox="0 0 120 120" className="w-full h-full">
                          <circle cx="60" cy="60" r="54" fill="none" stroke="#1e293b" strokeWidth="12" />
                          <circle cx="60" cy="60" r="54" fill="none" stroke="#3b82f6" strokeWidth="12" 
                            strokeDasharray="339.3" strokeDashoffset="85" transform="rotate(-90 60 60)" />
                          <text x="60" y="70" textAnchor="middle" fontSize="20" fill="white" fontWeight="bold">80%</text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Key Features */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4 text-white">Key Features & Technologies</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Our project combines advanced analytics and machine learning technologies
              to deliver powerful insights for insurance fraud detection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 animate-on-scroll">
            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="bg-blue-500/20 p-3 rounded-lg inline-block mb-4">
                <Database className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Data Processing</h3>
              <p className="text-gray-400">
                Comprehensive end-to-end pipeline from data preprocessing to exploratory 
                analysis, ensuring quality insights.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="bg-blue-500/20 p-3 rounded-lg inline-block mb-4">
                <PieChart className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Interactive Visualizations</h3>
              <p className="text-gray-400">
                Rich, interactive Power BI dashboards providing deep insights into insurance 
                claim patterns and risk factors.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="bg-blue-500/20 p-3 rounded-lg inline-block mb-4">
                <TrendingUp className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Predictive Analytics</h3>
              <p className="text-gray-400">
                Advanced machine learning models that identify potentially fraudulent claims 
                and predict risk profiles.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Impact */}
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4 text-white">Project Impact</h2>
            <p className="max-w-3xl text-lg text-gray-300">
              Our analytical framework has transformed data-driven decision making in insurance fraud detection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 animate-on-scroll" ref={statsRef}>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-white">Business Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-500/20 p-1 rounded-md mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Minimized financial losses from fraudulent claims</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500/20 p-1 rounded-md mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Identified high-risk claim profiles for proactive intervention</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500/20 p-1 rounded-md mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Enhanced operational efficiency in claims processing</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500/20 p-1 rounded-md mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Supported data-driven strategic business decisions</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-white">Technical Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-500/20 p-1 rounded-md mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Integrated business intelligence with machine learning predictions</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500/20 p-1 rounded-md mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Developed real-time dashboard reporting for immediate insights</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500/20 p-1 rounded-md mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Created a scalable framework adaptable to various insurance types</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500/20 p-1 rounded-md mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Pioneered innovative data transformation for the insurance sector</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dataset Overview */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6 text-white">Dataset Overview</h2>
              <p className="text-lg text-gray-300 mb-6">
                Our analysis is powered by a comprehensive dataset of over 1,000 insurance claims 
                with more than 40 attributes across four key categories:
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <h3 className="font-semibold text-blue-400 mb-2">Insured Person</h3>
                  <p className="text-gray-400 text-sm">Demographics, education, occupation, and personal details</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <h3 className="font-semibold text-blue-400 mb-2">Policy Details</h3>
                  <p className="text-gray-400 text-sm">Coverage limits, premiums, deductibles, and policy history</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <h3 className="font-semibold text-blue-400 mb-2">Incident Description</h3>
                  <p className="text-gray-400 text-sm">Type, severity, location, and other contextual information</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <h3 className="font-semibold text-blue-400 mb-2">Vehicle Characteristics</h3>
                  <p className="text-gray-400 text-sm">Make, model, year, and other vehicle-specific attributes</p>
                </div>
              </div>
              
              <p className="text-gray-300">
                This rich dataset enables us to identify patterns and factors that may indicate 
                fraudulent claims, helping insurance companies make informed decisions.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl animate-on-scroll">
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                <Database className="h-5 w-5 text-blue-400 mr-2" />
                Key Data Attributes
              </h3>
              
              <div className="space-y-3 max-h-80 overflow-y-auto pr-2 scrollbar-thin">
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <h4 className="font-medium text-blue-400 mb-1">Personal Information</h4>
                  <p className="text-sm text-gray-400">age, insured_sex, insured_education_level, insured_occupation, insured_hobbies</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <h4 className="font-medium text-blue-400 mb-1">Policy Information</h4>
                  <p className="text-sm text-gray-400">policy_number, policy_bind_date, policy_state, policy_csl, policy_deductable, policy_annual_premium</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <h4 className="font-medium text-blue-400 mb-1">Incident Details</h4>
                  <p className="text-sm text-gray-400">incident_date, incident_type, collision_type, incident_severity, authorities_contacted</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <h4 className="font-medium text-blue-400 mb-1">Claim Information</h4>
                  <p className="text-sm text-gray-400">total_claim_amount, injury_claim, property_claim, vehicle_claim, fraud_reported</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <h4 className="font-medium text-blue-400 mb-1">Vehicle Information</h4>
                  <p className="text-sm text-gray-400">auto_make, auto_model, auto_year</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <h4 className="font-medium text-blue-400 mb-1">Additional Context</h4>
                  <p className="text-sm text-gray-400">property_damage, bodily_injuries, witnesses, police_report_available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Conclusion */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12 animate-on-scroll">
            <div className="inline-block p-3 rounded-full bg-blue-500/10 mb-4">
              <Award className="h-8 w-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">Transforming Insurance Analytics</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-8">
              By integrating business intelligence with machine learning, our project provides a powerful 
              framework that helps insurance companies minimize losses from fraud and make smarter, 
              data-driven decisions.
            </p>
            
            <div className="inline-flex items-center justify-center rounded-md bg-slate-800 p-1">
              <span className="px-3 py-1.5 text-sm font-medium">
                <span className="text-blue-400">1000+</span> 
                <span className="text-gray-400 ml-1">Claims Analyzed</span>
              </span>
              <span className="px-3 py-1.5 text-sm font-medium">
                <span className="text-blue-400">40+</span> 
                <span className="text-gray-400 ml-1">Data Attributes</span>
              </span>
              <span className="px-3 py-1.5 text-sm font-medium">
                <span className="text-blue-400">100%</span> 
                <span className="text-gray-400 ml-1">Data-Driven</span>
              </span>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <a href='#dashboard' className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/30">
              Explore Our Dashboard
            </a>
          </div>
        </div>
      </div>
      
      {/* Add custom styles */}
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.5);
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;