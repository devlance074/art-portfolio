# Studio - Modern Art Portfolio

A sophisticated, minimalist art portfolio web application designed to beautifully showcase a single artist's work. Built with React, TypeScript, and Tailwind CSS, featuring elegant light/dark themes and smooth animations.

![Studio Portfolio](https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=800)

## ✨ Features

- **Modern Design**: Clean, minimalist interface with focus on artwork presentation
- **Dual Themes**: Light mode (warm off-white with soft green accents) and dark mode (deep black with forest green accents)
- **Responsive Layout**: Optimized for mobile, tablet, and desktop screens
- **Smooth Animations**: Elegant hover effects, fade-ins, and transitions
- **Gallery System**: Masonry-style layout with detailed artwork pages
- **Artist Showcase**: Dedicated about page with biography and social links
- **Contact Form**: Minimalist contact form with alternative contact options
- **Navigation**: Sticky header with smooth scroll-to-top functionality

## 🚀 Live Demo

Visit the live demo: [https://studio-portfolio.netlify.app](https://studio-portfolio.netlify.app)

## 📋 Requirements

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16.0 or higher)
- **npm** (version 7.0 or higher) or **yarn** (version 1.22 or higher)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## 🛠️ Installation

Follow these steps to get the project running locally:

### 1. Clone the Repository

```bash
git clone <https://github.com/devlance074/art-portfolio.git>
cd studio-portfolio
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Start Development Server

Using npm:
```bash
npm run dev
```

Or using yarn:
```bash
yarn dev
```

### 4. Open in Browser

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout with navigation
│   └── ScrollToTop.tsx # Scroll to top functionality
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
├── data/              # Static data
│   └── artworks.ts    # Artwork information
├── pages/             # Page components
│   ├── Home.tsx       # Homepage with hero section
│   ├── Gallery.tsx    # Artwork gallery
│   ├── ArtworkDetail.tsx # Individual artwork pages
│   ├── About.tsx      # Artist biography
│   └── Contact.tsx    # Contact form
├── App.tsx            # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles
```

## 🎨 Customization

### Adding New Artworks

Edit `src/data/artworks.ts` to add new pieces:

```typescript
{
  id: 'unique-id',
  title: 'Artwork Title',
  medium: 'Oil on Canvas',
  date: '2024',
  description: 'Artwork description...',
  image: 'https://your-image-url.jpg',
  featured: true // Optional: shows on homepage
}
```

### Updating Artist Information

Modify the content in:
- `src/pages/About.tsx` - Artist biography and details
- `src/pages/Contact.tsx` - Contact information
- `src/components/Layout.tsx` - Navigation and branding

### Theme Customization

Update colors in `tailwind.config.js`:

```javascript
colors: {
  stone: { /* Light theme colors */ },
  green: { /* Accent colors */ }
}
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Building for Production

### Build the Application

Using npm:
```bash
npm run build
```

Or using yarn:
```bash
yarn build
```

### Preview Production Build

Using npm:
```bash
npm run preview
```

Or using yarn:
```bash
yarn preview
```

The built files will be in the `dist/` directory, ready for deployment.

## 🌐 Deployment

This project can be deployed to various platforms:

- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Import project from Git repository
- **GitHub Pages**: Use GitHub Actions for deployment
- **Any static hosting**: Upload the `dist/` folder contents

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📧 Support

For questions or support, please contact: **info@devlance.org**

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Thank You

Thank you for downloading and using Studio Portfolio! We hope this template helps you create a stunning showcase for artistic work.

**Help us grow the community!** 🌟

If you found this template useful, please consider sharing **[devlance.org](https://devlance.org)** with others. Your support helps us build a thriving marketplace for developers and creators worldwide.

- Share on social media
- Recommend to fellow developers
- Leave a review or feedback
- Contribute to the project

Together, we can make devlance.org the go-to destination for high-quality development resources!

---

**Built with ❤️ by the devlance.org community**

Visit [devlance.org](https://devlance.org) for more amazing templates and resources!