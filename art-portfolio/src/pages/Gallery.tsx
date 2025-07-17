import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { artworks } from '../data/artworks';

const Gallery: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
          isDarkMode ? 'text-white' : 'text-stone-900'
        }`}>
          Gallery
        </h1>
        <p className={`text-xl max-w-2xl mx-auto ${
          isDarkMode ? 'text-gray-300' : 'text-stone-600'
        }`}>
          A comprehensive collection of my artistic journey through various mediums and themes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {artworks.map((artwork, index) => (
          <Link
            key={artwork.id}
            to={`/artwork/${artwork.id}`}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onMouseEnter={() => setHoveredId(artwork.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{ 
              animationDelay: `${index * 0.1}s`,
              minHeight: index % 3 === 0 ? '400px' : index % 3 === 1 ? '320px' : '360px'
            }}
          >
            <div className="relative h-full overflow-hidden">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              <div className={`absolute inset-0 bg-gradient-to-t ${
                isDarkMode 
                  ? 'from-gray-900/90 via-gray-900/20 to-transparent' 
                  : 'from-stone-900/90 via-stone-900/20 to-transparent'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-lg font-semibold mb-1">{artwork.title}</h3>
                  <p className="text-gray-300 text-sm">{artwork.medium} • {artwork.date}</p>
                </div>
              </div>

              {hoveredId === artwork.id && (
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 rounded-full ${
                    isDarkMode ? 'bg-green-400' : 'bg-green-600'
                  } animate-pulse`} />
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className={`text-lg ${
          isDarkMode ? 'text-gray-400' : 'text-stone-600'
        }`}>
          Interested in a particular piece?{' '}
          <Link
            to="/contact"
            className={`font-semibold transition-colors duration-200 ${
              isDarkMode 
                ? 'text-green-400 hover:text-green-300' 
                : 'text-green-600 hover:text-green-700'
            }`}
          >
            Get in touch
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Gallery;