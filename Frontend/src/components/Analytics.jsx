import React, { useState, useEffect } from 'react';
import { AlertTriangle, TrendingUp, FileText, BarChart2, Check, AlertCircle } from 'lucide-react';

const Analytics = () => {
  const [formData, setFormData] = useState({
    months_as_customer: 400,
    age: 45,
    policy_deductable: 1000,
    policy_annual_premium: 850.50,
    umbrella_limit: 0,
    capital_gains: 0,
    capital_loss: 0,
    incident_hour_of_the_day: 14,
    number_of_vehicles_involved: 2,
    bodily_injuries: 1,
    witnesses: 2,
    total_claim_amount: 12000,
    injury_claim: 20000,
    property_claim: 3000,
    vehicle_claim: 7000,
    auto_year: 2015
  });

  const [predictionResults, setPredictionResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showHistoryTable, setShowHistoryTable] = useState(false);
  const [predictionHistory, setPredictionHistory] = useState([]);

  // Animation for elements
  useEffect(() => {
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
    
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
    
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = name === 'auto_year' || name.includes('claim') || 
                        name === 'policy_deductable' || name === 'age' || 
                        name.includes('capital') || name === 'umbrella_limit' || 
                        name === 'incident_hour_of_the_day' || 
                        name === 'number_of_vehicles_involved' || name === 'bodily_injuries' || 
                        name === 'witnesses' || name === 'months_as_customer' ? 
                        parseFloat(value) : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: parsedValue
    }));
  };

  const generateRandomPrediction = () => {
    // Generate random values for demonstration
    const clusterOptions = [0, 1, 2, 3];
    const predictedCluster = clusterOptions[Math.floor(Math.random() * clusterOptions.length)];
    const fraudProbability = (Math.random() * 100).toFixed(2);
    
    // Generate feature importance (random for now)
    const features = Object.keys(formData);
    const featureImportance = features.map(feature => ({
      feature,
      importance: Math.random().toFixed(4)
    })).sort((a, b) => b.importance - a.importance);
    
    // Generate risk indicators
    const highRiskFactors = [];
    if (parseFloat(fraudProbability) > 30) highRiskFactors.push('High claim amount');
    if (formData.incident_hour_of_the_day >= 22 || formData.incident_hour_of_the_day <= 5) highRiskFactors.push('Incident occurred during night hours');
    if (formData.number_of_vehicles_involved > 2) highRiskFactors.push('Multiple vehicles involved');
    if (formData.witnesses < 1) highRiskFactors.push('No witnesses present');
    
    return {
      cluster: predictedCluster,
      fraudProbability: fraudProbability,
      featureImportance: featureImportance.slice(0, 5),
      highRiskFactors,
      predictionTime: new Date().toISOString(),
      claimId: `CLAIM-${Math.floor(Math.random() * 1000000)}`
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const results = generateRandomPrediction();
      setPredictionResults(results);
      
      // Add to history
      setPredictionHistory(prev => [{
        ...results,
        inputData: {...formData}
      }, ...prev.slice(0, 9)]); // Keep last 10 entries
      
      setIsLoading(false);
    }, 1500);
  };

  // Determine risk level based on fraud probability
  const getRiskLevel = (probability) => {
    const prob = parseFloat(probability);
    if (prob >= 70) return { level: 'High Risk', color: 'text-red-500', bgColor: 'bg-red-500/10' };
    if (prob >= 30) return { level: 'Medium Risk', color: 'text-yellow-500', bgColor: 'bg-yellow-500/10' };
    return { level: 'Low Risk', color: 'text-green-500', bgColor: 'bg-green-500/10' };
  };

  // Dynamically get class for risk badge
  const getRiskBadgeClass = (probability) => {
    const prob = parseFloat(probability);
    if (prob >= 70) return 'bg-red-500/20 text-red-400';
    if (prob >= 30) return 'bg-yellow-500/20 text-yellow-400';
    return 'bg-green-500/20 text-green-400';
  };

  return (
    <div id="analytics" className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-20">
      {/* Analytics Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-block p-3 rounded-full bg-blue-500/10 mb-4">
            <AlertTriangle className="h-8 w-8 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">Insurance Fraud Prediction</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            Advanced analytics tool to predict potential fraud in insurance claims using machine learning algorithms and behavioral patterns.
          </p>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="animate-on-scroll">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl p-1">
              <div className="bg-slate-900 rounded-lg p-6">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-700">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">Claim Data Input</h3>
                    <p className="text-sm text-gray-400">Enter claim details to analyze fraud probability</p>
                  </div>
                  <div className="bg-blue-500/10 p-2 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Months as Customer</label>
                      <input
                        type="number"
                        name="months_as_customer"
                        value={formData.months_as_customer}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Age</label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Policy Deductible</label>
                      <input
                        type="number"
                        name="policy_deductable"
                        value={formData.policy_deductable}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Annual Premium</label>
                      <input
                        type="number"
                        name="policy_annual_premium"
                        value={formData.policy_annual_premium}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        step="0.01"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Umbrella Limit</label>
                      <input
                        type="number"
                        name="umbrella_limit"
                        value={formData.umbrella_limit}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Capital Gains</label>
                      <input
                        type="number"
                        name="capital_gains"
                        value={formData.capital_gains}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Capital Loss</label>
                      <input
                        type="number"
                        name="capital_loss"
                        value={formData.capital_loss}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Incident Hour</label>
                      <input
                        type="number"
                        name="incident_hour_of_the_day"
                        value={formData.incident_hour_of_the_day}
                        onChange={handleInputChange}
                        min="0"
                        max="23"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Vehicles Involved</label>
                      <input
                        type="number"
                        name="number_of_vehicles_involved"
                        value={formData.number_of_vehicles_involved}
                        onChange={handleInputChange}
                        min="1"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Bodily Injuries</label>
                      <input
                        type="number"
                        name="bodily_injuries"
                        value={formData.bodily_injuries}
                        onChange={handleInputChange}
                        min="0"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Witnesses</label>
                      <input
                        type="number"
                        name="witnesses"
                        value={formData.witnesses}
                        onChange={handleInputChange}
                        min="0"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Total Claim Amount</label>
                      <input
                        type="number"
                        name="total_claim_amount"
                        value={formData.total_claim_amount}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Injury Claim</label>
                      <input
                        type="number"
                        name="injury_claim"
                        value={formData.injury_claim}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Property Claim</label>
                      <input
                        type="number"
                        name="property_claim"
                        value={formData.property_claim}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Vehicle Claim</label>
                      <input
                        type="number"
                        name="vehicle_claim"
                        value={formData.vehicle_claim}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Vehicle Year</label>
                      <input
                        type="number"
                        name="auto_year"
                        value={formData.auto_year}
                        onChange={handleInputChange}
                        min="1980"
                        max={new Date().getFullYear()}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition-all duration-200 flex items-center"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>Analyze Claim</>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* Results and Explanation */}
          <div className="animate-on-scroll">
            {predictionResults ? (
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl p-1 h-full">
                <div className="bg-slate-900 rounded-lg p-6 h-full">
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-700">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-400">Prediction Results</h3>
                      <p className="text-sm text-gray-400">Claim ID: {predictionResults.claimId}</p>
                    </div>
                    <span className={`px-3 py-1 ${getRiskBadgeClass(predictionResults.fraudProbability)} text-xs font-medium rounded-full`}>
                      {getRiskLevel(predictionResults.fraudProbability).level}
                    </span>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h4 className="text-lg font-medium text-white">Fraud Probability</h4>
                        <p className="text-sm text-gray-400">Likelihood of fraudulent activity</p>
                      </div>
                      <div className="text-2xl font-bold text-white">{predictionResults.fraudProbability}%</div>
                    </div>
                    
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${parseFloat(predictionResults.fraudProbability) >= 70 ? 'bg-gradient-to-r from-red-500 to-orange-500' : parseFloat(predictionResults.fraudProbability) >= 30 ? 'bg-gradient-to-r from-yellow-500 to-orange-400' : 'bg-gradient-to-r from-green-500 to-emerald-500'}`}
                        style={{width: `${predictionResults.fraudProbability}%`}}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-medium text-white mb-3">Cluster Analysis</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                        <div className="text-sm text-gray-400 mb-1">Predicted Cluster</div>
                        <div className="text-xl font-bold text-white">{predictionResults.cluster}</div>
                      </div>
                      <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                        <div className="text-sm text-gray-400 mb-1">Confidence Score</div>
                        <div className="text-xl font-bold text-white">{(85 + Math.random() * 10).toFixed(1)}%</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-medium text-white mb-3">Risk Indicators</h4>
                    <div className="space-y-2">
                      {predictionResults.highRiskFactors.length > 0 ? predictionResults.highRiskFactors.map((factor, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <AlertCircle className="h-4 w-4 text-red-400 mr-2" />
                          <span>{factor}</span>
                        </div>
                      )) : (
                        <div className="flex items-center text-sm text-gray-300">
                          <Check className="h-4 w-4 text-green-400 mr-2" />
                          <span>No significant risk factors identified</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">Feature Importance</h4>
                    <div className="space-y-3">
                      {predictionResults.featureImportance.map((feature, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-300">{feature.feature.replace(/_/g, ' ')}</span>
                            <span className="text-sm text-blue-400">{(feature.importance * 100).toFixed(2)}%</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" 
                              style={{width: `${feature.importance * 100}%`}}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl p-1 h-full">
                <div className="bg-slate-900 rounded-lg p-6 flex flex-col h-full">
                  <div className="flex justify-center items-center flex-col flex-grow text-center">
                    <div className="p-4 bg-blue-500/10 rounded-full mb-4">
                      <BarChart2 className="h-12 w-12 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">No Analysis Results Yet</h3>
                    <p className="text-gray-400 mb-6">Fill in the claim data and click "Analyze Claim" to get fraud prediction results.</p>
                    <div className="p-8 w-full bg-slate-800/50 rounded-lg border border-dashed border-slate-700 mb-4">
                      <div className="space-y-4">
                        <div className="animate-pulse bg-slate-700 h-6 rounded w-3/4 mx-auto"></div>
                        <div className="animate-pulse bg-slate-700 h-4 rounded w-1/2 mx-auto"></div>
                        <div className="h-4 w-full bg-slate-700 rounded-full my-4">
                          <div className="bg-slate-600 h-4 rounded-full w-0"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="animate-pulse bg-slate-700 h-12 rounded"></div>
                          <div className="animate-pulse bg-slate-700 h-12 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Prediction History Section */}
      <div className="bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4 text-white">Prediction History</h3>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Review your recent fraud analysis history and track patterns over time
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-1 shadow-xl animate-on-scroll">
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold text-white">Recent Predictions</h4>
                <button 
                  className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded-lg text-sm transition-all duration-200 flex items-center"
                  onClick={() => setShowHistoryTable(!showHistoryTable)}
                >
                  {showHistoryTable ? 'Hide Details' : 'View Details'}
                </button>
              </div>
              
              {showHistoryTable && predictionHistory.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-800">
                        <th className="py-3 px-4 text-left text-xs font-medium text-blue-400 uppercase tracking-wider border-b border-slate-700">Claim ID</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-blue-400 uppercase tracking-wider border-b border-slate-700">Date</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-blue-400 uppercase tracking-wider border-b border-slate-700">Cluster</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-blue-400 uppercase tracking-wider border-b border-slate-700">Fraud Probability</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-blue-400 uppercase tracking-wider border-b border-slate-700">Risk Level</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-blue-400 uppercase tracking-wider border-b border-slate-700">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {predictionHistory.map((history, index) => (
                        <tr key={index} className={`hover:bg-slate-800 transition-colors ${index % 2 === 0 ? 'bg-slate-800/50' : 'bg-slate-800/30'}`}>
                          <td className="py-3 px-4 text-sm text-gray-300 border-b border-slate-700">{history.claimId}</td>
                          <td className="py-3 px-4 text-sm text-gray-300 border-b border-slate-700">
                            {new Date(history.predictionTime).toLocaleDateString()} 
                            {" "}
                            {new Date(history.predictionTime).toLocaleTimeString()}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-300 border-b border-slate-700">{history.cluster}</td>
                          <td className="py-3 px-4 text-sm text-gray-300 border-b border-slate-700">{history.fraudProbability}%</td>
                          <td className="py-3 px-4 text-sm border-b border-slate-700">
                            <span className={`px-2 py-1 ${getRiskBadgeClass(history.fraudProbability)} text-xs font-medium rounded-full`}>
                              {getRiskLevel(history.fraudProbability).level}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-300 border-b border-slate-700">
                            <button className="text-blue-400 hover:text-blue-300">
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : showHistoryTable ? (
                <div className="text-center py-8 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <p>No prediction history available yet. Run your first analysis to see results here.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {predictionHistory.length > 0 ? predictionHistory.slice(0, 4).map((history, index) => (
                    <div key={index} className={`p-4 rounded-lg border border-slate-700 ${getRiskLevel(history.fraudProbability).bgColor}`}>
                      <div className="flex justify-between items-start mb-2">
                        <div className="text-xs text-gray-400">Claim ID</div>
                        <div className={`text-xs font-medium ${getRiskLevel(history.fraudProbability).color}`}>
                          {getRiskLevel(history.fraudProbability).level}
                        </div>
                      </div>
                      <div className="text-sm font-medium text-white mb-3">{history.claimId}</div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-400">{new Date(history.predictionTime).toLocaleDateString()}</div>
                        <div className="text-sm font-semibold text-white">{history.fraudProbability}%</div>
                      </div>
                    </div>
                  )) : (
                    <div className="col-span-4 text-center py-8 text-gray-400">
                      <p>No prediction history available yet. Run your first analysis to see results here.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">
          <div className="bg-gradient-to-br from-slate-800 to-slate-800/70 rounded-xl shadow-lg p-1">
            <div className="bg-slate-900 rounded-lg p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-lg font-medium text-gray-200">Total Claims</h5>
                <div className="bg-blue-500/10 p-2 rounded-lg">
                  <FileText className="h-5 w-5 text-blue-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {predictionHistory.length === 0 ? '0' : predictionHistory.length}
              </div>
              <div className="text-sm text-gray-400">Analyzed claims in the system</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800 to-slate-800/70 rounded-xl shadow-lg p-1">
            <div className="bg-slate-900 rounded-lg p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-lg font-medium text-gray-200">Average Fraud Risk</h5>
                <div className="bg-yellow-500/10 p-2 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-yellow-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {predictionHistory.length === 0 ? '0.00' : 
                  (predictionHistory.reduce((acc, curr) => acc + parseFloat(curr.fraudProbability), 0) / predictionHistory.length).toFixed(2)}%
              </div>
              <div className="text-sm text-gray-400">Average fraud probability across claims</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800 to-slate-800/70 rounded-xl shadow-lg p-1">
            <div className="bg-slate-900 rounded-lg p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-lg font-medium text-gray-200">High Risk Claims</h5>
                <div className="bg-red-500/10 p-2 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-red-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {predictionHistory.filter(item => parseFloat(item.fraudProbability) >= 70).length}
              </div>
              <div className="text-sm text-gray-400">Claims with high fraud probability</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800 to-slate-800/70 rounded-xl shadow-lg p-1">
            <div className="bg-slate-900 rounded-lg p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-lg font-medium text-gray-200">Safe Claims</h5>
                <div className="bg-green-500/10 p-2 rounded-lg">
                  <Check className="h-5 w-5 text-green-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {predictionHistory.filter(item => parseFloat(item.fraudProbability) < 30).length}
              </div>
              <div className="text-sm text-gray-400">Claims with low fraud probability</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Resources Section */}
      <div className="bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4 text-white">Fraud Detection Resources</h3>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Learn more about our fraud detection systems and methodology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-1">
              <div className="bg-slate-900 rounded-lg p-6 border border-slate-700/50 h-full">
                <div className="bg-blue-500/10 p-3 rounded-lg inline-block mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Model Documentation</h4>
                <p className="text-gray-300 mb-4">
                  Detailed information about our fraud detection models, algorithms, and techniques used to analyze claim data.
                </p>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                  Read Documentation
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-1">
              <div className="bg-slate-900 rounded-lg p-6 border border-slate-700/50 h-full">
                <div className="bg-blue-500/10 p-3 rounded-lg inline-block mb-4">
                  <BarChart2 className="h-6 w-6 text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Statistical Analysis</h4>
                <p className="text-gray-300 mb-4">
                  Statistical insights about different claim types, common fraud patterns, and industry benchmarks.
                </p>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                  View Analysis
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-1">
              <div className="bg-slate-900 rounded-lg p-6 border border-slate-700/50 h-full">
                <div className="bg-blue-500/10 p-3 rounded-lg inline-block mb-4">
                  <FileText className="h-6 w-6 text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Best Practices</h4>
                <p className="text-gray-300 mb-4">
                  Guidelines and recommendations for interpreting prediction results and following up on high-risk claims.
                </p>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                  Read Guidelines
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-slate-900 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Insurance Fraud Analytics System. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            This is a demonstration system. Predictions are randomly generated for UI demonstration purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;