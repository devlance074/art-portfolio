import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { artworks } from '../data/artworks';

const Home: React.FC = () => {
  const { isDarkMode } = useTheme();
  const featuredArtworks = artworks.filter(art => art.featured).slice(0, 3);

  const scrollToGallery = () => {
    const element = document.getElementById('featured-works');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight ${
            isDarkMode ? 'text-white' : 'text-stone-900'
          }`}>
            Art that speaks<br />
            <span className={`${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
              to the soul
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-stone-600'
          }`}>
            Exploring the intersection of emotion, color, and form through contemporary artistic expression
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/gallery"
              className={`group px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-green-400 text-gray-900 hover:bg-green-300' 
                  : 'bg-green-600 text-white hover:bg-green-700'
              } transform hover:scale-105 shadow-lg`}
            >
              View Gallery
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button
              onClick={scrollToGallery}
              className={`px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 ${
                isDarkMode 
                  ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900' 
                  : 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
              } transform hover:scale-105`}
            >
              Explore Work
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className={`h-6 w-6 ${
            isDarkMode ? 'text-green-400' : 'text-green-600'
          }`} />
        </div>
      </section>

      {/* Featured Works Section */}
      <section id="featured-works" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-stone-900'
          }`}>
            Featured Works
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-stone-600'
          }`}>
            A curated selection of my most recent and impactful pieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtworks.map((artwork, index) => (
            <Link
              key={artwork.id}
              to={`/artwork/${artwork.id}`}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-w-4 aspect-h-5 overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-t ${
                isDarkMode 
                  ? 'from-gray-900/90 via-gray-900/50 to-transparent' 
                  : 'from-stone-900/90 via-stone-900/50 to-transparent'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">{artwork.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">{artwork.medium} • {artwork.date}</p>
                  <p className="text-gray-400 text-sm line-clamp-2">{artwork.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className={`inline-flex items-center px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800 text-green-400 hover:bg-gray-700' 
                : 'bg-stone-100 text-green-600 hover:bg-stone-200'
            } transform hover:scale-105`}
          >
            View All Works
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;