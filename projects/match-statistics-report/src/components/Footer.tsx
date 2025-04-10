
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-brand-gray">
              &copy; {new Date().getFullYear()} Match Statistics. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-brand-blue hover:text-brand-darkBlue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-brand-blue hover:text-brand-darkBlue transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-brand-blue hover:text-brand-darkBlue transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
