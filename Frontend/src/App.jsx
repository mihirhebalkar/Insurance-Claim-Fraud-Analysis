import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Login from './components/Login';
import AboutPage from './components/AboutPage';
import Analytics from './components/Analytics';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = () => {
      const authStatus = localStorage.getItem('isAuthenticated');
      if (authStatus === 'true') {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };

    // Simulate a slight delay to check auth status
    setTimeout(checkAuth, 500);
  }, []);

  const handleLogin = () => {
    // Store authentication status in localStorage
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Remove authentication status
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-900">
        <div className="animate-pulse text-blue-400 text-lg">Loading...</div>
      </div>
    );
  }

  // If not authenticated, show login page
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  // If authenticated, show the main application
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="stars-container fixed inset-0 overflow-hidden pointer-events-none z-0"></div>
      <Navbar onLogout={handleLogout} />
      <Hero />
      <AboutPage />
      <Dashboard />
      <Analytics />
      <Footer />
    </div>
  );
}

export default App;