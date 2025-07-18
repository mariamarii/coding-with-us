import React from 'react';
import Logo from './header/Logo';

const SimpleHeader: React.FC = () => {
  return (
    <div className="relative">
      <div className="sm:flex bg-[#282837] text-white px-4 py-3 text-xs justify-end gap-4">
        <div className="flex justify-end gap-4 w-[92%] mx-auto">
          <button className="hover:opacity-80 transition-opacity text-sm">FAQs</button>
          <button className="hover:opacity-80 transition-opacity text-sm">Contact Us</button>
        </div>
      </div>

      <header className="bg-white border-none">
        <div className="mx-auto w-[90%]">
          <div className="flex items-center justify-between h-12 lg:h-14 w-full">
            <div className="flex items-center">
              <Logo />
            </div>
            <div className="ml-auto w-[90%] flex justify-between items-start">
              <div className="">
                <nav className="hidden xl:flex items-center gap-6">
                  <a href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                    Home
                  </a>
                  <a href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                    About us
                  </a>
                  <a href="/courses" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                    Courses
                  </a>
                  <a href="/universities" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                    Universities
                  </a>
                </nav>
              </div>
              
              <div className="flex items-end gap-2 flex-shrink-0">
                <a href="/login" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Login
                </a>
                <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Join Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SimpleHeader; 