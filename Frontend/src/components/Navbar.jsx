import React, { useState, useEffect } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { Menu, X, Bell, Search, User, ChevronDown, LogOut } from 'lucide-react';

const Navbar = ({ onLogout }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  
  // Generate mini chart data
  const generateChartData = () => {
    return Array(10).fill().map((_, i) => ({
      name: i.toString(),
      value: Math.floor(Math.random() * 40) + 30
    }));
  };
  
  const chartData = generateChartData();
  
  // Navigation items with icons
  const navItems = [
    { name: 'Home', href: '#hero', icon: null },
    { name: 'About', href: '#about', icon: null },
    { name: 'Dashboard', href: '#dashboard', icon: null },
    { name: 'View Data', href: '#viewdata', icon: null },
    { name: 'Analytics', href: '#analytics', icon: null },
  ];    

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ['hero', 'dashboard', 'analytics', 'reports', 'about'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownOpen && !event.target.closest('.profile-dropdown')) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [profileDropdownOpen]);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/90 backdrop-blur-md shadow-lg shadow-blue-900/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section with animated effect */}
            <div className="flex items-center space-x-2 group">
              <div className="h-8 w-8 relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="absolute inset-0 w-full h-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#ffffff" 
                        strokeWidth={2} 
                        dot={false} 
                        isAnimationActive={true}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                <span className="text-blue-400">Claim</span>Wise
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </div>

            {/* Main Navigation - Desktop */}
            <div className="hidden md:flex items-center space-x-1">
              <div className="mr-4 relative">
                <div className="flex items-center bg-slate-800/50 border border-slate-700/50 rounded-lg py-1.5 pl-3 pr-10 text-sm text-gray-300">
                  <Search size={16} className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent border-none focus:ring-0 focus:outline-none w-32 text-gray-300"
                  />
                </div>
              </div>
              
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center ${
                    activeSection === item.href.substring(1)
                      ? 'text-blue-400 bg-slate-800/50'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-slate-800/30'
                  }`}
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full transform -translate-y-1"></span>
                  )}
                </a>
              ))}
              
              <div className="flex space-x-1 ml-4 items-center">
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-800/50 text-gray-300 transition-colors duration-200 relative">
                  <Bell size={18} />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-blue-500"></span>
                </button>
                
                <div className="profile-dropdown relative">
                  <div 
                    className="flex items-center ml-2 text-gray-300 hover:text-white cursor-pointer"
                    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-medium">
                      AD
                    </div>
                    <ChevronDown size={14} className={`ml-1 transition-transform duration-200 ${profileDropdownOpen ? 'transform rotate-180' : ''}`} />
                  </div>
                  
                  {/* Profile dropdown */}
                  {profileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 py-2 bg-slate-800 border border-slate-700 rounded-md shadow-lg z-50">
                      <div className="px-4 py-2 border-b border-slate-700">
                        <p className="text-sm font-medium text-white">Admin User</p>
                        <p className="text-xs text-slate-400">admin@example.com</p>
                      </div>
                      <a href="#profile" className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white">
                        Your Profile
                      </a>
                      <a href="#settings" className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white">
                        Settings
                      </a>
                      <button 
                        onClick={onLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-slate-700 hover:text-red-300 flex items-center"
                      >
                        <LogOut size={14} className="mr-2" />
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-800/50 focus:outline-none"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="bg-slate-900/95 backdrop-blur-md shadow-lg px-2 pt-2 pb-3 space-y-1 border-t border-slate-800">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.href.substring(1)
                    ? 'text-blue-400 bg-slate-800/70'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-slate-800/50'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            <div className="mt-4 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-medium">
                    AD
                  </div>
                  <span className="ml-3 text-gray-300">Admin</span>
                </div>
                <button 
                  onClick={onLogout}
                  className="p-2 rounded-md text-red-400 hover:text-red-300 hover:bg-slate-800"
                >
                  <LogOut size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Progressive scroll indicator */}
      <div className="fixed top-0 left-0 w-full h-0.5 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
          style={{ 
            width: `${(document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100}%`,
            transition: 'width 0.1s' 
          }}
        />
      </div>
    </>
  );
};

export default Navbar;