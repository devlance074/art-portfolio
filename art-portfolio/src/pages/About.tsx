import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Twitter, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Artist portrait"
            className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
          />
          <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full ${
            isDarkMode ? 'bg-green-400' : 'bg-green-600'
          } opacity-20`} />
        </div>

        <div className="space-y-8">
          <div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-stone-900'
            }`}>
              About the Artist
            </h1>
            <h2 className={`text-2xl font-semibold mb-6 ${
              isDarkMode ? 'text-green-400' : 'text-green-600'
            }`}>
              Alexandra Stone
            </h2>
          </div>

          <div className={`prose prose-lg max-w-none ${
            isDarkMode ? 'prose-invert' : ''
          }`}>
            <p className={`text-lg leading-relaxed mb-6 ${
              isDarkMode ? 'text-gray-300' : 'text-stone-600'
            }`}>
              Born in 1985 in the vibrant city of San Francisco, Alexandra Stone has spent over a decade exploring the intersection of traditional artistic techniques with contemporary themes. Her work spans multiple mediums, from oil painting to digital art, always seeking to capture the essence of human emotion and natural beauty.
            </p>
            
            <p className={`text-lg leading-relaxed mb-6 ${
              isDarkMode ? 'text-gray-300' : 'text-stone-600'
            }`}>
              After completing her MFA at the California College of the Arts, Alexandra has exhibited her work in galleries across the United States and internationally. Her pieces are held in private collections worldwide and have been featured in numerous art publications.
            </p>
            
            <p className={`text-lg leading-relaxed mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-stone-600'
            }`}>
              "Art is not just about creating something beautiful," Alexandra says. "It's about creating a dialogue between the artist, the artwork, and the viewer. Every piece tells a story, and I'm honored to be the storyteller."
            </p>
          </div>

          <div className="space-y-6">
            <h3 className={`text-xl font-semibold ${
              isDarkMode ? 'text-white' : 'text-stone-900'
            }`}>
              Connect with Alexandra
            </h3>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:alexandra@studioexample.com"
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800 text-green-400 hover:bg-gray-700' 
                    : 'bg-stone-100 text-green-600 hover:bg-stone-200'
                } transform hover:scale-105`}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
              
              <a
                href="https://instagram.com/alexandrastone"
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800 text-green-400 hover:bg-gray-700' 
                    : 'bg-stone-100 text-green-600 hover:bg-stone-200'
                } transform hover:scale-105`}
              >
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </a>
              
              <a
                href="https://twitter.com/alexandrastone"
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800 text-green-400 hover:bg-gray-700' 
                    : 'bg-stone-100 text-green-600 hover:bg-stone-200'
                } transform hover:scale-105`}
              >
                <Twitter className="mr-2 h-5 w-5" />
                Twitter
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-200 dark:border-gray-700">
            <p className={`text-lg ${
              isDarkMode ? 'text-gray-400' : 'text-stone-600'
            }`}>
              Interested in commissioning a piece or collaborating?{' '}
              <Link
                to="/contact"
                className={`font-semibold transition-colors duration-200 ${
                  isDarkMode 
                    ? 'text-green-400 hover:text-green-300' 
                    : 'text-green-600 hover:text-green-700'
                }`}
              >
                Let's talk
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;