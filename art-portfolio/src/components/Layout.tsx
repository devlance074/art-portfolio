import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-stone-50 text-stone-900'
    }`}>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gray-900/90 backdrop-blur-sm' 
          : 'bg-stone-50/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Palette className={`h-8 w-8 ${
                isDarkMode ? 'text-green-400' : 'text-green-600'
              }`} />
              <span className="text-xl font-bold">Studio</span>
            </Link>

            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? isDarkMode 
                        ? 'text-green-400' 
                        : 'text-green-600'
                      : isDarkMode 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
                      isDarkMode ? 'bg-green-400' : 'bg-green-600'
                    }`} />
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200'
                }`}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-2 rounded-md transition-colors duration-200 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200'
                }`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className={`md:hidden transition-all duration-300 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } border-t ${isDarkMode ? 'border-gray-700' : 'border-stone-200'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? isDarkMode 
                        ? 'text-green-400 bg-gray-700' 
                        : 'text-green-600 bg-stone-100'
                      : isDarkMode 
                        ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;