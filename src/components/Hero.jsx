import React, { useEffect, useState } from 'react';
import { LineChart, Line, AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { ArrowDown, Shield, ChartBar, TrendingUp, AlertTriangle } from 'lucide-react';
import * as d3 from 'd3';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState([]);

  // Generate more realistic looking data
  const generateData = (length, baseValue, volatility) => {
    let value = baseValue;
    return Array(length).fill().map((_, i) => {
      value += (Math.random() - 0.5) * volatility;
      value = Math.max(0, Math.min(100, value));
      return {
        name: i.toString(),
        value: value
      };
    });
  };

  const mainData = generateData(50, 50, 8);
  const secondaryData = generateData(50, 30, 5);
  const tertiaryData = generateData(50, 70, 10);

  // Parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Generate initial particles
    const initialParticles = Array(30).fill().map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.2 + 0.1
    }));
    setParticles(initialParticles);

    // Show content with a slight delay for animation
    setTimeout(() => setIsVisible(true), 300);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          y: (particle.y + particle.speed) % 100,
          x: particle.x + (Math.random() - 0.5) * 0.1
        }))
      );
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  // Stat cards data with real information from insurance claims analysis
  const stats = [
    { title: "Fraud Detection", value: "24.7%", icon: <Shield size={24} />, color: "bg-blue-600" },
    { title: "Total Claims", value: "$52.8M", icon: <AlertTriangle size={24} />, color: "bg-purple-600" },
    { title: "Vehicle Claims", value: "$37.9M", icon: <TrendingUp size={24} />, color: "bg-emerald-600" },
    { title: "Total Cases", value: "1,000", icon: <ChartBar size={24} />, color: "bg-amber-600" }
  ];

  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              transform: `translateY(${scrollY * 0.2}px)`,
              transition: 'transform 0.2s ease-out'
            }}
          />
        ))}
      </div>
      
      {/* Decorative charts with better positioning and styling */}
      <div className="absolute bottom-0 left-0 w-full h-64 opacity-30 pointer-events-none">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mainData}>
            <defs>
              <linearGradient id="colorMain" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={3} fill="url(#colorMain)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="absolute top-40 right-0 w-1/3 h-96 opacity-40 pointer-events-none"
           style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={secondaryData}>
            <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="absolute top-20 left-0 w-1/4 h-64 opacity-30 pointer-events-none"
           style={{ transform: `translateY(${scrollY * -0.05}px)` }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={tertiaryData}>
            <Line type="monotone" dataKey="value" stroke="#6366F1" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Main content */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Hero Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full text-blue-300 font-medium">
            Insurance Analytics Platform
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-400">
              Insurance Claim
            </span>
            <span className="block mt-2">Fraud Data Analysis</span>
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto font-light">
            Interactive visualization of insurance data across 1,000 claims revealing insights 
            on fraud detection, claim patterns, and risk assessment across Illinois, Indiana, and Ohio.
          </p>
        </div>
        
        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className={`bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-${stat.color.split('-')[1]}-500/20`} style={{transitionDelay: `${index * 100}ms`}}>
              <div className={`${stat.color} rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                {stat.icon}
              </div>
              <div className="text-gray-300 font-medium">{stat.title}</div>
              <div className="text-3xl font-bold text-white mt-1">{stat.value}</div>
            </div>
          ))}
        </div>
        
        {/* CTA buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#dashboard" 
            className="cursor-pointer px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/30 flex items-center"
          >
            View Dashboard
            <ArrowDown size={18} className="ml-2 animate-bounce" />
          </a>
          <a 
            href="#demo" 
            className="px-8 py-4 bg-slate-800/70 backdrop-blur-sm text-white font-medium rounded-lg border border-slate-600/50 hover:bg-slate-700 transition-all duration-300"
          >
            See Analytics
          </a>
        </div>
      </div>
      
      {/* 3D-like data visualization */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-900 to-transparent z-20"></div>
    </div>
  );
}