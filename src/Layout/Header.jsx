import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white text-2xl font-bold ml-0 ">My MOVIE</span>
                            
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink exact to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Lịch Chiếu
                </NavLink>
                <NavLink to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Phim
                </NavLink>
                <NavLink to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Hệ Thống Rạp
                </NavLink>
                <NavLink to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Về Chúng Tôi
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex">
            <input type="text" placeholder="Tìm kiếm" className="border border-gray-300 rounded-l px-4 py-2 w-64" />
            <button className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Tìm kiếm
            </button>
          </div>

          <div className="flex items-center">
            <button className="ml-4 bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium">Login</button>
            <button className="ml-4 bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium">Register</button>
          </div>
         
        </div>
      </div>
    </nav>
   
  );
};

export default Header;