import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 z-100">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <span className="text-blue-400 font-bold">Claim Wise</span>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Insurance Analytics Project. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;