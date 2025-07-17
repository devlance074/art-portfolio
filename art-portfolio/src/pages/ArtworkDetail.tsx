import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { artworks } from '../data/artworks';

const ArtworkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isDarkMode } = useTheme();
  const artwork = artworks.find(art => art.id === id);

  if (!artwork) {
    return (
      <div className="py-20 px-4 max-w-7xl mx-auto text-center">
        <h1 className={`text-2xl font-bold ${
          isDarkMode ? 'text-white' : 'text-stone-900'
        }`}>
          Artwork not found
        </h1>
        <Link
          to="/gallery"
          className={`inline-flex items-center mt-4 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-800 text-green-400 hover:bg-gray-700' 
              : 'bg-stone-100 text-green-600 hover:bg-stone-200'
          }`}
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <Link
          to="/gallery"
          className={`inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-800 text-green-400 hover:bg-gray-700' 
              : 'bg-stone-100 text-green-600 hover:bg-stone-200'
          } transform hover:scale-105`}
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Gallery
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="relative">
          <img
            src={artwork.image}
            alt={artwork.title}
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>

        <div className="space-y-8">
          <div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-stone-900'
            }`}>
              {artwork.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center">
                <Palette className={`h-5 w-5 mr-2 ${
                  isDarkMode ? 'text-green-400' : 'text-green-600'
                }`} />
                <span className={`font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-stone-600'
                }`}>
                  {artwork.medium}
                </span>
              </div>
              
              <div className="flex items-center">
                <Calendar className={`h-5 w-5 mr-2 ${
                  isDarkMode ? 'text-green-400' : 'text-green-600'
                }`} />
                <span className={`font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-stone-600'
                }`}>
                  {artwork.date}
                </span>
              </div>
            </div>
          </div>

          <div className={`prose prose-lg max-w-none ${
            isDarkMode ? 'prose-invert' : ''
          }`}>
            <h2 className={`text-2xl font-semibold mb-4 ${
              isDarkMode ? 'text-white' : 'text-stone-900'
            }`}>
              About this piece
            </h2>
            <p className={`text-lg leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-stone-600'
            }`}>
              {artwork.description}
            </p>
          </div>

          <div className="pt-6 border-t border-stone-200 dark:border-gray-700">
            <p className={`text-lg ${
              isDarkMode ? 'text-gray-400' : 'text-stone-600'
            }`}>
              Interested in this piece?{' '}
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
      </div>
    </div>
  );
};

export default ArtworkDetail;