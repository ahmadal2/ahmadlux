# AhmadLux+ - Premium Car Showcase & Workshop

A modern, responsive web application for showcasing vehicles and workshop services with realistic automotive speedometers during loading.

## Features

### 🚗 Vehicle Showcase
- Modern grid layout for vehicle display
- Advanced filtering and sorting options
- Detailed vehicle information with tags and pricing
- Responsive design for all device sizes

### 🛠️ Workshop Services
- Comprehensive service listings with detailed descriptions
- Service duration and pricing information
- Step-by-step service breakdown
- Beautiful visual presentation

### 📅 Appointment System
- Easy appointment booking interface
- Appointment management dashboard
- Status tracking for appointments

### 📞 Contact System
- Professional contact form
- Multiple contact options
- Interactive map integration
- Social media links

### 🎨 Design Highlights
- Premium glassmorphism UI design
- Smooth animations and transitions
- Responsive layout for all devices
- Modern color scheme with gold accents
- Realistic automotive speedometer loading screen

### 🚀 Technical Features
- Built with React and Vite for optimal performance
- Framer Motion for smooth animations
- Responsive design with mobile-first approach
- Modern CSS with custom properties
- Component-based architecture

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx
│   └── Footer.jsx
│   └── Footer.module.jsx
├── pages/
│   ├── Home.jsx
│   ├── Cars.jsx
│   ├── Services.jsx
│   ├── Workshop.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
├── appwrite.js
├── App.css
└── index.css
```

## Key Improvements

### Loading Screen
- Realistic dual speedometer design (km/h and RPM)
- 250+ detailed scale markings for maximum realism
- Advanced SVG gradients and filters
- Smooth animation with ease-in-out timing
- Responsive design for all device sizes

### Navigation
- Modern glassmorphism design
- Smooth hover effects and transitions
- Mobile-responsive hamburger menu
- Active state highlighting

### Pages
- Consistent design language across all pages
- Enhanced visual hierarchy and typography
- Improved form designs with better validation
- Professional color scheme with gold accents

### Components
- Reusable, well-structured components
- Consistent styling and behavior
- Proper accessibility attributes
- Optimized performance

## Technologies Used

- **React** - Frontend library
- **Vite** - Build tool and development server
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Appwrite** - Backend-as-a-Service
- **CSS3** - Styling and animations
- **SVG** - Vector graphics for speedometers

## Customization

### Colors
The main color scheme uses:
- Primary Gold: #eac266
- Secondary Brown: #a26e4b
- Dark Background: #0a0a0a to #1a1a1a gradients
- Light Text: #ffffff
- Gray Text: #f0f0f0

### Fonts
- **Roboto** - Primary font (300, 400, 500, 700 weights)

### Speedometers
The loading screen features two realistic automotive speedometers:
1. **Left Speedometer** - Vehicle speed (km/h) with detailed markings
2. **Right Speedometer** - Engine RPM with red zone indicator

## Performance

- Optimized bundle size with Vite
- Lazy loading for images and components
- Efficient React component structure
- CSS optimization with minimal repaints

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Environment Variables

Create a `.env` file in the root directory:
```
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

This project is licensed under the MIT License.# ahmadlux
