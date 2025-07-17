export interface Artwork {
  id: string;
  title: string;
  medium: string;
  date: string;
  description: string;
  image: string;
  featured?: boolean;
}

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Ethereal Landscapes',
    medium: 'Oil on Canvas',
    date: '2024',
    description: 'A mesmerizing exploration of natural forms and light, this piece captures the essence of dawn breaking over rolling hills. The interplay of warm and cool tones creates a sense of movement and tranquility.',
    image: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: '2',
    title: 'Urban Symphony',
    medium: 'Mixed Media',
    date: '2024',
    description: 'An abstract interpretation of city life, combining traditional painting techniques with modern digital elements. The vertical lines represent the rhythm of urban architecture.',
    image: 'https://images.pexels.com/photos/1988681/pexels-photo-1988681.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: '3',
    title: 'Contemplation',
    medium: 'Acrylic on Canvas',
    date: '2023',
    description: 'A study in form and shadow, this portrait explores the quiet moments of human introspection. The minimalist approach emphasizes the subject\'s emotional depth.',
    image: 'https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'Ocean Memories',
    medium: 'Watercolor',
    date: '2023',
    description: 'Inspired by childhood summers at the shore, this piece captures the ephemeral nature of waves and the eternal pull of the sea. The flowing brushstrokes mirror the ocean\'s movement.',
    image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    title: 'Golden Hour',
    medium: 'Oil on Canvas',
    date: '2023',
    description: 'A celebration of light and color, this piece explores the magical quality of late afternoon sun. The warm palette evokes feelings of nostalgia and hope.',
    image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    title: 'Abstract Emotions',
    medium: 'Mixed Media',
    date: '2023',
    description: 'An exploration of human emotion through color and form. Each brushstroke represents a different feeling, creating a complex tapestry of human experience.',
    image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '7',
    title: 'Forest Whispers',
    medium: 'Acrylic on Canvas',
    date: '2022',
    description: 'A deep dive into the mysterious world of ancient forests. The layered textures and earthy tones create an immersive experience that speaks to our primal connection with nature.',
    image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '8',
    title: 'City Lights',
    medium: 'Digital Art',
    date: '2022',
    description: 'A contemporary take on urban nightlife, this piece combines traditional artistic techniques with modern digital tools to create a vibrant representation of city energy.',
    image: 'https://images.pexels.com/photos/1194775/pexels-photo-1194775.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '9',
    title: 'Serenity',
    medium: 'Watercolor',
    date: '2022',
    description: 'A peaceful meditation on stillness and calm. The soft, flowing colors create a sense of tranquility that invites the viewer to pause and reflect.',
    image: 'https://images.pexels.com/photos/1194776/pexels-photo-1194776.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '10',
    title: 'Metamorphosis',
    medium: 'Mixed Media',
    date: '2022',
    description: 'An exploration of transformation and change, this piece uses contrasting textures and colors to represent the journey from one state of being to another.',
    image: 'https://images.pexels.com/photos/1194777/pexels-photo-1194777.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '11',
    title: 'Desert Dreams',
    medium: 'Oil on Canvas',
    date: '2021',
    description: 'Inspired by the vast landscapes of the American Southwest, this piece captures the raw beauty and endless horizon of desert vistas.',
    image: 'https://images.pexels.com/photos/1194778/pexels-photo-1194778.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '12',
    title: 'Cosmic Dance',
    medium: 'Acrylic on Canvas',
    date: '2021',
    description: 'A vibrant exploration of movement and energy, this piece uses bold colors and dynamic forms to create a sense of cosmic rhythm and flow.',
    image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '13',
    title: 'Silent Conversations',
    medium: 'Charcoal on Paper',
    date: '2021',
    description: 'A study in contrast and shadow, this piece explores the unspoken communication between forms and the power of negative space.',
    image: 'https://images.pexels.com/photos/1194780/pexels-photo-1194780.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '14',
    title: 'Harmony',
    medium: 'Watercolor',
    date: '2021',
    description: 'A celebration of balance and unity, this piece uses complementary colors and flowing forms to create a sense of perfect equilibrium.',
    image: 'https://images.pexels.com/photos/1194781/pexels-photo-1194781.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '15',
    title: 'Reflections',
    medium: 'Oil on Canvas',
    date: '2020',
    description: 'An introspective piece that explores the relationship between reality and perception, using mirror-like surfaces to create depth and meaning.',
    image: 'https://images.pexels.com/photos/1194782/pexels-photo-1194782.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];