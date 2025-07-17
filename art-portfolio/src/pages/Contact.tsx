import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Thank you for your message! I\'ll get back to you soon.');
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
          isDarkMode ? 'text-white' : 'text-stone-900'
        }`}>
          Get in Touch
        </h1>
        <p className={`text-xl max-w-2xl mx-auto ${
          isDarkMode ? 'text-gray-300' : 'text-stone-600'
        }`}>
          I'd love to hear from you. Whether you're interested in my work, have a commission in mind, or just want to say hello.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h2 className={`text-2xl font-semibold mb-6 ${
              isDarkMode ? 'text-white' : 'text-stone-900'
            }`}>
              Let's Connect
            </h2>
            <p className={`text-lg leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-stone-600'
            }`}>
              I'm always excited to discuss new projects, collaborations, or simply chat about art. Feel free to reach out through any of the channels below.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center">
              <div className={`p-3 rounded-full mr-4 ${
                isDarkMode ? 'bg-gray-800' : 'bg-stone-100'
              }`}>
                <Mail className={`h-6 w-6 ${
                  isDarkMode ? 'text-green-400' : 'text-green-600'
                }`} />
              </div>
              <div>
                <p className={`font-semibold ${
                  isDarkMode ? 'text-white' : 'text-stone-900'
                }`}>
                  Email
                </p>
                <p className={`${
                  isDarkMode ? 'text-gray-300' : 'text-stone-600'
                }`}>
                  alexandra@studioexample.com
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className={`p-3 rounded-full mr-4 ${
                isDarkMode ? 'bg-gray-800' : 'bg-stone-100'
              }`}>
                <Phone className={`h-6 w-6 ${
                  isDarkMode ? 'text-green-400' : 'text-green-600'
                }`} />
              </div>
              <div>
                <p className={`font-semibold ${
                  isDarkMode ? 'text-white' : 'text-stone-900'
                }`}>
                  Phone
                </p>
                <p className={`${
                  isDarkMode ? 'text-gray-300' : 'text-stone-600'
                }`}>
                  +1 (555) 123-4567
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className={`p-3 rounded-full mr-4 ${
                isDarkMode ? 'bg-gray-800' : 'bg-stone-100'
              }`}>
                <MapPin className={`h-6 w-6 ${
                  isDarkMode ? 'text-green-400' : 'text-green-600'
                }`} />
              </div>
              <div>
                <p className={`font-semibold ${
                  isDarkMode ? 'text-white' : 'text-stone-900'
                }`}>
                  Studio
                </p>
                <p className={`${
                  isDarkMode ? 'text-gray-300' : 'text-stone-600'
                }`}>
                  San Francisco, CA
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`p-8 rounded-2xl shadow-xl ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className={`text-2xl font-semibold mb-6 ${
            isDarkMode ? 'text-white' : 'text-stone-900'
          }`}>
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-stone-700'
              }`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white focus:border-green-400' 
                    : 'bg-stone-50 border-stone-300 text-stone-900 focus:border-green-600'
                } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
              />
            </div>

            <div>
              <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-stone-700'
              }`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white focus:border-green-400' 
                    : 'bg-stone-50 border-stone-300 text-stone-900 focus:border-green-600'
                } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
              />
            </div>

            <div>
              <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-stone-700'
              }`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-none ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white focus:border-green-400' 
                    : 'bg-stone-50 border-stone-300 text-stone-900 focus:border-green-600'
                } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-green-400 text-gray-900 hover:bg-green-300' 
                  : 'bg-green-600 text-white hover:bg-green-700'
              } transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-current border-t-transparent" />
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;