import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div classname="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white text-2xl font-bold ml-0" >
              <NavLink exact to="/">
                My MOVIE
              </NavLink>

            </span>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink
                  exact
                  to="/lich"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Lịch Chiếu
                </NavLink>
                <NavLink
                  to="/phim"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Phim
                </NavLink>
                <NavLink
                  to="/rap"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Hệ Thống Rạp
                </NavLink>
                <NavLink
                  to="/vechungtoi"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Về Chúng Tôi
                </NavLink>
                <div className="flex items-center">
                  <NavLink
                    to="./Login"
                    className="ml-4 bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    <i className="fas fa-user-circle"></i>
                  </NavLink>
                  <NavLink
                    to="./dang-ki"
                    className="ml-4 bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    <i className="fas fa-user-plus"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium float-right"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            <input
              type="text"
              placeholder="Tìm kiếm"
              className="border border-gray-300 rounded-l px-4 py-2 w-40 sm:w-64"
            />
            <button className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-r text-sm font-medium">
              Tìm kiếm
            </button>
          </div>


        </div>
      </div>


      {isMenuOpen && (
        <div className="md:hidden ">
          <div className="ml-10 flex flex-col space-y-2">
            <NavLink
              exact
              to="/lich"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={toggleMenu}
            >
              Lịch Chiếu
            </NavLink>
            <NavLink
              to="/phim"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={toggleMenu}
            >
              Phim
            </NavLink>
            <NavLink
              to="/rap"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={toggleMenu}
            >
              Hệ Thống Rạp
            </NavLink>
            <NavLink
              to="/vechungtoi"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={toggleMenu}
            >
              Về Chúng Tôi
            </NavLink>
            <NavLink
              to="./Login"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={toggleMenu}                  >
              <i className="fas fa-user-circle"></i>
            </NavLink>
            <NavLink
              to="./dang-ki"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={toggleMenu}                  >
              <i className="fas fa-user-plus"></i>
            </NavLink>
          </div>
        </div>

      )}
    </nav>
  );
};

export default Header;