import React, { useEffect, useRef, useState } from 'react';
import { Database, BarChart2, AlertTriangle, TrendingUp, FileText } from 'lucide-react';

const Dashboard = () => {
  const chartRef = useRef(null);
  const [showDataTable, setShowDataTable] = useState(false);
  const [insuranceData, setInsuranceData] = useState([]);
  
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
    
    // Fetch CSV data when viewing data is enabled
    if (showDataTable) {
      fetch('/insurance.csv')
        .then(response => response.text())
        .then(csvText => {
          const rows = csvText.split('\n');
          const headers = rows[0].split(',');
          const data = rows.slice(1, 20).map(row => {
            const values = row.split(',');
            return headers.reduce((obj, header, i) => {
              obj[header.trim()] = values[i]?.trim() || '';
              return obj;
            }, {});
          });
          setInsuranceData(data);
        })
        .catch(error => console.error('Error loading CSV:', error));
    }
    
    return () => observer.disconnect();
  }, [showDataTable]);

  return (
    <div id="dashboard" className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-20">
      {/* Dashboard Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-block p-3 rounded-full bg-blue-500/10 mb-4">
            <BarChart2 className="h-8 w-8 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">Insurance Fraud Analytics Dashboard</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            Explore our comprehensive fraud detection insights through this interactive dashboard, analyzing 1,000 insurance claims with a 24.7% fraud rate.
          </p>
        </div>
      </div>
      
      {/* Main Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl p-1 animate-on-scroll">
          <div className="bg-slate-900 rounded-lg p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-4 border-b border-slate-700">
              <div>
                <h3 className="text-xl font-semibold text-blue-400">Insurance Claim Fraud Analysis</h3>
                <p className="text-sm text-gray-400">Real-time insights from 1,000 insurance claims totaling $52.8 million</p>
              </div>
              <div className="flex space-x-3 mt-3 md:mt-0">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full">
                  Fraud Rate: 24.7%
                </span>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full">
                  Live Data
                </span>
              </div>
            </div>
            
            {/* Dashboard Embed */}
            <div className="relative w-full overflow-hidden rounded-lg bg-slate-800 border border-slate-700 shadow-lg" style={{paddingTop: '56.25%'}}>
              <iframe
                title="Insurance_Claim_Fraud_Analysis"
                src="https://app.powerbi.com/reportEmbed?reportId=ec748ac8-7e2d-4909-85d3-22f5a64d36bf&autoAuth=true&ctid=23035d1f-133c-44b5-b2ad-b3aef17baaa1"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-slate-900/50 to-transparent pointer-events-none opacity-0 hover:opacity-0 transition-opacity duration-300"></div>
            </div>
            
            <div className="flex justify-between items-center mt-4 px-2">
              <div className="flex items-center">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                </div>
                <span className="ml-2 text-xs text-gray-400">Interactive Controls Enabled</span>
              </div>
              <span className="text-xs text-blue-300/70">Powered by Power BI</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dashboard Features */}
      <div className="bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4 text-white">Key Insights</h3>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Analysis of 1,000 insurance claims shows critical patterns in fraud detection and claim distribution
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 animate-on-scroll">
            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-xl p-6 border border-slate-700 shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="bg-blue-500/20 p-3 rounded-lg inline-block mb-4">
                <AlertTriangle className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Claim Distribution</h3>
              <p className="text-gray-400">
                Vehicle claims account for the highest percentage ($37.9M), while damage and property claims are lower ($7.4M each).
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-xl p-6 border border-slate-700 shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="bg-blue-500/20 p-3 rounded-lg inline-block mb-4">
                <AlertTriangle className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Demographic Insights</h3>
              <p className="text-gray-400">
                Highest fraud rates among 35-44 age group, with Machine Operators and Professional Specialists showing highest claim frequencies.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-xl p-6 border border-slate-700 shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="bg-blue-500/20 p-3 rounded-lg inline-block mb-4">
                <TrendingUp className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Geographic Patterns</h3>
              <p className="text-gray-400">
                Illinois, Indiana, and Ohio have highest claim amounts ($16M-$18M each), with Ohio having the most claims (352).
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dashboard Metrics */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-6 text-white">Key Performance Indicators</h3>
              <p className="text-lg text-gray-300 mb-6">
                Our analysis reveals critical metrics about fraud patterns and claim characteristics.
              </p>
              
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold text-blue-400">Average Fraudulent Claim</h4>
                    <span className="text-green-400 font-medium">$60.3K</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold text-blue-400">Average Non-Fraudulent Claim</h4>
                    <span className="text-yellow-400 font-medium">$50.3K</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold text-blue-400">Total Claim Value</h4>
                    <span className="text-blue-400 font-medium">$52.8M</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold text-blue-400">High School Education Claims</h4>
                    <span className="text-purple-400 font-medium">$8.4M</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-1 shadow-xl">
              <div className="bg-slate-900 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold mb-6 text-white">Key Findings</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-slate-800/60 rounded-lg">
                    <h4 className="text-blue-400 font-medium mb-2">Fraud by Claim Type</h4>
                    <p className="text-sm text-gray-300">Most frauds occur in multi-vehicle collisions and single vehicle crashes, while parked vehicle and vehicle theft cases show lower fraud rates.</p>
                  </div>
                  
                  <div className="p-4 bg-slate-800/60 rounded-lg">
                    <h4 className="text-blue-400 font-medium mb-2">Demographic Analysis</h4>
                    <p className="text-sm text-gray-300">Fraud is more prevalent among men (537 cases) than women (463 cases), with 35-44 age group showing highest fraud rates.</p>
                  </div>
                  
                  <div className="p-4 bg-slate-800/60 rounded-lg">
                    <h4 className="text-blue-400 font-medium mb-2">Fraud by Vehicle Age</h4>
                    <p className="text-sm text-gray-300">Vehicles between 10-20 years old show highest collision rates, with relatively stable frequency across various vehicle ages.</p>
                  </div>
                  
                  <div className="p-4 bg-slate-800/60 rounded-lg">
                    <h4 className="text-blue-400 font-medium mb-2">Temporal Patterns</h4>
                    <p className="text-sm text-gray-300">Incidents peak in early morning (1 AM) and evening (8 PM), with days 1 and 20 of the month showing highest accident rates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Advanced Data View Section */}
<div id='viewdata' className="bg-gradient-to-b from-slate-800 to-slate-900 py-16 pt-11">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="animate-on-scroll">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-3xl font-bold text-white">Insurance Claims Explorer</h3>
        <a href="#dashboard" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition-all duration-200 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Dashboard
        </a>
      </div>
      
      <p className="max-w-3xl text-lg text-gray-300 mb-8">
        Browse our comprehensive dataset containing 1,000 insurance claims with detailed analytics and insights.
      </p>
      
      <div className="bg-slate-800 rounded-xl shadow-xl overflow-hidden mb-10 border border-slate-700">
        {/* Data Controls */}
        <div className="p-4 bg-slate-800 border-b border-slate-700 flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex items-center w-full lg:w-auto">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Search claims..." 
                className="bg-slate-900 text-white pl-10 pr-4 py-2 border border-slate-700 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 w-full lg:w-auto justify-end">
            <select className="bg-slate-900 text-white px-3 py-2 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Claim Status</option>
              <option value="approved">Approved</option>
              <option value="denied">Denied</option>
              <option value="pending">Pending</option>
            </select>
            
            <select className="bg-slate-900 text-white px-3 py-2 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Claim Type</option>
              <option value="auto">Auto</option>
              <option value="health">Health</option>
              <option value="property">Property</option>
            </select>
            
            <select className="bg-slate-900 text-white px-3 py-2 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="10">10 per page</option>
              <option value="25">25 per page</option>
              <option value="50">50 per page</option>
              <option value="100">100 per page</option>
            </select>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter
            </button>
            
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-200" onClick={() => setShowDataTable(!showDataTable)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              {showDataTable ? 'Hide Data' : 'View Data'}
            </button>
          </div>
        </div>
        
        {/* Data Visualization Summary */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-900 border-b border-slate-700">
  <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
    <div className="text-blue-400 text-sm font-medium mb-1">Total Claims</div>
    <div className="text-white text-2xl font-bold">1,000</div>
    <div className="text-red-400 text-xs mt-2 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
      Total value: $52.8M
    </div>
  </div>
  <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
    <div className="text-blue-400 text-sm font-medium mb-1">Fraudulent Claims</div>
    <div className="text-white text-2xl font-bold">247</div>
    <div className="text-red-400 text-xs mt-2 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
      24.7% fraud rate
    </div>
  </div>
  <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
    <div className="text-blue-400 text-sm font-medium mb-1">Vehicle Claims</div>
    <div className="text-white text-2xl font-bold">$37.9M</div>
    <div className="text-green-400 text-xs mt-2 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
      71.8% of total claims
    </div>
  </div>
  <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
    <div className="text-blue-400 text-sm font-medium mb-1">Avg. Fraudulent Claim</div>
    <div className="text-white text-2xl font-bold">$60.3K</div>
    <div className="text-red-400 text-xs mt-2 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
      vs $50.3K non-fraud
    </div>
  </div>
</div>
        
        {/* Data Table */}
        {showDataTable && (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-900">
                  {insuranceData.length > 0 && Object.keys(insuranceData[0]).map((header, index) => (
                    <th key={index} className="py-3 px-4 text-left text-xs font-medium text-blue-400 uppercase tracking-wider border-b border-slate-700 cursor-pointer hover:bg-slate-800">
                      <div className="flex items-center">
                        {header}
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>
                      </div>
                    </th>
                  ))}
                  <th className="py-3 px-4 text-right text-xs font-medium text-blue-400 uppercase tracking-wider border-b border-slate-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {insuranceData.map((row, rowIndex) => (
                  <tr key={rowIndex} className={`hover:bg-slate-700 transition-colors ${rowIndex % 2 === 0 ? 'bg-slate-800/50' : 'bg-slate-800/30'}`}>
                    {Object.keys(row).map((key, cellIndex) => (
                      <td key={cellIndex} className="py-3 px-4 text-sm text-gray-300 border-b border-slate-700">
                        {row[key]}
                      </td>
                    ))}
                    <td className="py-2 px-4 text-sm text-gray-300 border-b border-slate-700 text-right">
                      <button className="text-blue-400 hover:text-blue-300 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="text-emerald-400 hover:text-emerald-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {insuranceData.length === 0 && (
              <div className="text-center py-16 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <p className="text-xl font-medium">No data available</p>
                <p className="mt-2">Please ensure the CSV file is available at /public/insurance_data.csv</p>
              </div>
            )}
          </div>
        )}
        
        {/* Pagination */}
        <div className="bg-slate-800 border-t border-slate-700 px-4 py-3 flex items-center justify-between">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="relative inline-flex items-center px-4 py-2 border border-slate-700 text-sm font-medium rounded-md text-gray-300 bg-slate-900 hover:bg-slate-700">
              Previous
            </button>
            <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-slate-700 text-sm font-medium rounded-md text-gray-300 bg-slate-900 hover:bg-slate-700">
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-400">
                Showing <span className="font-medium text-gray-300">1</span> to <span className="font-medium text-gray-300">10</span> of <span className="font-medium text-gray-300">1,000</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-700 bg-slate-900 text-sm font-medium text-gray-300 hover:bg-slate-700">
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-slate-700 bg-slate-800 text-sm font-medium text-blue-400 hover:bg-slate-700">1</button>
                <button className="relative inline-flex items-center px-4 py-2 border border-slate-700 bg-slate-900 text-sm font-medium text-gray-300 hover:bg-slate-700">2</button>
                <button className="relative inline-flex items-center px-4 py-2 border border-slate-700 bg-slate-900 text-sm font-medium text-gray-300 hover:bg-slate-700">3</button>
                <span className="relative inline-flex items-center px-4 py-2 border border-slate-700 bg-slate-900 text-sm font-medium text-gray-300">...</span>
                <button className="relative inline-flex items-center px-4 py-2 border border-slate-700 bg-slate-900 text-sm font-medium text-gray-300 hover:bg-slate-700">100</button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-700 bg-slate-900 text-sm font-medium text-gray-300 hover:bg-slate-700">
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      {/* Export Options */}
      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Export to PDF
        </button>
        <button className="bg-emerald-700 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Export to Excel
        </button>
        <button className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download CSV
        </button>
      </div>
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
      `}</style>
    </div>
  );
};

export default Dashboard;