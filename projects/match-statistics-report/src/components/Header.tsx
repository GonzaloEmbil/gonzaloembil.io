
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-brand-darkBlue">Match Statistics Report</h1>
            <p className="text-sm text-brand-gray mt-1">Powered by Advanced Analytics</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-white">
              Share
            </Button>
            <Button className="bg-brand-blue hover:bg-brand-darkBlue text-white">
              Download
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
